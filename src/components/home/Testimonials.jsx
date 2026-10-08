import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import avatar1 from '../../assets/home/1.jpg'
import avatar2 from '../../assets/home/2.jpg'
import musicImg from '../../assets/home/music.jpg'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Teaching practice sessions and school internships gave me valuable real-world exposure. The skills and knowledge I gained here prepared me well for my teaching career.',
      name: 'Karthik R',
      role: 'B.Ed Graduate',
      avatar: avatar1,
    },
    {
      quote:
        'The M.Ed programme enhanced my research and leadership skills. The academic environment encouraged critical thinking and professional growth, helping me achieve my career goals.',
      name: 'M. Nandhini',
      role: 'M.Ed Graduate',
      avatar: avatar2,
    },
    {
      quote:
        'The college focuses not only on academics but also on personality development, communication skills, and professional ethics. It played a major role in shaping me into a responsible educator.',
      name: 'S. Aravind',
      role: 'B.Ed Graduate',
      avatar: avatar1,
    },
    {
      quote:
        'The faculty members provide dedicated mentorship and hands-on guidance. The modern classrooms and pedagogy labs gave me the confidence to excel in competitive teaching exams.',
      name: 'P. Sneha',
      role: 'B.Ed Graduate',
      avatar: avatar2,
    },
  ]

  const [startIndex, setStartIndex] = useState(0)

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length)
  }

  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ]

  return (
    <section id="testimonials" className="pt-19 md:pt-24 pb-19 md:pb-24 bg-white">
      <div className="global-container space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mx-auto max-w-5xl">
          <h2 className="heading-section font-bold">
            Student Testimonials
          </h2>
          <p className="body-text">
            Discover how Mother Teresa College of Education has empowered future
            educators through quality teacher training, practical experience, and
            academic excellence.
          </p>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex justify-end items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-primary text-primary hover:bg-rose-50 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary hover:bg-primary-hover text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Content Layout: Left Student Photo + Overlapping Testimonial Cards */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          {/* Left Student Photo */}
          <div className="w-full w-[310px] sm:w-[310px] lg:w-[430px] h-[360px] sm:h-[380px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-100 shrink-0">
            <img
              src={musicImg}
              alt="Students at Mother Teresa College"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Testimonial Cards with fixed width and height */}
          <div className="w-full lg:w-auto lg:-ml-16 xl:-ml-20 z-10 flex flex-wrap lg:flex-nowrap items-center justify-center gap-5 lg:gap-6 mt-6 lg:mt-0">
            {visibleTestimonials.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="w-[310px] sm:w-[320px] h-[290px] sm:h-[300px] shrink-0 bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
              >
                <div>
                  <p className="body-card">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <h3 className="body-card font-semibold text-primary leading-tight">
                      {item.name}
                    </h3>
                    <p className="body-card font-normal mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
