import React from 'react'
import { ArrowRight } from 'lucide-react'
import bedImg from '../../assets/home/b.ed.jpg'
import medImg from '../../assets/home/m.ed.jpg'

export default function ProgramsOffered({ onSelectProgram }) {
  const programs = [
    {
      id: 'B.Ed',
      level: 'Undergraduate',
      title: 'Bachelor of Education (B.Ed.)',
      description:
        'A professional teacher education programme designed to prepare graduates for successful careers in school education, focusing on pedagogy and classroom management.',
      image: bedImg,
      href: '#bed',
    },
    {
      id: 'M.Ed',
      level: 'Postgraduate',
      title: 'Master of Education (M.Ed.)',
      description:
        'An advanced program focused on educational leadership, research, curriculum development, and teacher education for those aiming for higher academic roles.',
      image: medImg,
      href: '#med',
    },
  ]

  return (
    <section id="academics" className="pt-19 md:pt-24">
      <div className="global-container space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="text-center space-y-5 mx-auto">
          <span className="body-text text-primary">
            Academics
          </span>
          <h2 className="heading-section font-bold mt-3">
            Program Offered
          </h2>
          <p className="body-text">
            Comprehensive degree program designed to shape the educational leaders
            of tomorrow.
          </p>
        </div>

        {/* 2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="relative min-h-[380px] sm:min-h-[420px] rounded-3xl overflow-hidden shadow-xl group flex flex-col justify-end p-6 sm:p-10 border border-slate-200"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${program.image}')` }}
              >
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 19.72%, #000000 100%)',
                  }}
                />
              </div>

              {/* Card Text Content */}
              <div className="relative z-10 space-y-3">
                <span className="body-card font-semibold text-primary">
                  {program.level}
                </span>

                <h3 className="heading-card font-bold text-white leading-tight">
                  {program.title}
                </h3>

                <p className="body-card text-white leading-relaxed max-w-xl">
                  {program.description}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      if (onSelectProgram) {
                        onSelectProgram(program.id)
                      }
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg body-card font-medium text-white bg-[#b31424] hover:bg-[#96101e] transition-colors shadow-md cursor-pointer"
                  >
                    <span>Explore Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
