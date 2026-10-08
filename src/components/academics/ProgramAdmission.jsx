import React from 'react'

export default function ProgramAdmission({ data }) {
  if (!data || !data.steps) return null

  return (
    <section className="py-global bg-white border-t border-slate-100">
      <div className="global-container space-y-16 sm:space-y-20">
        <h2 className="heading-section font-bold text-center">
          {data.title || 'Admission Procedure'}
        </h2>

        {/* Timeline Container */}
        <div className="relative max-w-3xl lg:max-w-4xl mx-auto py-6">
          {/* Center Vertical Guideline (extends past first and last dot) */}
          <div className="absolute left-4 md:left-1/2 -top-4 -bottom-4 w-[4px] bg-[#f7b5be] -translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {data.steps.map((item) => {
              const isRight = item.align === 'right'

              return (
                <div
                  key={item.step}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Center Node Dot (Outer pink ring with white fill and solid red center) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-7 md:top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-2 border-[#f7b5be] flex items-center justify-center z-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#BE0426]" />
                  </div>

                  {/* Left Column Box */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-0 md:pr-10 flex md:justify-end">
                    {!isRight ? (
                      <div className="bg-[#f8f9fb] rounded-[22px] p-5 border border-slate-100/60 shadow-xs max-w-[400px] w-full text-left md:text-right">
                        <span className="inline-block px-5 py-2 rounded-full text-[clamp(0.625rem,0.55rem+0.3vw,0.75rem)] font-bold text-primary bg-rose-100/70 mb-2">
                          {item.step}
                        </span>
                        <h3 className="body-text font-bold text-primary">
                          {item.title}
                        </h3>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full max-w-[340px]" />
                    )}
                  </div>

                  {/* Right Column Box */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-10 flex md:justify-start">
                    {isRight ? (
                      <div className="bg-[#f8f9fb] rounded-[22px] p-5 border border-slate-100/60 shadow-xs max-w-[400px] w-full text-left">
                        <span className="inline-block px-5 py-2 rounded-full text-[clamp(0.625rem,0.55rem+0.3vw,0.75rem)] font-bold text-primary bg-rose-100/70 mb-2">
                          {item.step}
                        </span>
                        <h3 className="body-text font-bold text-primary">
                          {item.title}
                        </h3>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full max-w-[340px]" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

