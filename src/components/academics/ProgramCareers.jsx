import React from 'react'

export default function ProgramCareers({ data }) {
  if (!data || !data.careers) return null

  const isNine = data.careers.length === 9

  return (
    <section className="py-global bg-white border-t border-slate-100">
      <div className="global-container space-y-12">
        <h2 className="heading-section font-bold text-center">
          {data.title || 'Career Opportunities'}
        </h2>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            isNine ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
          } gap-6`}
        >
          {data.careers.map((career) => (
            <div
              key={career.title}
              className="bg-white rounded-3xl p-5 border border-slate-100 flex flex-col shadow-xs"
            >
              <div
                className={`w-full ${
                  isNine ? 'aspect-[16/10]' : 'aspect-[4/3]'
                } rounded-2xl overflow-hidden bg-slate-100 mb-4`}
              >
                <img
                  src={career.image}
                  alt={career.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="body-text font-bold">
                {career.title}
              </h3>
              <p className="body-card mt-1.5 leading-relaxed">
                {career.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
