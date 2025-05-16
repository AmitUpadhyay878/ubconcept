import { ArrowRight, ExternalLink, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Define the project type
type Project = {
  id: string
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  link?: string
}

// Sample top projects data - only Tasklooms and TempsZero
const topProjects: Project[] = [
  {
    id: "tasklooms",
    title: "TaskLooms",
    description:
      "A modern task management application with user authentication, real-time updates, and collaborative features. Helps teams organize projects, track progress, and meet deadlines efficiently.",
    image: "/images/tasklooms.png",
    category: "Web Application",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "OAuth"],
    link: "https://tasklooms.vercel.app",
  },
  {
    id: "tempszero",
    title: "TempsZero",
    description:
      "A secure file sharing platform with end-to-end encryption. Allows users to quickly upload, share, and manage files with confidence. Features include no-account sharing, secure links, and comprehensive file management.",
    image: "/images/tempszero.png",
    category: "File Sharing",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Encryption"],
    link: "https://tempszero.vercel.app",
  },
]

export default function HomePortfolio() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                Projects
              </span>
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl">
              Explore some of our most innovative and successful product developments
            </p>
          </div>

          <Link href="/portfolio" className="mt-4 md:mt-0">
            <Button variant="outline" className="text-white border-amber-500 hover:bg-amber-500/20">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {topProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all hover:transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden relative">
                {project.image.startsWith("/images/") ? (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-110 duration-500"
                  />
                ) : (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="text-xs font-medium bg-blue-700/20 text-amber-400 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                    <Code className="h-4 w-4 mr-1" /> Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <Link href={project.link} passHref target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full text-white border-amber-500 hover:bg-amber-500/20">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
