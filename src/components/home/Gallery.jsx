import React from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import gallery1 from '../../assets/home/gallery1.jpg'
import gallery2 from '../../assets/home/gallery2.jpg'
import gallery3 from '../../assets/home/gallery3.jpg'
import gallery4 from '../../assets/home/gallery4.jpg'
import gallery5 from '../../assets/home/gallery5.jpg'
import gallery6 from '../../assets/home/gallery6.jpg'
import gallery7 from '../../assets/home/gallery7.jpg'
import gallery8 from '../../assets/home/gallery8.jpg'
import gallery9 from '../../assets/home/gallery9.jpg'
import musicImg from '../../assets/home/music.jpg'

export default function Gallery() {
  const [sectionRef, isVisible] = useScrollReveal()

  const galleryImages = [
    { title: 'Campus Event 1', image: gallery1, flexWeight: 310 },
    { title: 'Campus Event 2', image: gallery2, flexWeight: 360 },
    { title: 'Campus Event 3', image: gallery3, flexWeight: 270 },
    { title: 'Campus Event 4', image: gallery4, flexWeight: 340 },
    { title: 'Campus Event 5', image: gallery5, flexWeight: 290 },
    { title: 'Campus Event 6', image: gallery6, flexWeight: 280 },
    { title: 'Campus Event 7', image: gallery7, flexWeight: 350 },
    { title: 'Campus Event 8', image: gallery8, flexWeight: 270 },
    { title: 'Campus Event 9', image: gallery9, flexWeight: 330 },
    { title: 'Cultural & Music Activities', image: musicImg, flexWeight: 300 },
  ]

  const row1 = galleryImages.slice(0, 5)
  const row2 = galleryImages.slice(5, 10)

  // Duplicated blocks to ensure seamless infinite looping on any screen size
  const row1Block = [...row1, ...row1]
  const row2Block = [...row2, ...row2]

  return (
    <section ref={sectionRef} id="gallery" className="pt-19 md:pt-24 bg-white overflow-hidden cursor-default">
      <div className="space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className={`global-container text-center space-y-3 mx-auto scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="heading-section font-bold">
            Gallery
          </h2>
          <p className="body-text">
            Explore moments that reflect our vibrant campus life, achievements and
            community spirit.
          </p>
        </div>

        {/* Gallery Marquee Rows */}
        <div
          className="relative space-y-3.5 sm:space-y-4 w-full global-container overflow-hidden select-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          {/* Left Edge Seamless White Fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-20 sm:w-32 md:w-44 bg-gradient-to-r from-white via-white/80 to-transparent" />

          {/* Right Edge Seamless White Fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-20 sm:w-32 md:w-44 bg-gradient-to-l from-white via-white/80 to-transparent" />

          {/* Row 1: Top row scrolls to the LEFT */}
          <div className={`relative w-full overflow-hidden scroll-fade-up delay-150 ${isVisible ? 'visible' : ''}`}>
            <div className="flex w-max animate-marquee-left">
              {/* Half 1 */}
              <div className="flex items-center gap-3.5 sm:gap-4 pr-3.5 sm:pr-4 shrink-0">
                {row1Block.map((img, idx) => (
                  <div
                    key={`r1-h1-${idx}`}
                    style={{ width: `${img.flexWeight}px` }}
                    className="relative shrink-0 h-50 sm:h-56 md:h-60 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-slate-100"
                  >
                    <img
                      src={img.image}
                      alt={img.title}
                      className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Half 2 (identical duplicate for smooth 100% seamless loop) */}
              <div className="flex items-center gap-3.5 sm:gap-4 pr-3.5 sm:pr-4 shrink-0" aria-hidden="true">
                {row1Block.map((img, idx) => (
                  <div
                    key={`r1-h2-${idx}`}
                    style={{ width: `${img.flexWeight}px` }}
                    className="relative shrink-0 h-50 sm:h-56 md:h-60 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-slate-100"
                  >
                    <img
                      src={img.image}
                      alt={img.title}
                      className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Second row scrolls to the RIGHT */}
          <div className={`relative w-full overflow-hidden scroll-fade-up delay-300 ${isVisible ? 'visible' : ''}`}>
            <div className="flex w-max animate-marquee-right">
              {/* Half 1 */}
              <div className="flex items-center gap-3.5 sm:gap-4 pr-3.5 sm:pr-4 shrink-0">
                {row2Block.map((img, idx) => (
                  <div
                    key={`r2-h1-${idx}`}
                    style={{ width: `${img.flexWeight}px` }}
                    className="relative shrink-0 h-50 sm:h-56 md:h-60 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-slate-100"
                  >
                    <img
                      src={img.image}
                      alt={img.title}
                      className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Half 2 (identical duplicate for smooth 100% seamless loop) */}
              <div className="flex items-center gap-3.5 sm:gap-4 pr-3.5 sm:pr-4 shrink-0" aria-hidden="true">
                {row2Block.map((img, idx) => (
                  <div
                    key={`r2-h2-${idx}`}
                    style={{ width: `${img.flexWeight}px` }}
                    className="relative shrink-0 h-50 sm:h-56 md:h-60 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-slate-100"
                  >
                    <img
                      src={img.image}
                      alt={img.title}
                      className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
