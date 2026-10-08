import React, { useState } from 'react'
import { ArrowLeft, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { pongalPhotos } from '../../data/specifiedGalleryData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function PhotoItem({ photo, index, onOpen }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div
      ref={ref}
      onClick={() => onOpen(index)}
      className={`group relative aspect-[1.5/1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-100 border border-slate-200/80 scroll-fade-up ${
        isVisible ? 'visible' : ''
      }`}
    >
      <img
        src={photo.url}
        alt={photo.caption}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 block"
      />

      {/* Hover Overlay with Icon */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-200">
          <Maximize2 className="w-4 h-4 text-[#b31424]" />
        </div>
      </div>
    </div>
  )
}

export default function SpecifiedGallerySection({ onBack }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextPhoto = (e) => {
    e?.stopPropagation()
    setLightboxIndex((prev) => (prev + 1) % pongalPhotos.length)
  }

  const prevPhoto = (e) => {
    e?.stopPropagation()
    setLightboxIndex((prev) => (prev - 1 + pongalPhotos.length) % pongalPhotos.length)
  }

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white">
      <div className="global-container space-y-6 sm:space-y-8">
        
        {/* Navigation & Header */}
        <div className="relative flex flex-col items-center justify-center text-center">
          {onBack && (
            <div className="w-full flex justify-start mb-4">
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#b31424] transition-colors cursor-pointer bg-slate-100 hover:bg-rose-50 px-3.5 py-1.5 rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Albums
              </button>
            </div>
          )}

          {/* Album Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pongal Celebration <span className="text-[#b31424]">2026</span>
          </h2>
        </div>

        {/* 12-Photo Grid (3 columns x 4 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {pongalPhotos.map((photo, index) => (
            <PhotoItem
              key={photo.id}
              photo={photo}
              index={index}
              onOpen={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 flex items-center justify-between border-b border-slate-800 bg-slate-900/80">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-white">
                  Pongal Celebration 2026
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Photo {lightboxIndex + 1} of {pongalPhotos.length} · {pongalPhotos[lightboxIndex].caption}
                </p>
              </div>

              <button
                onClick={closeLightbox}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo View with Next/Prev Controls */}
            <div className="relative h-80 sm:h-[460px] md:h-[540px] bg-black flex items-center justify-center p-2">
              <img
                src={pongalPhotos[lightboxIndex].url}
                alt={pongalPhotos[lightboxIndex].caption}
                className="w-full h-full object-contain"
              />

              <button
                onClick={prevPhoto}
                aria-label="Previous Photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center cursor-pointer transition-colors shadow-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextPhoto}
                aria-label="Next Photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center cursor-pointer transition-colors shadow-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
