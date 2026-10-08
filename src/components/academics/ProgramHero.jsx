import React from 'react'
import { ArrowRight, Download } from 'lucide-react'
import { useAdmission } from '../../context/AdmissionContext'

export default function ProgramHero({ data }) {
  const { openModal } = useAdmission()
  if (!data) return null

  const handleApply = (e) => {
    e.preventDefault()
    const program = data.highlight?.includes('M.Ed') ? 'M.Ed' : 'B.Ed'
    openModal(program)
  }

  return (
    <section className="relative w-full h-[calc(100dvh-72px)] sm:h-[calc(100dvh-80px)] xl:h-[calc(100dvh-96px)] min-h-[500px] flex items-end bg-slate-950 overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${data.bgImage}')`,
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
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          <h1 className="heading-main font-bold text-white leading-tight">
            {data.titlePrefix}{' '}
            <span className="text-primary">{data.highlight}</span>
          </h1>

          <p className="body-text text-white font-normal max-w-3xl">
            {data.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={handleApply}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg body-card font-medium text-white bg-[#b31424] hover:bg-[#96101e] shadow-lg shadow-[#b31424]/30 transition-all cursor-pointer active:scale-95"
            >
              <span>{data.primaryBtnText || 'Apply Now'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={data.secondaryBtnHref || '#syllabus'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg body-card font-medium text-white/90 border border-white/40 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{data.secondaryBtnText || 'Download Syllabus'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
