import React from 'react'

export default function ProgramScope({ data }) {
  if (!data || !data.scopes) return null

  const isSixItems = data.scopes.length === 6

  return (
    <section className="py-global bg-primary text-white">
      <div className="global-container space-y-12">
        <h2 className="heading-section font-semibold text-center">
          {data.title}
        </h2>

        {isSixItems ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.scopes.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-[#FFFFFF3D] backdrop-blur-md rounded-3xl p-7 sm:p-8 flex flex-col items-start space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#BE042626] flex items-center justify-center text-white shrink-0">
                    {typeof Icon === 'string' ? (
                      <img src={Icon} alt={item.title} className="w-6 h-6 object-contain" />
                    ) : (
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    )}
                  </div>

                  <h3 className="body-text font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="body-card text-white">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Top Row of 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.scopes.slice(0, 3).map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="bg-[#FFFFFF3D] backdrop-blur-md rounded-3xl p-5 flex flex-col items-start space-y-4"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#BE042626] flex items-center justify-center text-white shrink-0">
                      {typeof Icon === 'string' ? (
                        <img src={Icon} alt={item.title} className="w-6 h-6 object-contain" />
                      ) : (
                        <Icon className="w-6 h-6 stroke-[1.75]" />
                      )}
                    </div>
                    <h3 className="body-text font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="body-card text-white">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Bottom Row of 2 Centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {data.scopes.slice(3, 5).map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="bg-[#FFFFFF3D] backdrop-blur-md rounded-3xl p-5 flex flex-col items-start space-y-4"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#BE042626] flex items-center justify-center text-white shrink-0">
                      {typeof Icon === 'string' ? (
                        <img src={Icon} alt={item.title} className="w-6 h-6 object-contain" />
                      ) : (
                        <Icon className="w-6 h-6 stroke-[1.75]" />
                      )}
                    </div>
                    <h3 className="body-text font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="body-card text-white">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
