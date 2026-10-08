import React from 'react'
import GalleryHero from '../components/gallery/GalleryHero'
import GalleryGrid from '../components/gallery/GalleryGrid'

export default function GalleryPage({ onSelectAlbum }) {
  return (
    <div className="space-y-0">
      <GalleryHero />
      <GalleryGrid onSelectAlbum={onSelectAlbum} />
    </div>
  )
}

