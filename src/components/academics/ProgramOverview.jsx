import React from 'react'

export default function ProgramOverview({ data }) {
  if (!data) return null

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="global-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Overview & Highlights */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="heading-section font-bold text-primary tracking-tight">
                {data.title}
              </h2>
              <p className="body-text">
                {data.description}
              </p>
            </div>

            {data.highlights && data.highlights.length > 0 && (
              <div className="space-y-4 pt-2">
                <h3 className="heading-section font-bold text-primary tracking-tight">
                  {data.highlightsTitle}
                </h3>
                <ul className="space-y-2.5 body-text">
                  {data.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Visual Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={data.image}
                alt={data.imageAlt || 'Program Overview Image'}
                className="w-full h-[360px] sm:h-[440px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
