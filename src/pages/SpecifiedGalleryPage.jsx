import React from 'react'
import GalleryHero from '../components/gallery/GalleryHero'
import SpecifiedGallerySection from '../components/gallery/SpecifiedGallerySection'

export default function SpecifiedGalleryPage({ onBack }) {
  return (
    <div className="space-y-0">
      <GalleryHero />
      <SpecifiedGallerySection onBack={onBack} />
    </div>
  )
}
