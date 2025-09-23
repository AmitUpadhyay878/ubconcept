import React from 'react'
import Link from 'next/link'

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
    { path: '/blogs', name: 'Blogs' },
    { path: '/contact-us', name: 'Contact' }
  ]

  return (
    <main className="relative bg-black">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="font-display text-3xl font-light tracking-tight text-white sm:text-6xl">
              Site<span className="font-medium">map</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore our complete website structure and find exactly what you're looking for
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {routes.map((route) => (
              <div key={route.path || route.name} 
                className="border-t border-white/10 pt-10 first:border-none">
                {route.path ? (
                  <Link 
                    href={route.path}
                    className="group inline-flex items-center text-xl sm:text-2xl font-light text-white"
                  >
                    <span className="transition group-hover:text-blue-400">{route.name}</span>
                    <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                ) : (
                  <h2 className="text-xl sm:text-2xl font-light text-white">
                    {route.name}
                  </h2>
                )}
                
                {route.subRoutes && (
                  <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {route.subRoutes.map((subRoute) => (
                      <Link
                        key={subRoute.path}
                        href={subRoute.path}
                        className="group relative overflow-hidden rounded-3xl bg-white/[0.03] p-8 transition hover:bg-white/[0.06]"
                      >
                        <div className="relative z-10">
                          <h3 className="font-display text-xl font-light text-white">
                            {subRoute.name}
                          </h3>
                          <p className="mt-6 inline-flex items-center text-sm text-blue-400">
                            Explore
                            <span className="ml-2 transition-transform group-hover:translate-x-2">
                              →
                            </span>
                          </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Sitemap
