import React from 'react'

export default function ProgramWhatYouWillLearn({ data }) {
  if (!data || !data.topics) return null

  const isFourCols = data.topics.length > 6

  return (
    <section className="py-global bg-white border-t border-slate-100">
      <div className="global-container space-y-12">
        <h2 className="heading-section font-semibold text-center">
          {data.title}
        </h2>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            isFourCols ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          } gap-6`}
        >
          {data.topics.map((topic) => {
            const Icon = topic.icon
            return (
              <div
                key={topic.title}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 flex flex-col items-start shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#BE042626] border border-rose-100 flex items-center justify-center text-primary mb-4">
                  <Icon className="w-7 h-7 stroke-[1.75]" />
                </div>

                <h3 className="body-text font-semibold">
                  {topic.title}
                </h3>

                <p className="body-card mt-2">
                  {topic.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
