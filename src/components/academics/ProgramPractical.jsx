import React from 'react'

export default function ProgramPractical({ data }) {
  if (!data || !data.components) return null

  return (
    <section className="py-global bg-slate-50 border-t border-slate-100">
      <div className="global-container space-y-12">
        <h2 className="heading-section font-semibold text-center">
          {data.title}
        </h2>

        {/* Top Row of 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.components.slice(0, 3).map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-7 shadow-xs border border-slate-100 flex flex-col items-start shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#BE04261A] flex items-center justify-center text-primary mb-5">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="body-text font-semibold">
                  {item.title}
                </h3>
                <p className="body-card mt-2">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Row of 2 Centered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.components.slice(3, 5).map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-7 shadow-xs border border-slate-100 flex flex-col items-start shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-primary mb-5">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="body-text font-semibold">
                  {item.title}
                  </h3>
                  <p className="body-card mt-2">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
