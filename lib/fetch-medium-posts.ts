import { XMLParser } from 'fast-xml-parser';

export type MediumPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  link: string;
};

export async function fetchMediumPosts(feedUrl: string): Promise<MediumPost[]> {
  try {
    // Validate feed URL
    if (!feedUrl || !feedUrl.startsWith('https://medium.com/')) {
      console.error('Invalid Medium feed URL');
      return [];
    }

    // Use a CORS proxy to fetch the RSS feed
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`;
    
    console.log(`Fetching Medium posts from: ${feedUrl} via proxy`);
    
    // Fetch the RSS feed through the proxy with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      const response = await fetch(proxyUrl, { 
        next: { revalidate: 3600 }, // Revalidate every hour
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Failed to fetch Medium feed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (!data?.contents) {
        throw new Error('No contents found in proxy response');
      }

      // Parse the XML with error handling
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "@_",
        parseAttributeValue: true,
        trimValues: true
      });

      const result = parser.parse(data.contents);
      if (!result?.rss?.channel) {
        throw new Error('Invalid RSS feed structure');
      }

      const items = result.rss.channel.item;
      if (!items) {
        console.warn('No items found in the RSS feed');
        return [];
      }
    
    // Map the items to our blog post format
    return (Array.isArray(items) ? items : [items]).map((item: any, index: number) => {
      // Safely extract and validate content
      const contentStr = item['content:encoded'] || '';
      let firstImage = '/placeholder.svg';
      
      // Try to find the first image, with additional OG image fallback
      const imgMatch = contentStr.match(/<img[^>]+src="([^"]+)"[^>]*>/i);
      if (imgMatch && imgMatch[1]) {
        try {
          const imageUrl = new URL(imgMatch[1]);
          firstImage = imageUrl.toString();
        } catch (e) {
          console.warn(`Invalid image URL found: ${imgMatch[1]}`);
        }
      }

      // Create a safe slug from title
      const slug = (item.title || 'untitled')
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove all non-word chars except hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .trim();

      // Safely format the date
      let formattedDate = 'No date';
      try {
        const pubDate = new Date(item.pubDate);
        if (!isNaN(pubDate.getTime())) {
          formattedDate = pubDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      } catch (e) {
        console.warn(`Invalid date format: ${item.pubDate}`);
      }

      // Create a safe excerpt with smart fallback
      let excerpt = 'No description available';
      const maxExcerptLength = 160;

      const cleanHtml = (html: string) => {
        return html
          .replace(/<[^>]*>/g, '') // Remove HTML tags
          .replace(/\s+/g, ' ') // Normalize whitespace
          .trim();
      };

      if (item.description) {
        excerpt = cleanHtml(item.description);
      } else if (item['content:encoded']) {
        excerpt = cleanHtml(item['content:encoded']);
      }

      // Ensure excerpt is not too long and ends with ellipsis
      if (excerpt !== 'No description available') {
        excerpt = excerpt.substring(0, maxExcerptLength).trim();
        if (excerpt.length === maxExcerptLength) {
          // Find the last complete word
          const lastSpace = excerpt.lastIndexOf(' ');
          if (lastSpace > maxExcerptLength * 0.8) { // Only trim to last word if we're not cutting too much
            excerpt = excerpt.substring(0, lastSpace);
          }
          excerpt += '...';
        }
      }

      return {
        id: index.toString(),
        title: item.title || 'Untitled Post',
        excerpt: excerpt,
        date: formattedDate,
        author: item['dc:creator'] || 'Amit Upadhyay',
        image: firstImage,
        slug: slug || `post-${index}`,
        link: item.link || '#'
      };
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('Fetch timeout: The request took too long to complete');
      } else {
        console.error('Error fetching Medium posts:', error.message);
      }
    } else {
      console.error('Unknown error fetching Medium posts');
    }
    console.log('Returning fallback posts from the component');
    return [];
  }
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
}