import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import collegeLogo from '../assets/Logo.png'
import { useAdmission } from '../context/AdmissionContext'

export default function Navbar({ activePage = 'Home', activeProgram = 'B.Ed', onNavigate }) {
  const { openModal } = useAdmission()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null)
  const [internalActive, setInternalActive] = useState('Home')

  const currentActive = activePage || internalActive

  const academicsSubmenu = [
    { name: 'B.Ed', id: 'bed' },
    { name: 'M.Ed', id: 'med' },
    { name: 'Academics Calendar', id: 'calendar' },
  ]

  const lifeSubmenu = [
    { name: 'Facilities', id: 'facilities' },
    { name: 'Events & News', id: 'events-news' },
    { name: 'Gallery', id: 'gallery' },
  ]

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Academics', href: '#academics', hasDropdown: true, submenu: academicsSubmenu },
    { name: 'Life@MTCE', href: '#life-mtce', hasDropdown: true, submenu: lifeSubmenu },
    { name: 'Accreditations', href: '#accreditations' },
    { name: 'Contact Us', href: '#contact-us' },
  ]

  const isLinkActive = (linkName) => {
    if (currentActive === linkName) return true
    if (linkName === 'Academics') {
      return (
        currentActive === 'B.Ed' ||
        currentActive === 'M.Ed' ||
        currentActive === 'Academics Calendar' ||
        currentActive === 'Academics'
      )
    }
    if (linkName === 'Life@MTCE') {
      return (
        currentActive === 'Facilities' ||
        currentActive === 'Events & News' ||
        currentActive === 'Gallery' ||
        currentActive === 'Specified Gallery' ||
        currentActive === 'Life@MTCE'
      )
    }
    return false
  }

  const handleLinkClick = (name) => {
    setInternalActive(name)
    if (onNavigate) {
      onNavigate(name)
    }
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmenuClick = (item, parentName) => {
    setInternalActive(parentName || item.name)
    if (onNavigate) {
      onNavigate(item.name)
    }
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="global-container">
        <div className="flex items-center justify-between h-18 sm:h-20 xl:h-24 gap-4">
          
          {/* Left: Logo & College Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick('Home')
            }}
            className="flex items-center gap-2.5 sm:gap-3.5 xl:gap-4 shrink-0 group cursor-pointer"
          >
            <img
              src={collegeLogo}
              alt="Mother Teresa College of Education Seal"
              className="h-11 sm:h-13 lg:h-12 xl:h-16 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col justify-center shrink-0">
              <span className="text-[17px] sm:text-[19px] xl:text-[23px] font-black tracking-normal text-[#b31424] font-serif leading-tight whitespace-nowrap">
                MOTHER TERESA
              </span>
              <span className="text-[9px] sm:text-[10px] xl:text-[11.5px] font-bold tracking-[0.14em] sm:tracking-[0.18em] xl:tracking-[0.2em] text-[#b31424] uppercase mt-0.5 whitespace-nowrap">
                COLLEGE OF EDUCATION
              </span>
            </div>
          </a>

          {/* Right: Grouped Nav Links & Apply Now button */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-7 2xl:gap-8 shrink-0">
            <nav className="flex items-center gap-3 xl:gap-6 2xl:gap-8">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.name)

                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="relative group py-2">
                      {/* Nav Trigger (No arrow icon!) */}
                      <button
                        type="button"
                        onClick={() => handleLinkClick(link.name)}
                        className={`text-[12.5px] xl:text-[14.5px] 2xl:text-[15px] transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                          isActive
                            ? 'text-[#b31424] font-bold'
                            : 'text-[#1e293b] font-medium hover:text-[#b31424]'
                        }`}
                      >
                        {link.name}
                      </button>

                      {/* Dropdown Menu on Hover */}
                      <div className="absolute top-full left-0 -mt-0.5 pt-2 hidden group-hover:block z-50 animate-in fade-in duration-200">
                        <div className="bg-white rounded-2xl p-2 shadow-2xl border border-slate-100 min-w-[200px] space-y-1">
                          {link.submenu?.map((sub) => {
                            const isSubActive =
                              link.name === 'Academics'
                                ? (currentActive === 'Academics' ||
                                    currentActive === 'B.Ed' ||
                                    currentActive === 'M.Ed') &&
                                  activeProgram === sub.name
                                : currentActive === sub.name ||
                                  (sub.name === 'Gallery' && currentActive === 'Specified Gallery') ||
                                  (sub.name === 'Facilities' &&
                                    !['Events & News', 'Gallery', 'Specified Gallery'].includes(currentActive))

                            return (
                              <button
                                key={sub.id}
                                type="button"
                                onClick={() => handleSubmenuClick(sub, link.name)}
                                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors block cursor-pointer ${
                                  isSubActive
                                    ? 'bg-rose-100/70 text-slate-900 font-semibold'
                                    : 'text-slate-800 hover:bg-rose-50 hover:text-slate-900'
                                }`}
                              >
                                {sub.name}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault()
                      }
                      handleLinkClick(link.name)
                    }}
                    className={`text-[12.5px] xl:text-[14.5px] 2xl:text-[15px] transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                      isActive
                        ? 'text-[#b31424] font-bold'
                        : 'text-[#1e293b] font-medium hover:text-[#b31424]'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </nav>

            {/* Apply Now Button directly beside the navigation links */}
            <button
              type="button"
              onClick={() => openModal()}
              className="inline-flex items-center justify-center px-4 py-2 xl:px-6 xl:py-2.5 rounded-lg text-xs xl:text-sm font-semibold text-white bg-[#b31424] hover:bg-[#96101e] transition-colors shadow-sm shrink-0 cursor-pointer whitespace-nowrap active:scale-95"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden shrink-0">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#b31424] hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-5 pt-3 pb-6 space-y-2 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const isDropdownOpen = mobileOpenDropdown === link.name
                const isActive = isLinkActive(link.name)

                return (
                  <div key={link.name} className="space-y-1">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileOpenDropdown(isDropdownOpen ? null : link.name)
                      }
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-rose-50 text-[#b31424] font-bold'
                          : 'text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </button>

                    {isDropdownOpen && (
                      <div className="pl-4 space-y-1 pb-1">
                        {link.submenu?.map((sub) => {
                          const isSubActive =
                            link.name === 'Academics'
                              ? (currentActive === 'Academics' ||
                                  currentActive === 'B.Ed' ||
                                  currentActive === 'M.Ed') &&
                                activeProgram === sub.name
                              : currentActive === sub.name ||
                                (sub.name === 'Gallery' && currentActive === 'Specified Gallery') ||
                                (sub.name === 'Facilities' &&
                                  !['Events & News', 'Gallery', 'Specified Gallery'].includes(currentActive))

                          return (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() => handleSubmenuClick(sub, link.name)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium block cursor-pointer transition-colors ${
                                isSubActive
                                  ? 'bg-rose-100 text-[#b31424] font-bold'
                                  : 'text-slate-700 hover:bg-rose-50 hover:text-[#b31424]'
                              }`}
                            >
                              {sub.name}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              const isActive = currentActive === link.name
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault()
                    }
                    handleLinkClick(link.name)
                  }}
                  className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-rose-50 text-[#b31424] font-bold'
                      : 'text-slate-800 hover:bg-slate-50 hover:text-[#b31424] font-medium'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false)
                openModal()
              }}
              className="block w-full text-center py-2.5 rounded-lg text-sm font-semibold text-white bg-[#b31424] hover:bg-[#96101e] transition-colors shadow-sm cursor-pointer active:scale-95"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
