import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"
import { fetchMediumPosts, type MediumPost } from "@/lib/fetch-medium-posts"
import type { Metadata } from "next"
import BlogPostImage from "@/components/blog-post-image"

export const metadata: Metadata = {
  title: "Blog | UBConcept",
  description: "Latest insights on product development, design trends, and innovation",
  openGraph: {
    title: "Blog | UBConcept",
    description: "Latest insights on product development, design trends, and innovation",
    type: "website",
  }
}

// Fallback blog posts in case the fetch fails
const fallbackPosts: MediumPost[] = [
  {
    id: "1",
    title: "The Future of Product Design: Trends to Watch in 2023",
    excerpt:
      "Explore the emerging trends that are shaping the future of product design and development, from sustainable materials to AI-driven personalization.",
    date: "June 15, 2023",
    author: "Jane Smith",
    image: "/placeholder.svg?height=400&width=600&text=Product+Design+Trends",
    slug: "future-of-product-design",
    link: "#",
  },
  {
    id: "2",
    title: "From Concept to Market: A Step-by-Step Guide",
    excerpt:
      "Learn the essential steps to take your product from initial concept to successful market launch, including prototyping, testing, and marketing strategies.",
    date: "May 22, 2023",
    author: "John Doe",
    image: "/placeholder.svg?height=400&width=600&text=Concept+to+Market",
    slug: "concept-to-market-guide",
    link: "#",
  },
  {
    id: "3",
    title: "How User-Centered Design Drives Product Success",
    excerpt:
      "Discover why putting users at the center of your design process leads to more successful products and higher customer satisfaction.",
    date: "April 10, 2023",
    author: "Robert Johnson",
    image: "/placeholder.svg?height=400&width=600&text=User-Centered+Design",
    slug: "user-centered-design",
    link: "#",
  },
  {
    id: "4",
    title: "Sustainable Innovation: Designing for the Future",
    excerpt:
      "How incorporating sustainability into your product design process can lead to innovation, cost savings, and a positive impact on the environment.",
    date: "March 5, 2023",
    author: "Emily Chen",
    image: "/placeholder.svg?height=400&width=600&text=Sustainable+Innovation",
    slug: "sustainable-innovation",
    link: "#",
  },
  {
    id: "5",
    title: "The Psychology of User Experience: What Every Designer Should Know",
    excerpt:
      "Understanding the psychological principles that influence user behavior and how to apply them to create more intuitive and engaging product experiences.",
    date: "February 18, 2023",
    author: "Michael Brown",
    image: "/placeholder.svg?height=400&width=600&text=Psychology+of+UX",
    slug: "psychology-of-ux",
    link: "#",
  },
  {
    id: "6",
    title: "Prototyping Techniques That Save Time and Money",
    excerpt:
      "Effective prototyping strategies that help identify design flaws early, reduce development costs, and accelerate the path to market.",
    date: "January 30, 2023",
    author: "Sarah Williams",
    image: "/placeholder.svg?height=400&width=600&text=Prototyping+Techniques",
    slug: "prototyping-techniques",
    link: "#",
  },
]

export default async function BlogPage() {
  // Fetch Medium posts
  const mediumPosts = await fetchMediumPosts('https://medium.com/feed/@amitupadhyay878')
  
  // Use fetched posts or fallback to sample posts if fetch fails
  const blogPosts = mediumPosts.length > 0 ? mediumPosts : fallbackPosts
  
  // Add a loading state with Suspense boundaries in the parent layout if needed
  // We could implement pagination here if there are many posts
  // For now, we'll display all posts since Medium RSS typically limits the feed
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
          Insights
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
          Latest insights on product development, design trends, and innovation
        </p>
      </div>

      {blogPosts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-300 text-lg">No blog posts found. Please check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={post.link} key={post.id} className="group" target="_blank" rel="noopener noreferrer">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all group-hover:transform group-hover:scale-[1.02] group-hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <BlogPostImage
                    src={post.image || "/placeholder.svg?height=400&width=600&text=UBConcept+Blog"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="text-amber-400 font-medium flex items-center group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}