import React from 'react'
import { facilitiesData } from '../../data/facilitiesData'

export default function FacilitiesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="global-container space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Facilities
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            A world-class learning environment equipped with modern infrastructure to support
            academic excellence and holistic development.
          </p>
        </div>

        {/* 2-Column Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {facilitiesData.map((item) => (
            <div
              key={item.title}
              className="relative min-h-[290px] sm:min-h-[330px] rounded-3xl overflow-hidden shadow-lg group flex flex-col justify-end p-6 sm:p-8 border border-slate-100"
            >
              {/* Background Real Campus Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                {/* Dark Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/15" />
              </div>

              {/* Card Text Information */}
              <div className="relative z-10 space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
