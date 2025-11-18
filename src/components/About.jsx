import React from 'react'

export default function About() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-amber-50">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why "Aurum"?</h2>
            <p className="mt-5 text-slate-700">
              In Latin, Aurum means Gold. In photography, the "Golden Hour" is that perfect moment before sunset when everything looks its best.
            </p>
            <p className="mt-4 text-slate-700">
              That is our philosophy. We don't just crunch numbers in a dark room. We shed light on your finances, highlighting the opportunities that others miss, ensuring your business looks its best when it matters most.
            </p>
          </div>

          <div className="md:col-span-5 bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
            <blockquote className="text-lg text-slate-800">
              "A good tax advisor is like a great caddie: They know the course, they carry the heavy bag, and they tell you exactly which club to use to win."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
