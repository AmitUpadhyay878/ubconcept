import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, CheckCircle, ArrowRight, Zap, ShieldCheck, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'


export const metadata:Metadata = {
  title: "TempsZero - Secure File Sharing | UBConcept Portfolio",
  description: "Explore TempsZero, our secure file sharing platform with end-to-end encryption, fast uploads, and comprehensive file management features.",
  keywords: ["TempsZero", "secure file sharing", "file upload", "end-to-end encryption", "file management", "project showcase", "portfolio", "UBConcept"],
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
    canonical: "https://ubconcept.vercel.app/portfolio/tempszero",
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
    title: "tempszero - Secure File Sharing | UBConcept Portfolio",
    description:
      "Explore TempsZero, our secure file sharing platform with end-to-end encryption, fast uploads, and comprehensive file management features.",
    type: "website",
    url: "https://ubconcept.vercel.app/portfolio/tempszero",
    siteName: "UBConcept",
    images: [
      {
        url: '/images/portfolio-og-images/tempszero2.png', 
        width: 800,
        height: 600,
      }]
  },
  twitter: {
    card: "summary_large_image",
    title: "tempszero - Secure File Sharing | UBConcept Portfolio",
     description:
      "Explore TempsZero, our secure file sharing platform with end-to-end encryption, fast uploads, and comprehensive file management features.",
      images: [ {
        url: '/images/portfolio-og-images/tempszero2.png', 
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

const projectData = {
  title: "TempsZero",
  subtitle: "Secure File Sharing Platform",
  description: "A modern, secure file sharing solution that makes uploading and sharing large files simple and efficient. Built with cutting-edge technology for speed, security, and user experience.",
  website: "https://tempszero.vercel.app",
  github: "https://github.com/amitupadhyay878/tempszero",
  duration: "3 months",
  team: "Full-stack development team",
}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Upload and share files in seconds. Optimized for speed and performance."
  },
  {
    icon: ShieldCheck,
    title: "Secure Sharing",
    description: "End-to-end encryption and secure links keep your files protected."
  },
  {
    icon: Users,
    title: "File Management",
    description: "Track, manage and secure all your shared files with ease."
  }
]

const techStacks = [
  { name: "Next.js", category: "Framework", color: "from-gray-700 to-gray-900", emoji: "▲" },
  { name: "TypeScript", category: "Language", color: "from-blue-600 to-blue-800", emoji: "TS" },
  { name: "Tailwind CSS", category: "Styling", color: "from-cyan-500 to-blue-500", emoji: "🎨" },
  { name: "MongoDB", category: "Database", color: "from-green-600 to-green-800", emoji: "🍃" },
  { name: "Firebase", category: "Backend", color: "from-yellow-500 to-orange-600", emoji: "🔥" },
  { name: "Vercel", category: "Deployment", color: "from-gray-600 to-black", emoji: "⚡" },
]

const platforms = [
  { name: "Web", icon: "🌐" },
  { name: "Responsive Design", icon: "📱" },
  { name: "PWA", icon: "📲" },
]

const functionality = [
  "Drag & drop file upload",
  "End-to-end encryption",
  "File preview capability",
  "Download tracking",
  "Expiring links",
  "Custom sharing links",
  "User authentication",
  "Real-time notifications",
  "File versioning",
  "Secure deletion",
  "Bandwidth management",
  "Admin dashboard"
]

const stats = [
  { number: "50K+", label: "Active Users" },
  { number: "1M+", label: "Files Shared" },
  { number: "99.9%", label: "Uptime" },
]

function HeroSection() {
  return (
    <section className="relative pt-20 pb-12 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-amber-500/20 border border-blue-400/50 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400 text-sm font-bold">
              ✨ FEATURED PROJECT
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400">
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
            
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Duration", value: "3 Months", icon: "⏱️" },
              { label: "Team Size", value: "Full Stack", icon: "👥" },
              { label: "Status", value: "Live", icon: "🚀" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2"
              >
                <p className="text-3xl mb-2">{item.icon}</p>
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="text-white text-xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 relative rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-amber-500/10"></div>
            <div className="relative">
              <Image
                src="/images/tempszero2.png"
                alt="TempsZero - Secure File Sharing Platform"
                width={1200}
                height={400}
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

function StatsSection() {
  return (
    <section className="py-12 md:py-20 border-y border-gray-800 bg-gradient-to-r from-blue-900/20 to-amber-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer transition-all hover:scale-105">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400 mb-3 group-hover:from-blue-300 group-hover:to-amber-300 transition-all">
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

function FeaturesSection() {
  return (
    <section className="py-16 md:py-32 bg-white/5 border-y border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">TempsZero</span>?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const bgGradients = [
                "from-blue-600/20 to-blue-400/10",
                "from-amber-600/20 to-amber-400/10",
                "from-green-600/20 to-green-400/10"
              ]
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/60 rounded-2xl overflow-hidden hover:border-blue-500/60 transition-all duration-300 backdrop-blur-sm cursor-pointer group hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-3"
                >
                  <div className={`bg-gradient-to-br ${bgGradients[index]} h-32 w-full relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-20">
                      <Icon className="h-24 w-24 text-white absolute -top-6 -right-6 rotate-12 opacity-50" />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="bg-gradient-to-br from-blue-600/30 to-amber-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
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
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-amber-400 rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Built with cutting-edge technologies for performance and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStacks.map((tech, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${tech.color} p-8 rounded-2xl border border-gray-600/30 hover:border-amber-400/50 transition-all duration-300 cursor-pointer group relative overflow-hidden hover:scale-105 hover:shadow-lg`}
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

          <div className="mt-20 bg-gradient-to-r from-blue-600/10 to-amber-500/10 border border-gray-700 rounded-2xl p-8">
            <p className="text-gray-300 text-center text-lg">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
                6 Technologies
              </span>{' '}
              carefully selected for optimal performance, maintainability, and scalability
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

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
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-amber-400 rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Comprehensive features designed for modern file sharing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {functionality.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gradient-to-r from-gray-900/60 to-gray-800/40 border border-gray-700/60 rounded-xl p-5 hover:border-blue-500/40 transition-all cursor-pointer group hover:translate-x-2"
              >
                <div className="bg-gradient-to-br from-blue-500/40 to-amber-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
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
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Seamlessly works across all your devices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-600/20 to-emerald-600/10 border border-green-500/30 rounded-2xl p-10 text-center hover:border-green-400/60 transition-all cursor-pointer group hover:scale-105 hover:-translate-y-2"
              >
                <p className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300 inline-block">
                  {platform.icon}
                </p>
                <p className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors">
                  {platform.name}
                </p>
                <div className="mt-6 pt-6 border-t border-green-500/20">
                  <p className="text-green-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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

function CTASection() {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-purple-600/30 to-amber-500/40"></div>
            <div className="relative z-10 backdrop-blur-md border border-gray-600/50 bg-black/30 rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Transform <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
                  Your File Sharing?
                </span>
              </h2>

              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Join thousands of users who trust TempsZero for secure, fast, and reliable file sharing. Start for free today!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={projectData.website} target="_blank">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105">
                    Get Started Now
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/contact-us">
                  <Button variant="outline" className="border-2 border-amber-400/60 text-amber-300 hover:bg-amber-400/10 px-10 py-4 rounded-xl font-bold text-lg backdrop-blur-sm w-full sm:w-auto hover:scale-105 transition-all">
                    Contact Sales
                  </Button>
                </Link>
              </div>

              <p className="text-gray-400 text-sm mt-8">
                💳 No credit card required • ⚡ Setup in seconds • 🔒 Always secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function TempsZeroProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <FunctionalitySection />
      <TechStackSection />
      <PlatformsSection />
      <CTASection />

      <section className="py-16 md:py-32 border-y border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
                  See It In Action
                </span>
              </h2>
              <p className="text-gray-400 text-lg mt-4">
                Beautiful UI and seamless user experience
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-amber-500/10"></div>
              <div className="relative">
                <Image
                  src="/images/tempszero.png"
                  alt="TempsZero Platform Interface - Secure File Sharing in Action"
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { label: "Upload Files", desc: "Drag & drop or select files", icon: "📤" },
                { label: "Secure Link", desc: "Get encrypted sharing link", icon: "🔗" },
                { label: "Share", desc: "Send to anyone instantly", icon: "📨" }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 text-center hover:border-blue-500/40 transition-all hover:-translate-y-2 cursor-pointer"
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
