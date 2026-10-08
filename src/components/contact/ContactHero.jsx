import React from 'react'

export default function ContactHero() {
  return (
    <section className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] flex items-center bg-[#070b14] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-right md:bg-[position:75%_center] lg:bg-right bg-no-repeat"
        style={{
          backgroundImage: `url('/gallery/hero-microscope.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/90 md:via-[#070b14]/75 lg:via-[#070b14]/55 to-transparent" />
      </div>

      <div className="relative z-10 global-container w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <h1 className="heading-main font-extrabold text-white leading-tight">
            Get In <span className="text-[#b31424]">Touch</span>
          </h1>

          <p className="body-text text-white font-normal max-w-xl">
            Reach Out To Discover How Mother Teresa College Of Education Shapes Compassionate, Innovative, And Expert Educators For Tomorrow.
          </p>
        </div>
      </div>
    </section>
  )
}
