import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Users, Zap, Calendar, BarChart3, Lock, ArrowRight, ExternalLink, Github, MessageSquare, ListTodo, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "TaskLooms - Collaborative Task Management | UBConcept Portfolio",
  description: "Explore TaskLooms, our powerful task management platform with real-time collaboration, advanced scheduling, and team productivity features.",
   keywords: ["TaskLooms", "collaborative task management", "team collaboration", "project management", "real-time sync", "task organization", "productivity tools", "UBConcept", "portfolio"],
     robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ubconcept.vercel.app/portfolio/tasklooms",
  },
  authors: [
    {
      name: "UBConcept",
      url: "https://ubconcept.vercel.app",
    },
  ],
  publisher: "UBConcept",
  category: "portfolio",
  verification: {
google: "google-site-verification=google2f44b44c882c1b38.html",
  },
  openGraph: {
    title: "TaskLooms - Collaborative Task Management | UBConcept Portfolio",
  description: "Explore TaskLooms, our powerful task management platform with real-time collaboration, advanced scheduling, and team productivity features.",
    type: "website",
    url: "https://ubconcept.vercel.app/portfolio/tasklooms",
    siteName: "UBConcept",
    images: [
      {
        url: '/images/portfolio-og-images/tasklooms-og.png', 
        width: 800,
        height: 600,
      }]
  },
    twitter: {
    card: "summary_large_image",
     title: "TaskLooms - Collaborative Task Management | UBConcept Portfolio",
  description: "Explore TaskLooms, our powerful task management platform with real-time collaboration, advanced scheduling, and team productivity features.",
      images: [ {
        url: '/images/portfolio-og-images/tasklooms-og.png', 
        width: 800,
        height: 600,
      }],
  },
    metadataBase: new URL("https://ubconcept.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "UBConcept",
  },
}

// Project Data
const projectData = {
  title: "TaskLooms",
  subtitle: "Collaborative Task Management Platform",
  description: "A modern, intuitive task management platform that empowers teams to collaborate efficiently, organize their work seamlessly, and deliver projects on time. Built with real-time synchronization and advanced team collaboration features.",
  website: "https://tasklooms.vercel.app",
  github: "https://github.com/amitupadhyay878/tasklooms",
  duration: "4 months",
  team: "Full-stack development team",
}

const features = [
  {
    icon: ListTodo,
    title: "Smart Task Management",
    description: "Create, organize, and manage tasks with custom categories, priorities, and deadlines."
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Collaborate with team members in real-time with live updates and instant notifications."
  },
  {
    icon: Calendar,
    title: "Advanced Scheduling",
    description: "Flexible scheduling with Gantt charts, calendar view, and timeline management."
  },
  {
    icon: MessageSquare,
    title: "Team Communication",
    description: "Built-in comments, mentions, and threaded discussions within tasks."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Track progress with detailed analytics, reports, and productivity insights."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Role-based access control and enterprise-grade security for your data."
  }
]

const techStacks = [
  { name: "Next.js", category: "Framework", color: "from-gray-700 to-gray-900", emoji: "▲" },
  { name: "TypeScript", category: "Language", color: "from-blue-600 to-blue-800", emoji: "TS" },
  { name: "Tailwind CSS", category: "Styling", color: "from-cyan-500 to-blue-500", emoji: "🎨" },
  { name: "PostgreSQL", category: "Database", color: "from-blue-600 to-blue-800", emoji: "🐘" },
  { name: "WebSocket", category: "Real-time", color: "from-purple-600 to-purple-800", emoji: "⚡" },
  { name: "Docker", category: "Deployment", color: "from-blue-500 to-blue-700", emoji: "🐳" },
]

const platforms = [
  { name: "Web App", icon: "🌐", description: "Full-featured web application" },
  { name: "Mobile Ready", icon: "📱", description: "Responsive mobile design" },
  { name: "API Access", icon: "🔌", description: "RESTful API for integrations" },
]

