import React from 'react'
import { ArrowRight } from 'lucide-react'
import aboutImg from '../../assets/home/about.png'

export default function AboutCollege({ onReadMore }) {
  return (
    <section id="about-us" className="pt-19 md:pt-24">
      <div className="global-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-7">
            <span className="body-text text-primary">
              About College
            </span>

            <h2 className="heading-section font-bold mt-4">
              Welcome To Mother Teresa College of Education
            </h2>

            <p className="body-text">
              Established with a vision to nurture competent, compassionate, and
              innovative educators, Mother Teresa College of Education is committed
              to academic excellence and professional teacher training. Through a
              blend of theory, practice, research, and community engagement, the
              institution prepares future teachers to make a meaningful impact in
              society. We pride ourselves on our modern pedagogical approaches and
              deep-rooted values.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  if (onReadMore) onReadMore()
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg body-card font-medium text-primary border border-primary hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
              <img
                src={aboutImg}
                alt="Mother Teresa College of Education Campus Building"
                className="w-full h-[320px] sm:h-[380px] lg:h-[460px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
