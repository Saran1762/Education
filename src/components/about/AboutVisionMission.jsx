import React from 'react'
import guitarImg from '../../assets/about/2.jpg'

export default function AboutVisionMission() {
  return (
    <section className="py-global bg-white">
      <div className="global-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-9 xl:gap-12 items-start">
          
          {/* Left Column: Vision & Mission Content */}
          <div className="space-y-12 sm:space-y-14 lg:space-y-16 max-w-3xl">
            {/* Vision */}
            <div className="space-y-4 sm:space-y-5">
              <h2 className="heading-section font-bold text-primary tracking-tight leading-snug">
                Our Vision
              </h2>
              <p className="body-text">
                To be a centre of excellence in teacher education, producing competent educators who inspire learning, leadership, and social responsibility in the global educational landscape.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4 sm:space-y-5">
              <h2 className="heading-section font-bold text-primary tracking-tight">
                Our Mission
              </h2>
              <p className="body-text">
                To provide quality teacher education through innovative pedagogy, practical training, rigorous research, and value-based learning, ensuring our graduates are ready to transform classrooms.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Photo of Student Playing Guitar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/3.5] rounded-[36px] sm:rounded-[44px] overflow-hidden">
              <img
                src={guitarImg}
                alt="Student engaged in cultural activities"
                className="w-full h-full object-cover object-[center_32%]"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
