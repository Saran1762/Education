import { createContext, useContext, useState, useEffect } from 'react'

const AdmissionContext = createContext()

export function AdmissionProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState('')
  const [toastMessage, setToastMessage] = useState(null)

  const openModal = (branch = '') => {
    setSelectedBranch(branch)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const showToast = (message) => {
    setToastMessage(message)
    setTimeout(() => {
      setToastMessage(null)
    }, 4000)
  }

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <AdmissionContext.Provider
      value={{
        isModalOpen,
        selectedBranch,
        openModal,
        closeModal,
        toastMessage,
        showToast,
      }}
    >
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl bg-primary text-white font-semibold shadow-2xl shadow-primary/40 border border-primary/50 flex items-center gap-3 animate-bounce">
          <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-xs sm:text-sm">{toastMessage}</span>
        </div>
      )}
    </AdmissionContext.Provider>
  )
}

export function useAdmission() {
  const context = useContext(AdmissionContext)
  if (!context) {
    throw new Error('useAdmission must be used within an AdmissionProvider')
  }
  return context
}
