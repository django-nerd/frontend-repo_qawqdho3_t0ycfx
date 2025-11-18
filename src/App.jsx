import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Hero with Spline gold fluid cover */}
      <Hero />

      {/* SEO-optimized hero image for crawlers and fallback */}
      <section className="sr-only" aria-hidden>
        <picture>
          <source srcSet="/aurum-tax-advisory-financial-freedom-sunset.webp" type="image/webp" />
          <img
            src="/aurum-tax-advisory-financial-freedom-sunset.jpg"
            alt="Sunset over an ocean-side golf course representing financial peace of mind and golden years retirement."
          />
        </picture>
      </section>

      {/* Strategy & Services */}
      <Services />

      {/* About / Philosophy */}
      <About />

      {/* Simple footer */}
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Aurum Tax Advisory. All rights reserved.
      </footer>
    </div>
  )
}

export default App
