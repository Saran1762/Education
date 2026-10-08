import React from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import ctaBanner from '../assets/home/ctabanner.jpg'
import { useAdmission } from '../context/AdmissionContext'

export default function Cta() {
  const { openModal } = useAdmission()
  return (
    <section className="relative py-global overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Dark Vignette */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ctaBanner})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: '#00000099',
          }}
        />
      </div>

      <div className="relative z-10 global-container text-center space-y-6 max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="heading-main font-semibold text-white">
          Begin Your Journey Towards{' '}
          <span className="text-[#b31424]">Educational Excellence</span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
          Join a community dedicated to developing skilled, ethical, and
          future-ready educators. Admissions for the upcoming academic year are now
          open.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={() => openModal()}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg body-card font-medium text-white bg-[#b31424] hover:bg-[#96101e] shadow-lg shadow-[#b31424]/30 transition-all cursor-pointer active:scale-95"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg body-card font-medium text-white border border-white/80 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>Contact for Admissions</span>
          </a>
        </div>
      </div>
    </section>
  )
}
