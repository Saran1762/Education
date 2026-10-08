import React from 'react'
import Hero from '../components/home/Hero'
import AboutCollege from '../components/home/AboutCollege'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ProgramsOffered from '../components/home/ProgramsOffered'
import CampusLife from '../components/home/CampusLife'
import Gallery from '../components/home/Gallery'
import Testimonials from '../components/home/Testimonials'
import Cta from '../common/Cta'
import Faq from '../components/home/Faq'

export default function HomePage({ onNavigateProgram, onNavigateToAbout }) {
  return (
    <div className="space-y-0">
      <Hero />
      <AboutCollege onReadMore={onNavigateToAbout} />
      <WhyChooseUs />
      <ProgramsOffered
        onSelectProgram={onNavigateProgram || onNavigateToAbout}
      />
      <CampusLife />
      <Gallery />
      <Testimonials />
      <Cta />
      <Faq />
    </div>
  )
}
