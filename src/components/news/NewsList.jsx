import React from 'react'
import { Download } from 'lucide-react'
import { newsArticles } from '../../data/newsData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function NewsCard({ article, handleAction }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <article
      ref={ref}
      className={`group flex flex-col md:flex-row items-start gap-6 sm:gap-8 lg:gap-10 pb-10 sm:pb-12 lg:pb-14 border-b border-gray-100 hover:border-[#b31424] transition-colors duration-300 last:border-0 scroll-fade-up ${
        isVisible ? 'visible' : ''
      }`}
    >
      {/* Left: Poster / Photo Collage */}
      <div
        onClick={() => handleAction(article)}
        className="w-full md:w-[320px] lg:w-[360px] xl:w-[390px] rounded-2xl overflow-hidden shrink-0 shadow-sm bg-gray-50 border border-slate-100 cursor-pointer"
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 block"
        />
      </div>

      {/* Right: Content & Action */}
      <div className="flex-1 flex flex-col justify-between self-stretch pt-0.5 sm:pt-1 space-y-4">
        <div className="space-y-2">
          {/* Category & Date */}
          <span className="text-sm sm:text-[15px] font-semibold text-[#b31424] tracking-wide block">
            {article.category} | {article.date}
          </span>

          {/* Title */}
          <h2
            onClick={() => handleAction(article)}
            className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#b31424] transition-colors duration-200 cursor-pointer"
          >
            {article.title}
          </h2>

          {/* Body Paragraphs */}
          <div className="space-y-3 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed">
            {article.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Action Button: Expands from square icon to 'Download Now' pill on card hover */}
        <div className="pt-2">
          <a
            href={article.downloadUrl}
            download={article.downloadFileName}
            aria-label={`Download details for ${article.title}`}
            className="h-10 w-10 group-hover:w-[155px] rounded-lg bg-[#b31424] hover:bg-[#8e0f1c] text-white flex items-center transition-all duration-300 ease-in-out cursor-pointer overflow-hidden shadow-xs active:scale-95"
          >
            <span className="w-10 h-10 shrink-0 flex items-center justify-center">
              <Download className="w-5 h-5 stroke-[2.2]" />
            </span>
            <span className="text-xs sm:text-sm font-medium whitespace-nowrap pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
              Download Now
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default function NewsList() {
  const handleAction = (item) => {
    const targetFile = item.downloadUrl || item.image
    if (targetFile) {
      window.open(targetFile, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="global-container">
        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
          {newsArticles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              handleAction={handleAction}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
