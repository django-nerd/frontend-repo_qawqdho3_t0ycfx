import React from 'react'

export default function Services() {
  return (
    <section id="services" className="relative w-full py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Avoid the Sand Traps. Stay on the Green.
          </h2>
          <p className="mt-3 text-slate-600">
            Keywords: Tax Liabilities, IRS Audits, Financial Hazards
          </p>
          <p className="mt-5 text-slate-700">
            Look at the tax code like a difficult Par 5. There are hidden bunkers, water hazards, and doglegs everywhere.
          </p>
          <p className="mt-3 text-slate-700">
            Most accountants just keep score. We help you swing.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900">Hazard Avoidance (Compliance)</h3>
              <p className="text-slate-700">We know exactly where the IRS traps are located. We navigate the forms so you don’t get stuck in the sand.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Reading the Green (Advisory)</h3>
              <p className="text-slate-700">The wind changes, and so do tax laws. We adjust your stance to ensure your money lands exactly where you want it—in your pocket.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Improving Your Handicap (Profitability)</h3>
              <p className="text-slate-700">Lower your tax liability and improve your bottom line with proactive, year-round coaching.</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <picture>
            <source srcSet="/tax-strategy-planning-avoiding-hazards.webp" type="image/webp" />
            <img
              src="/tax-strategy-planning-avoiding-hazards.jpg"
              alt="Aerial view of a golf course green with sand traps, symbolizing strategic tax planning and avoiding financial hazards."
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
