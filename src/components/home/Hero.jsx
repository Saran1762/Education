import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useAdmission } from '../../context/AdmissionContext'

import heroBg from '../../assets/home/herobg.jpg'
import userGroupIcon from '../../assets/home/icons/user-group.svg'
import graduationCapIcon from '../../assets/home/icons/graduation-cap.svg'
import championIcon from '../../assets/home/icons/champion.svg'
import awardIcon from '../../assets/home/icons/award-03.svg'

export default function Hero() {
  const { openModal } = useAdmission()
  const stats = [
    {
      icon: userGroupIcon,
      value: '3200+',
      label: 'Happy Students',
    },
    {
      icon: graduationCapIcon,
      value: '60+',
      label: 'Faculty Members',
    },
    {
      icon: championIcon,
      value: '98%',
      label: 'Academic Success',
    },
    {
      icon: awardIcon,
      value: '25+',
      label: 'Years of Excellence',
    },
  ]

  return (
    <section className="relative w-full">
      {/* Hero Banner Background & Content */}
      <div className="relative min-h-[540px] sm:min-h-[620px] lg:min-h-[730px] flex items-center bg-slate-950 overflow-hidden">
        {/* Background Image with Dark Vignette Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 60%, #000000 100%)',
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 global-container py-16 sm:py-24 pb-28 sm:pb-36">
          <div className="max-w-2xl space-y-6">
            <h1 className="heading-main font-bold text-white">
              Shaping Future Educators, <br />
              <span className="text-[#b31424]">Inspiring Generations</span>
            </h1>

            <p className="body-text text-white font-normal max-w-xl">
              Empowering Aspiring Teachers With Knowledge, Leadership, Ethics, And
              Professional Excellence Through Quality Teacher Education.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#programs"
                className="body-card inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-primary border border-primary hover:bg-primary/20 transition-all cursor-pointer"
              >
                <span>Explore Program</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </a>

              <button
                type="button"
                onClick={() => openModal()}
                className="body-card inline-flex items-center justify-center px-7 py-3 rounded-lg font-medium text-white bg-[#b31424] hover:bg-[#96101e] shadow-lg shadow-[#b31424]/30 transition-all cursor-pointer active:scale-95"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Crimson Stats Card */}
      <div className="global-container relative z-20 -mt-16 sm:-mt-20">
        <div className="bg-[#BE0426] rounded-2xl sm:rounded-3xl py-[40px] px-[24px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="relative flex items-center justify-center gap-5 sm:gap-6 px-2 sm:px-4 md:px-6"
              >
                {/* Vertical white divider line between columns */}
                {idx > 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-20 sm:h-24 bg-white" />
                )}
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-12 h-12 sm:w-[60px] sm:h-[60px] shrink-0 object-contain"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="heading-main font-semibold text-white">
                    {stat.value}
                  </h3>
                  <p className="body-card font-semibold text-white whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
