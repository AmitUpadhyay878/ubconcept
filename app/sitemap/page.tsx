import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import path from 'path'

const Sitemap = () => {
  const routes = [
    { path: '/', name: 'Home' },
    { path: '/about-us', name: 'About' },
    { path: '', name: 'Services', 
      subRoutes: [
        { path: '/services/consulting', name: 'Consulting' },
        { path: '/services/manufacturing', name: 'Manufacturing' },
        { path: '/services/market-research', name: 'Market Research' },
        { path: '/services/product-design', name: 'Product Design' },
        { path: '/services/prototyping', name: 'Prototyping' },
      ]
    },
    { path: '/portfolio', name: 'Portfolio', 
      subRoutes: [
        {path: '/portfolio/tasklooms', name: 'TaskLooms' },
        { path: '/portfolio/tempszero', name: 'TempsZero' }
      ]
    },
    { path: '/blogs', name: 'Blogs' },
    { path: '/contact-us', name: 'Contact' },
     { path: '/privacy-policy', name: 'Privacy Policy' }
  ]

  return (
    <div className="min-h-screen bg-black/[0.96] py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Site<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">map</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Navigate through our website structure and find exactly what you're looking for
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {routes.map((route) => (
            <div 
              key={route.path || route.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="p-6">
                {route.path ? (
                  <Link 
                    href={route.path}
                    className="group flex items-center justify-between"
                  >
                    <span className="text-xl font-medium text-white group-hover:text-amber-400 transition-colors">
                      {route.name}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <>
                    <h2 className="text-xl font-medium text-white mb-4">{route.name}</h2>
                    {route.subRoutes && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {route.subRoutes.map((subRoute) => (
                          <Link
                            key={subRoute.path}
                            href={subRoute.path}
                            className="group flex items-center p-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                          >
                            <span className="text-gray-300 group-hover:text-amber-400 transition-colors">
                              {subRoute.name}
                            </span>
                            <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-amber-400 transition-transform group-hover:translate-x-1" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sitemap
