import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { fetchMediumPosts, type MediumPost } from "@/lib/fetch-medium-posts"
import BlogPostImage from "@/components/blog-post-image"

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
]

export default async function BlogSection() {
  // Fetch Medium posts
  const mediumPosts = await fetchMediumPosts('https://medium.com/feed/@amitupadhyay878')
  
  // Use fetched posts or fallback to sample posts if fetch fails
  const blogPosts = mediumPosts.length > 0 ? mediumPosts : fallbackPosts
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                Insights
              </span>
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl">
              Stay updated with our latest articles on product development, design trends, and innovation
            </p>
          </div>

          <Link href="/blogs" className="mt-4 md:mt-0">
            <Button variant="outline" className="text-white border-amber-500 hover:bg-amber-500/20">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <Link href={post.link} key={post.id} className="group" target="_blank" rel="noopener noreferrer">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all group-hover:transform group-hover:scale-[1.02] group-hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <BlogPostImage
                    src={post.image || "/placeholder.svg"}
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
      </div>
    </section>
  )
}
