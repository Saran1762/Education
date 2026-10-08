import React from 'react'

export default function ProgramWhyChoose({ data }) {
  if (!data || !data.points) return null

  return (
    <section className="py-global bg-[#F8FAFC]">
      <div className="global-container space-y-12">
        <h2 className="heading-section font-semibold text-center">
          {data.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.points.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="bg-white rounded-3xl p-7 shadow-xs border border-slate-100 flex flex-col items-start shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#BE042626] flex items-center justify-center text-primary mb-5">
                  {typeof Icon === 'string' ? (
                    <img src={Icon} alt={point.title} className="w-7 h-7 object-contain" />
                  ) : (
                    <Icon className="w-7 h-7 stroke-[1.75]" />
                  )}
                </div>

                <h3 className="body-text  font-semibold">
                  {point.title}
                </h3>

                <p className="body-card mt-2">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
