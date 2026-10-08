import React, { useState } from 'react'
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryAlbums } from '../../data/galleryData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function GalleryCard({ album, onOpen }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div
      ref={ref}
      onClick={() => onOpen(album)}
      className={`group relative aspect-[1.4/1] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-900 border border-slate-100/10 scroll-fade-up ${
        isVisible ? 'visible' : ''
      }`}
    >
      {/* Album Cover Image with Smooth Hover Zoom */}
      <img
        src={album.cover}
        alt={album.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 block"
      />

      {/* Dark Vignette Overlay at the Bottom */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-90"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0.95) 100%)',
        }}
      />

      {/* Bottom Bar: Title on Left, Photo Count on Right */}
      <div className="absolute bottom-2.5 sm:bottom-3 left-3 sm:left-3.5 right-3 sm:right-3.5 flex items-center justify-between gap-2 pointer-events-none">
        <span className="text-white text-xs sm:text-[13.5px] font-semibold tracking-wide truncate drop-shadow-md">
          {album.title}
        </span>

        <span className="flex items-center gap-1.5 text-white/95 text-xs sm:text-[13px] font-medium shrink-0 drop-shadow-md">
          <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          <span>{album.count}</span>
        </span>
      </div>
    </div>
  )
}

export default function GalleryGrid({ onSelectAlbum }) {
  const [activeAlbum, setActiveAlbum] = useState(null)
  const [photoIndex, setPhotoIndex] = useState(0)

  const handleCardClick = (album) => {
    if (onSelectAlbum) {
      onSelectAlbum(album)
    } else {
      openLightbox(album)
    }
  }

  const openLightbox = (album) => {
    setActiveAlbum(album)
    setPhotoIndex(0)
  }

  const closeLightbox = () => {
    setActiveAlbum(null)
    setPhotoIndex(0)
  }

  const nextPhoto = (e) => {
    e.stopPropagation()
    if (!activeAlbum || !activeAlbum.photos.length) return
    setPhotoIndex((prev) => (prev + 1) % activeAlbum.photos.length)
  }

  const prevPhoto = (e) => {
    e.stopPropagation()
    if (!activeAlbum || !activeAlbum.photos.length) return
    setPhotoIndex((prev) => (prev - 1 + activeAlbum.photos.length) % activeAlbum.photos.length)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="global-container">
        {/* 4-column x 2-row Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {galleryAlbums.map((album) => (
            <GalleryCard key={album.id} album={album} onOpen={handleCardClick} />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeAlbum && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl space-y-0 border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 flex items-center justify-between border-b border-slate-800 bg-slate-950/70">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-white">
                  {activeAlbum.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Photo {photoIndex + 1} of {activeAlbum.photos.length}
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

            {/* Photo View with next/prev controls */}
            <div className="relative h-72 sm:h-96 md:h-[480px] bg-black flex items-center justify-center">
              <img
                src={activeAlbum.photos[photoIndex]}
                alt={activeAlbum.title}
                className="w-full h-full object-contain"
              />

              {activeAlbum.photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    aria-label="Previous Photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center cursor-pointer transition-colors shadow-md"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    aria-label="Next Photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center cursor-pointer transition-colors shadow-md"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
