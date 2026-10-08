import React from 'react'

export default function EnquireSuccessModal({
  isOpen,
  onClose,
  type = 'success', // 'success' | 'failed'
  title,
  buttonText,
  onButtonClick
}) {
  if (!isOpen) return null

  const isFailed = type === 'failed' || type === 'error'
  const displayTitle = title || (isFailed ? 'Your Enquire Has Been Failed' : 'Enquire Successfully Submitted')
  const displayButtonText = buttonText || (isFailed ? 'Try Again' : 'Continue')

  const handleAction = () => {
    if (onButtonClick) {
      onButtonClick()
    } else {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px] animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[410px] bg-white rounded-[32px] sm:rounded-[36px] p-7 pt-9 pb-8 sm:p-8 sm:pt-10 sm:pb-8 shadow-2xl text-center flex flex-col items-center animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Center Illustration with Festive Particles */}
        <div className="relative w-56 h-56 sm:w-60 sm:h-60 flex items-center justify-center -mt-2">
          <svg className="w-full h-full" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Confetti particles */}
            {/* Top tilted crimson bar */}
            <rect x="126" y="20" width="7.5" height="15" rx="2.5" transform="rotate(12 126 20)" fill="#BE0426" />
            
            {/* Top-left pink circle */}
            <circle cx="94" cy="34" r="6" fill="#fcd5db" />
            
            {/* Top-left crimson diamond */}
            <path d="M66 48L72 41L78 48L72 55Z" fill="#BE0426" />
            
            {/* Top-right pink sparkle */}
            <path d="M168 44L174 49L168 54L162 49Z" fill="#fcd5db" />
            
            {/* Mid-left pink arc */}
            <path d="M52 77C57 77 61 73 61 69C61 65 57 61 52 61" stroke="#fcd5db" strokeWidth="5" strokeLinecap="round" fill="none" />
            
            {/* Mid-left crimson diamond */}
            <path d="M49 126L55 119L61 126L55 133Z" fill="#BE0426" />
            
            {/* Bottom-left pink tilted bar */}
            <rect x="58" y="160" width="7.5" height="15" rx="2.5" transform="rotate(45 58 160)" fill="#fcd5db" />
            
            {/* Bottom-left crimson arc */}
            <path d="M92 189C86 189 82 185 82 179C82 173 86 169 92 169" stroke="#BE0426" strokeWidth="5" strokeLinecap="round" fill="none" />
            
            {/* Bottom pink circle */}
            <circle cx="114" cy="195" r="6" fill="#fcd5db" />
            
            {/* Bottom-right pink diamond */}
            <path d="M145 188L151 181L157 188L151 195Z" fill="#fcd5db" />
            
            {/* Bottom-right crimson arc */}
            <path d="M176 166C182 166 186 170 186 176C186 182 182 186 176 186" stroke="#BE0426" strokeWidth="5" strokeLinecap="round" fill="none" />
            
            {/* Right pink circle */}
            <circle cx="199" cy="126" r="6" fill="#fcd5db" />
            
            {/* Right crimson tilted bar */}
            <rect x="188" y="76" width="7.5" height="15" rx="2.5" transform="rotate(45 188 76)" fill="#BE0426" />

            {/* Center Big Circle */}
            <circle cx="120" cy="116" r="58" fill="#BE0426" />

            {/* Icon inside Circle */}
            {isFailed ? (
              // White Cross (X)
              <path
                d="M104 100L136 132M136 100L104 132"
                stroke="white"
                strokeWidth="8.5"
                strokeLinecap="round"
              />
            ) : (
              // White Checkmark
              <path
                d="M102 117L115 130L141 97"
                stroke="white"
                strokeWidth="8.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </div>

        {/* Title strictly on one single line */}
        <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mt-3 whitespace-nowrap tracking-tight leading-snug">
          {displayTitle}
        </h3>

        {/* Action Button */}
        <button
          onClick={handleAction}
          type="button"
          className="w-full mt-7 py-3.5 px-6 rounded-2xl bg-primary hover:bg-[#9e031f] text-white font-semibold text-base sm:text-[17px] transition-all shadow-md active:scale-[0.98] cursor-pointer"
        >
          {displayButtonText}
        </button>
      </div>
    </div>
  )
}
