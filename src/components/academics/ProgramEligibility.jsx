import React from 'react'

export default function ProgramEligibility({ data }) {
  if (!data || !data.criteria) return null

  return (
    <section className="py-global bg-[#b31424] text-white">
      <div className="global-container space-y-12">
        <h2 className="heading-section font-semibold text-center">
          {data.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {data.criteria.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-[#FFFFFF3D] backdrop-blur-md rounded-3xl p-7 sm:p-8 flex flex-col justify-start space-y-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#BE042626] flex items-center justify-center text-white shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>

                <h3 className="body-text font-semibold text-white">
                  {item.title}
                </h3>

                <ul className="space-y-1 body-card text-white">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
