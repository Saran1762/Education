import React from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutVisionMission from '../components/about/AboutVisionMission'
import LeadershipMessages from '../components/about/LeadershipMessages'

export default function AboutPage() {
  return (
    <div className="space-y-0">
      <AboutHero />
      <AboutVisionMission />
      <LeadershipMessages />
    </div>
  )
}
