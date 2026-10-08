import React from 'react'

export default function NewsHero() {
  return (
    <section className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] flex items-center bg-[#0a0f1d] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-right md:bg-[position:65%_center] lg:bg-right bg-no-repeat"
        style={{
          backgroundImage: `url('/news/hero-students.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1d] via-[#0a0f1d]/90 md:via-[#0a0f1d]/75 lg:via-[#0a0f1d]/60 to-transparent" />
      </div>

      <div className="relative z-10 global-container w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <h1 className="heading-main font-extrabold text-white leading-tight">
            Events &amp; News <span className="text-[#b31424]">Articles</span>
          </h1>

          <p className="body-text text-white font-normal max-w-xl">
            Stay Updated With The Latest Academic Programmes, Teaching Workshops, Educational Seminars, Campus Activities, And Student Achievements At The College Of Education.
          </p>
        </div>
      </div>
    </section>
  )
}
