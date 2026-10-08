import React from 'react'
import collegeLogo from '../assets/footer/logo.svg'
import instagramIcon from '../assets/footer/instagram.svg'
import facebookIcon from '../assets/footer/facebook.svg'
import linkedinIcon from '../assets/footer/linkedin.svg'
import whatsappIcon from '../assets/footer/whatsapp.svg'
import youtubeIcon from '../assets/footer/youtube.svg'

export default function Footer({ onNavigate }) {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Academics', href: '#academics' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact-us' },
  ]

  const legalLinks = [
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Return & Refund Policy', href: '#refund' },
    { name: 'Cancellation Policy', href: '#cancellation' },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: instagramIcon, href: '#instagram' },
    { name: 'Facebook', icon: facebookIcon, href: '#facebook' },
    { name: 'LinkedIn', icon: linkedinIcon, href: '#linkedin' },
    { name: 'WhatsApp', icon: whatsappIcon, href: '#whatsapp' },
    { name: 'YouTube', icon: youtubeIcon, href: '#youtube' },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="global-container pt-14 sm:pt-16 pb-8 sm:pb-10">
        {/* Main Footer Content: Left Logo & Mission, Right Grouped Columns */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-14 pb-12">
          
          {/* Left Column: Logo & Mission Statement */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <img
                src={collegeLogo}
                alt="Mother Teresa College of Education Logo"
                className="h-18 sm:h-20 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className="font-serif font-black heading-section text-white whitespace-nowrap">
                  MOTHER TERASA
                </span>
                <span className="body-text text-white uppercase whitespace-nowrap">
                  COLLEGE OF EDUCATION
                </span>
              </div>
            </div>

            <p className="text-white body-card max-w-sm font-normal pt-2">
              Empowering students through quality education, practical learning and innovation.
            </p>
          </div>

          {/* Right Grouped Columns: Quick Links & Legal */}
          <div className="flex flex-wrap sm:flex-nowrap gap-12 sm:gap-20 lg:gap-28 shrink-0">
            {/* Quick Links Column */}
            <div className="space-y-3.5 min-w-[130px]">
              <h3 className="body-card font-bold text-white tracking-normal cursor-default">
                Quick Links
              </h3>
              <ul className="space-y-5 body-card text-white font-normal">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (onNavigate) {
                          e.preventDefault()
                          onNavigate(link.name)
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                      }}
                      className="cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-3.5 min-w-[150px]">
              <h3 className="body-card font-bold text-white tracking-normal cursor-default">
                Legal
              </h3>
              <ul className="space-y-5 body-card text-white font-normal">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (onNavigate) {
                          e.preventDefault()
                          onNavigate(link.name)
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                      }}
                      className="cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Divider & Bottom Section */}
        <div className="border-t border-white pt-6 sm:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          {/* Copyright & Credit */}
          <div className="space-y-1 body-card text-white font-medium">
            <p>
              © {new Date().getFullYear()} Mother Terasa Martic. Hr. Sec. School | All rights reserved.
            </p>
            <p>
              Designed &amp; Developed by Ciphermutex Pvt. Ltd
            </p>
          </div>

          {/* Social Icons with White Rounded Containers */}
          <div className="flex items-center gap-2.5 shrink-0 self-end md:self-auto">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="w-10 h-10 rounded-lg bg-[#FEEBD7] flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-7 h-7 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
