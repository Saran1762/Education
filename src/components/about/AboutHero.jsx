import React from 'react'
import heroBg from '../../assets/about/herobg.jpg'

export default function AboutHero() {
  return (
    <section className="relative w-full h-[calc(100dvh-72px)] sm:h-[calc(100dvh-80px)] xl:h-[calc(100dvh-96px)] min-h-[500px] flex items-end bg-slate-950 overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 30%, #000000 100%)',
          }}
        />
      </div>

      <div className="relative z-10 global-container pb-10 sm:pb-14 md:pb-16 pt-24">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <h1 className="heading-main font-bold text-white leading-tight">
            About Mother Terasa <br />
            <span className="text-[#b31424]">College Of Education</span>
          </h1>

          <p className="body-text text-white font-normal max-w-xl pt-1">
            Nurturing Competent, Compassionate, And <br className="hidden sm:inline" />
            Innovative Educators Since 2005.
          </p>
        </div>
      </div>
    </section>
  )
}
