import React from 'react'
import {
  Award,
  BookOpen,
  Sparkles,
  Target,
  Users,
  Lightbulb,
} from 'lucide-react'

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: Award,
      title: 'NCTE Approved',
      description:
        'Fully recognized program meeting national standards for teacher education.',
    },
    {
      icon: BookOpen,
      title: 'Modern Methodology',
      description:
        'Integration of latest educational technology and innovative pedagogical approaches.',
    },
    {
      icon: Sparkles,
      title: 'Holistic Development',
      description:
        'Focus on personality development, communication skills, and ethical leadership.',
    },
    {
      icon: Target,
      title: 'Practical Exposure',
      description:
        'Extensive teaching practice in reputed schools to build real-world classroom confidence.',
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description:
        'Learn from distinguished educators with decades of academic and practical experience.',
    },
    {
      icon: Lightbulb,
      title: 'Research-Oriented',
      description:
        'Fostering a culture of inquiry and educational research among student teachers.',
    },
  ]

  return (
    <section id="why-choose-us" className="pt-19 md:pt-24">
      {/* Header Container */}
      <div className="global-container text-center space-y-5 mx-auto mb-10 sm:mb-12">
        <span className="body-text text-primary">
          Institution Highlights
        </span>
        <h2 className="heading-section font-bold mt-5">
          Why Choose Us
        </h2>
        <p className="body-text mt-5">
          We provide a comprehensive ecosystem for aspiring educators to develop
          their skills, knowledge, and professional identity.
        </p>
      </div>

      {/* Full-bleed Crimson Red Container with 6 White Cards */}
      <div className="w-full bg-primary py-12 sm:py-16 lg:py-20">
        <div className="global-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 text-center shadow-md flex flex-col items-center"
                >
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#F9E6EA] flex items-center justify-center text-primary mb-4 shrink-0">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <h3 className="body-text font-bold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="body-card mt-2.5 font-normal">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
