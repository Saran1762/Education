import React from 'react'
import NewsHero from '../components/news/NewsHero'
import NewsList from '../components/news/NewsList'

export default function NewsPage() {
  return (
    <div className="space-y-0">
      <NewsHero />
      <NewsList />
    </div>
  )
}
