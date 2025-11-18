import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      {/* Spline animated gold-fluid cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ShS6h2HOKd20s1py/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* warm gradient overlay for text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="max-w-2xl text-left text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            The "Gold Standard" of Tax Strategy.
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90">
            You focus on your long game. We’ll handle the hazards.
          </p>
          <p className="mt-5 text-base md:text-lg text-white/80 max-w-xl">
            Tax season shouldn't feel like being stuck in the rough. At Aurum Tax Advisory, we provide the strategic insight you need to enjoy the view—and the wealth you’ve built.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-slate-900 font-semibold shadow-[0_8px_30px_rgba(251,191,36,0.5)] hover:bg-amber-300 transition">
              Be My Caddie (Book a Call)
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-white hover:bg-white/10 transition">
              View the Course Map (Services)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
