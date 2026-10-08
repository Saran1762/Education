import React, { useState } from 'react'
import Navbar from './common/Navbar'
import HomePage from './pages/HomePage'
import AcademicsPage from './pages/AcademicsPage'
import AboutPage from './pages/AboutPage'
import FacilitiesPage from './pages/FacilitiesPage'
import NewsPage from './pages/NewsPage'
import GalleryPage from './pages/GalleryPage'
import SpecifiedGalleryPage from './pages/SpecifiedGalleryPage'
import ContactPage from './pages/ContactPage'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ReturnRefundPolicyPage from './pages/ReturnRefundPolicyPage'
import CancellationPolicyPage from './pages/CancellationPolicyPage'
import Footer from './common/Footer'
import AdmissionModal from './common/AdmissionModal'
import { AdmissionProvider } from './context/AdmissionContext'

export default function App() {
  const [activePage, setActivePage] = useState('Home')
  const [academicsProgram, setAcademicsProgram] = useState('B.Ed')

  const handleNavigate = (pageName) => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (pageName === 'M.Ed') {
      setActivePage('Academics')
      setAcademicsProgram('M.Ed')
    } else if (pageName === 'B.Ed') {
      setActivePage('Academics')
      setAcademicsProgram('B.Ed')
    } else if (pageName === 'Academics') {
      setActivePage('Academics')
    } else if (pageName === 'About Us') {
      setActivePage('About Us')
    } else if (pageName === 'Facilities' || pageName === 'Life@MTCE') {
      setActivePage('Facilities')
    } else if (pageName === 'Events & News' || pageName === 'News' || pageName === 'events-news') {
      setActivePage('Events & News')
    } else if (pageName === 'Gallery' || pageName === 'gallery') {
      setActivePage('Gallery')
    } else if (pageName === 'Specified Gallery' || pageName === 'Pongal Celebration') {
      setActivePage('Specified Gallery')
    } else if (pageName === 'Contact Us' || pageName === 'Contact' || pageName === 'contact-us') {
      setActivePage('Contact Us')
    } else if (pageName === 'Terms & Conditions' || pageName === 'terms') {
      setActivePage('Terms & Conditions')
    } else if (pageName === 'Privacy Policy' || pageName === 'privacy') {
      setActivePage('Privacy Policy')
    } else if (pageName === 'Return & Refund Policy' || pageName === 'refund') {
      setActivePage('Return & Refund Policy')
    } else if (pageName === 'Cancellation Policy' || pageName === 'cancellation') {
      setActivePage('Cancellation Policy')
    } else {
      setActivePage(pageName)
    }
  }

  return (
    <AdmissionProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
        <Navbar
          activePage={activePage}
          activeProgram={academicsProgram}
          onNavigate={handleNavigate}
        />

        <main className="flex-1">
          {activePage === 'Academics' ? (
            <AcademicsPage
              currentProgram={academicsProgram}
              onProgramChange={handleNavigate}
            />
          ) : activePage === 'About Us' ? (
            <AboutPage />
          ) : activePage === 'Facilities' ? (
            <FacilitiesPage />
          ) : activePage === 'Events & News' || activePage === 'News' ? (
            <NewsPage />
          ) : activePage === 'Gallery' ? (
            <GalleryPage
              onSelectAlbum={(album) =>
                handleNavigate(album.id === 'pongal-celebration' ? 'Specified Gallery' : 'Gallery')
              }
            />
          ) : activePage === 'Specified Gallery' ? (
            <SpecifiedGalleryPage onBack={() => handleNavigate('Gallery')} />
          ) : activePage === 'Contact Us' ? (
            <ContactPage />
          ) : activePage === 'Terms & Conditions' ? (
            <TermsAndConditionsPage />
          ) : activePage === 'Privacy Policy' ? (
            <PrivacyPolicyPage />
          ) : activePage === 'Return & Refund Policy' ? (
            <ReturnRefundPolicyPage />
          ) : activePage === 'Cancellation Policy' ? (
            <CancellationPolicyPage />
          ) : (
            <HomePage
              onNavigateProgram={handleNavigate}
              onNavigateToAbout={() => handleNavigate('About Us')}
            />
          )}
        </main>

        <Footer onNavigate={handleNavigate} />
        <AdmissionModal />
      </div>
    </AdmissionProvider>
  )
}