const functionality = [
  "Hierarchical task organization",
  "Real-time collaboration & sync",
  "Gantt chart & timeline views",
  "Team member assignments",
  "Progress tracking & milestones",
  "File attachments & comments",
  "Recurring task automation",
  "Custom workflows",
  "Time tracking integration",
  "Export to CSV/PDF",
  "Webhook integrations",
  "Advanced permissions"
]

const stats = [
  { number: "10K+", label: "Active Teams" },
  { number: "500K+", label: "Tasks Created" },
  { number: "50M+", label: "Collaborations" },
]

const useCases = [
  {
    title: "Agile Teams",
    description: "Sprint planning, backlog management, and Scrum board views",
    icon: "🎯"
  },
  {
    title: "Project Management",
    description: "Timeline management, resource allocation, and milestone tracking",
    icon: "📊"
  },
  {
    title: "Creative Teams",
    description: "Asset management, design reviews, and collaborative workflows",
    icon: "🎨"
  },
  {
    title: "Operations",
    description: "Process automation, SLA tracking, and compliance monitoring",
    icon: "⚙️"
  }
]

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative pt-20 pb-12 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/50 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm font-bold">
              ✨ FEATURED PROJECT
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              {projectData.title}
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">{projectData.subtitle}</p>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            {projectData.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-20">
            <Link href={projectData.website}
              passHref target="_blank" rel="noopener noreferrer"
             className="bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 text-white px-6 py-2.5 rounded-full text-base font-medium transition-all">
              {/* <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"> */}
                Visit Live Site
                {/* <ExternalLink className="h-5 w-5" /> */}
              {/* </Button> */}
            </Link>
            {/* <Link href={projectData.github} target="_blank">
              <Button variant="outline" className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 backdrop-blur-sm hover:scale-105 transition-all">
                <Github className="h-5 w-5" />
                View Source Code
              </Button>
            </Link> */}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { label: "Duration", value: "4 Months", icon: "⏱️" },
              { label: "Team Size", value: "Full Stack", icon: "👥" },
              { label: "Status", value: "Live", icon: "🚀" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm cursor-pointer transition-all hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2"
              >
                <p className="text-3xl mb-2">{item.icon}</p>
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="text-white text-xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/10"></div>
            <div className="relative">
              <Image
                src="/images/tasklooms2.png"
                alt="TaskLooms - Collaborative Task Management Platform"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Stats Section Component
function StatsSection() {
  return (
    <section className="py-12 md:py-20 border-y border-gray-800 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer transition-all hover:scale-105">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3 group-hover:from-purple-300 group-hover:to-cyan-300 transition-all">
                {stat.number}
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-lg font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features Section Component
function FeaturesSection() {
  return (
    <section className="py-16 md:py-32 bg-white/5 border-y border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">TaskLooms</span>?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const bgGradients = [
                "from-purple-600/20 to-purple-400/10",
                "from-blue-600/20 to-blue-400/10",
                "from-cyan-600/20 to-cyan-400/10",
                "from-purple-600/20 to-purple-400/10",
                "from-blue-600/20 to-blue-400/10",
                "from-cyan-600/20 to-cyan-400/10"
              ]
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/60 rounded-2xl overflow-hidden hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm cursor-pointer group hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-3"
                >
                  <div className={`bg-gradient-to-br ${bgGradients[index]} h-32 w-full relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-20">
                      <Icon className="h-24 w-24 text-white absolute -top-6 -right-6 rotate-12 opacity-50" />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="bg-gradient-to-br from-purple-600/30 to-cyan-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-purple-400 group-hover:gap-3 transition-all">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Tech Stack Section Component
function TechStackSection() {
  return (
    <section className="py-16 md:py-32 bg-white/5 border-y border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center gap-4">
              <span className="text-3xl">🛠️</span>
              <span>Technology Stack</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Built with modern technologies for scalability and real-time performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStacks.map((tech, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${tech.color} p-8 rounded-2xl border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group relative overflow-hidden hover:scale-105 hover:shadow-lg`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-white font-bold text-2xl">{tech.name}</p>
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{tech.emoji}</span>
                  </div>
                  <p className="text-gray-100 text-sm font-medium">{tech.category}</p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to learn more →
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-purple-600/10 to-cyan-500/10 border border-gray-700 rounded-2xl p-8">
            <p className="text-gray-300 text-center text-lg">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                6 Technologies
              </span>{' '}
              carefully selected for optimal performance, real-time collaboration, and scalability
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Functionality Section Component
function FunctionalitySection() {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center gap-4">
              <span className="text-3xl">⚙️</span>
              <span>Core Functionalities</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Comprehensive features designed for modern task management and team collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {functionality.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gradient-to-r from-gray-900/60 to-gray-800/40 border border-gray-700/60 rounded-xl p-5 hover:border-purple-500/40 transition-all cursor-pointer group hover:translate-x-2"
              >
                <div className="bg-gradient-to-br from-purple-500/40 to-cyan-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="h-6 w-6 text-purple-300" />
                </div>
                <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Use Cases Section Component
function UseCasesSection() {
  return (
    <section className="py-16 md:py-32 bg-white/5 border-y border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center gap-4">
              <span className="text-3xl">💼</span>
              <span>Perfect For</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Designed to support various team structures and workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/60 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm cursor-pointer group hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2"
              >
                <p className="text-5xl mb-4">{useCase.icon}</p>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Platforms Section Component
function PlatformsSection() {
  return (
    <section className="py-16 md:py-32 bg-white/5 border-y border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center gap-4">
              <span className="text-3xl">🌍</span>
              <span>Multi-Platform</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Access your tasks and collaborate from anywhere
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-600/20 to-cyan-600/10 border border-purple-500/30 rounded-2xl p-10 text-center hover:border-purple-400/60 transition-all cursor-pointer group hover:scale-105 hover:-translate-y-2"
              >
                <p className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">
                  {platform.icon}
                </p>
                <p className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                  {platform.name}
                </p>
                <p className="text-gray-400">{platform.description}</p>
                <div className="mt-6 pt-6 border-t border-purple-500/20">
                  <p className="text-purple-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Optimized & Ready →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section Component
function CTASection() {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-blue-600/30 to-cyan-500/40"></div>
            <div className="relative z-10 backdrop-blur-md border border-gray-600/50 bg-black/30 rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Transform <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Your Team's Workflow?
                </span>
              </h2>

              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Join thousands of teams who trust TaskLooms to manage their projects, collaborate efficiently, and deliver results faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={projectData.website} target="_blank">
                  <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                    Start Free Trial
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/contact-us">
                  <Button variant="outline" className="border-2 border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/10 px-10 py-4 rounded-xl font-bold text-lg backdrop-blur-sm w-full sm:w-auto hover:scale-105 transition-all">
                    Schedule Demo
                  </Button>
                </Link>
              </div>

              <p className="text-gray-400 text-sm mt-8">
                🎯 14-day free trial • 💳 No credit card required • 🔒 Always secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Page Component
export default function TaskLoomsProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <FunctionalitySection />
      <UseCasesSection />
      <TechStackSection />
      <PlatformsSection />
      <CTASection />

      <section className="py-16 md:py-32 border-y border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  See It In Action
                </span>
              </h2>
              <p className="text-gray-400 text-lg mt-4">
                Powerful interface designed for maximum productivity
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/10 to-cyan-500/10"></div>
              <div className="relative">
                <Image
                  src="/images/tasklooms3.png"
                  alt="TaskLooms Platform Interface - Task Management in Action"
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { label: "Create Tasks", desc: "Organize work with custom fields", icon: "📝" },
                { label: "Collaborate", desc: "Real-time team updates", icon: "👥" },
                { label: "Track Progress", desc: "Monitor project completion", icon: "📈" }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all hover:-translate-y-2 cursor-pointer"
                >
                  <p className="text-5xl mb-4">{step.icon}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{step.label}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/portfolio">
            <Button variant="ghost" className="text-gray-400 hover:text-white flex items-center gap-2 hover:-translate-x-2 transition-transform">
              ← Back to Portfolio
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}