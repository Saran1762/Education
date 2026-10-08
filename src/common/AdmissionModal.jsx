import { useState, useEffect } from 'react'
import { useAdmission } from '../context/AdmissionContext'
import EnquireSuccessModal from './EnquireSuccessModal'

const DEGREE_PROGRAMS = {
  'B.Ed': [
    { value: 'Bachelor of Education (General)', label: 'B.Ed. (General)' },
    { value: 'Tamil Education', label: 'Tamil Education' },
    { value: 'English Education', label: 'English Education' },
    { value: 'Mathematics Education', label: 'Mathematics Education' },
    { value: 'Physical Science Education', label: 'Physical Science Education' },
    { value: 'Biological Science Education', label: 'Biological Science Education' },
    { value: 'History Education', label: 'History Education' },
    { value: 'Computer Science Education', label: 'Computer Science Education' },
    { value: 'Commerce & Accountancy Education', label: 'Commerce & Accountancy Education' },
  ],
  'M.Ed': [
    { value: 'Master of Education (General)', label: 'M.Ed. (General)' },
    { value: 'Advanced Educational Studies', label: 'Advanced Educational Studies' },
    { value: 'Educational Leadership & Administration', label: 'Educational Leadership & Administration' },
    { value: 'Curriculum & Instructional Design', label: 'Curriculum & Instructional Design' },
    { value: 'Educational Psychology & Guidance', label: 'Educational Psychology & Guidance' },
    { value: 'Educational Technology & Research', label: 'Educational Technology & Research' },
  ],
}

export default function AdmissionModal() {
  const { isModalOpen, selectedBranch, closeModal, showToast } = useAdmission()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    state: '',
    city: '',
    degree: '',
    program: selectedBranch || '',
    consent: false,
  })
  const [modalState, setModalState] = useState({ isOpen: false, type: 'success', title: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!selectedBranch) return

    const branchLower = selectedBranch.toLowerCase()
    if (branchLower.includes('m.ed') || branchLower.includes('master')) {
      setFormData((prev) => ({ ...prev, degree: 'M.Ed', program: '' }))
    } else if (branchLower.includes('b.ed') || branchLower.includes('bachelor')) {
      setFormData((prev) => ({ ...prev, degree: 'B.Ed', program: '' }))
    } else {
      setFormData((prev) => ({ ...prev, program: selectedBranch }))
    }
  }, [selectedBranch])

  const handleDegreeChange = (e) => {
    const newDegree = e.target.value
    const validPrograms = DEGREE_PROGRAMS[newDegree] || []
    const isStillValid = validPrograms.some((p) => p.value === formData.program)
    setFormData((prev) => ({
      ...prev,
      degree: newDegree,
      program: isStillValid ? prev.program : '',
    }))
  }

  const handleProgramChange = (e) => {
    const selectedProg = e.target.value
    if (!formData.degree && selectedProg) {
      let matchedDegree = ''
      for (const [deg, progs] of Object.entries(DEGREE_PROGRAMS)) {
        if (progs.some((p) => p.value === selectedProg)) {
          matchedDegree = deg
          break
        }
      }
      setFormData((prev) => ({ ...prev, degree: matchedDegree, program: selectedProg }))
    } else {
      setFormData((prev) => ({ ...prev, program: selectedProg }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formData.email.trim())) {
      showToast?.('Please enter a valid email address')
      return
    }

    const cleanPhone = formData.phone.replace(/\D/g, '')
    if (cleanPhone.length !== 10) {
      showToast?.('Please enter a valid 10-digit phone number')
      return
    }

    setIsSubmitting(true)
    try {
      const accessKey =
        import.meta.env.VITE_WEB3FORMS_ADMISSION_ACCESS_KEY ||
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
        '8f3393fc-aa86-4f50-94dd-ff077d1e9cfb'

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: `${formData.countryCode} ${cleanPhone}`,
          state: formData.state,
          city: formData.city,
          degree: formData.degree,
          program: formData.program,
          replyto: formData.email.trim(),
          from_name: 'MTCE Admissions 2026',
          subject: `New Admission Application from ${formData.name.trim()} (${formData.program || formData.degree || 'General'})`,
        }),
      })

      const data = await response.json()

      if (data.success) {
        closeModal()
        setModalState({
          isOpen: true,
          type: 'success',
          title: 'Enquire Successfully Submitted',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          countryCode: '+91',
          state: '',
          city: '',
          degree: '',
          program: '',
          consent: false,
        })
      } else {
        console.error('Web3Forms admission failed:', data.message)
        closeModal()
        setModalState({
          isOpen: true,
          type: 'failed',
          title: 'Your Enquire Has Been Failed',
        })
      }
    } catch (err) {
      console.error('Web3Forms admission submission error:', err)
      closeModal()
      setModalState({
        isOpen: true,
        type: 'failed',
        title: 'Your Enquire Has Been Failed',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (modalState.isOpen) {
    return (
      <EnquireSuccessModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        title={modalState.title}
        onClose={() => setModalState({ isOpen: false, type: 'success', title: '' })}
      />
    )
  }

  if (!isModalOpen) return null

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in"
    >
      <div
        className="relative w-full max-w-[580px] max-h-[calc(100svh-24px)] sm:max-h-[calc(100svh-32px)] overflow-y-auto bg-white rounded-2xl sm:rounded-[32px] p-6 sm:p-7 md:p-8 shadow-2xl text-gray-900 my-auto [@media(max-height:560px)]:!p-4 [@media(max-width:350px)]:!p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          type="button"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors focus:outline-none cursor-pointer z-10 [@media(max-height:560px)]:!w-8 [@media(max-height:560px)]:!h-8 [@media(max-height:560px)]:!top-3 [@media(max-height:560px)]:!right-3 [@media(max-width:350px)]:!w-8 [@media(max-width:350px)]:!h-8 [@media(max-width:350px)]:!top-3 [@media(max-width:350px)]:!right-3"
          aria-label="Close"
        >
          <svg className="w-4 h-4 [@media(max-height:560px)]:!w-3.5 [@media(max-height:560px)]:!h-3.5 [@media(max-width:350px)]:!w-3.5 [@media(max-width:350px)]:!h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5 sm:mb-6 pt-1 sm:pt-1 px-6 sm:px-0 [@media(max-height:560px)]:!mb-3 [@media(max-height:560px)]:!pt-0 [@media(max-width:350px)]:!mb-3 [@media(max-width:350px)]:!pt-0">
          <h2 className="text-[1.75rem] font-bold text-black tracking-tight leading-tight [@media(max-height:560px)]:!text-base [@media(max-width:350px)]:!text-base">
            Admissions Open 2026
          </h2>
          <p className="text-[clamp(0.875rem,0.75rem+0.5vw,1.375rem)] font-normal mt-1 sm:mt-1.5 leading-snug [@media(max-height:560px)]:!text-[11px] [@media(max-height:560px)]:!mt-0.5 [@media(max-width:350px)]:!text-[11px] [@media(max-width:350px)]:!mt-0.5">
            College of Education Applications - 2026
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 [@media(max-height:560px)]:!space-y-2 [@media(max-width:350px)]:!space-y-2">
          {/* Name */}
          <div>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name *"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#F4F4F6] text-black placeholder:text-black text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary [@media(max-height:560px)]:!py-2 [@media(max-height:560px)]:!px-3.5 [@media(max-height:560px)]:!text-xs [@media(max-height:560px)]:!rounded-lg [@media(max-width:350px)]:!py-2 [@media(max-width:350px)]:!px-3.5 [@media(max-width:350px)]:!text-xs [@media(max-width:350px)]:!rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your Email address *"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#F4F4F6] text-black placeholder:text-black text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary [@media(max-height:560px)]:!py-2 [@media(max-height:560px)]:!px-3.5 [@media(max-height:560px)]:!text-xs [@media(max-height:560px)]:!rounded-lg [@media(max-width:350px)]:!py-2 [@media(max-width:350px)]:!px-3.5 [@media(max-width:350px)]:!text-xs [@media(max-width:350px)]:!rounded-lg"
            />
          </div>

          {/* Phone with Country Code */}
          <div className="flex gap-2 sm:gap-2.5">
            <div className="relative shrink-0">
              <select
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                className="h-full px-3 sm:px-3.5 py-3 sm:py-3.5 rounded-xl bg-[#F4F4F6] text-black font-normal text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer [@media(max-height:560px)]:!py-2 [@media(max-height:560px)]:!px-2.5 [@media(max-height:560px)]:!text-xs [@media(max-height:560px)]:!rounded-lg [@media(max-width:350px)]:!py-2 [@media(max-width:350px)]:!px-2.5 [@media(max-width:350px)]:!text-xs [@media(max-width:350px)]:!rounded-lg"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+971">+971</option>
                <option value="+65">+65</option>
              </select>
            </div>
            <input
              type="tel"
              required
              inputMode="numeric"
              maxLength={10}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
              placeholder="Enter your Mobile number *"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#F4F4F6] text-black placeholder:text-black text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary [@media(max-height:560px)]:!py-2 [@media(max-height:560px)]:!px-3.5 [@media(max-height:560px)]:!text-xs [@media(max-height:560px)]:!rounded-lg [@media(max-width:350px)]:!py-2 [@media(max-width:350px)]:!px-3.5 [@media(max-width:350px)]:!text-xs [@media(max-width:350px)]:!rounded-lg"
            />
          </div>

          {/* State & City */}
          <div className="grid grid-cols-2 gap-3 [@media(max-height:560px)]:!gap-2 [@media(max-width:350px)]:!gap-2">
            <input
              type="text"
              required
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              placeholder="Enter State *"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#F4F4F6] text-black placeholder:text-black text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary [@media(max-height:560px)]:!py-2 [@media(max-height:560px)]:!px-3 [@media(max-height:560px)]:!text-xs [@media(max-height:560px)]:!rounded-lg [@media(max-width:350px)]:!py-2 [@media(max-width:350px)]:!px-3 [@media(max-width:350px)]:!text-xs [@media(max-width:350px)]:!rounded-lg"
            />

            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="Enter City *"
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#F4F4F6] text-black placeholder:text-black text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary [@media(max-height:560px)]:!py-2 [@media(max-height:560px)]:!px-3 [@media(max-height:560px)]:!text-xs [@media(max-height:560px)]:!rounded-lg [@media(max-width:350px)]:!py-2 [@media(max-width:350px)]:!px-3 [@media(max-width:350px)]:!text-xs [@media(max-width:350px)]:!rounded-lg"
            />
          </div>

          {/* Degree & Program */}
          <div className="grid grid-cols-2 gap-3 [@media(max-height:560px)]:!gap-2 [@media(max-width:350px)]:!gap-2">
            <select
              required
              value={formData.degree}
              onChange={handleDegreeChange}
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#F4F4F6] text-black text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer [@media(max-height:560px)]:!py-2 [@media(max-height:560px)]:!px-3 [@media(max-height:560px)]:!text-xs [@media(max-height:560px)]:!rounded-lg [@media(max-width:350px)]:!py-2 [@media(max-width:350px)]:!px-3 [@media(max-width:350px)]:!text-xs [@media(max-width:350px)]:!rounded-lg"
            >
              <option value="">Select Degree *</option>
              <option value="B.Ed">B.Ed. (Bachelor of Education)</option>
              <option value="M.Ed">M.Ed. (Master of Education)</option>
            </select>

            <select
              required
              value={formData.program}
              onChange={handleProgramChange}
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#F4F4F6] text-black text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer [@media(max-height:560px)]:!py-2 [@media(max-height:560px)]:!px-3 [@media(max-height:560px)]:!text-xs [@media(max-height:560px)]:!rounded-lg [@media(max-width:350px)]:!py-2 [@media(max-width:350px)]:!px-3 [@media(max-width:350px)]:!text-xs [@media(max-width:350px)]:!rounded-lg"
            >
              <option value="">Select Program *</option>
              {formData.degree ? (
                (DEGREE_PROGRAMS[formData.degree] || []).map((prog) => (
                  <option key={prog.value} value={prog.value}>
                    {prog.label}
                  </option>
                ))
              ) : (
                <>
                  <optgroup label="B.Ed. (Bachelor of Education)">
                    {DEGREE_PROGRAMS['B.Ed'].map((prog) => (
                      <option key={`bed-${prog.value}`} value={prog.value}>
                        {prog.label}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="M.Ed. (Master of Education)">
                    {DEGREE_PROGRAMS['M.Ed'].map((prog) => (
                      <option key={`med-${prog.value}`} value={prog.value}>
                        {prog.label}
                      </option>
                    ))}
                  </optgroup>
                </>
              )}
            </select>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2.5 sm:gap-3 pt-1 sm:pt-1.5 [@media(max-height:560px)]:!pt-0.5 [@media(max-width:350px)]:!pt-0.5">
            <input
              type="checkbox"
              id="admissionConsent"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="w-4 h-4 rounded border-gray-300 accent-primary mt-0.5 shrink-0 cursor-pointer [@media(max-height:560px)]:!w-3.5 [@media(max-height:560px)]:!h-3.5 [@media(max-width:350px)]:!w-3.5 [@media(max-width:350px)]:!h-3.5"
            />
            <label
              htmlFor="admissionConsent"
              className="text-xs sm:text-[13px] leading-relaxed text-black font-normal cursor-pointer select-none [@media(max-height:560px)]:!text-[10px] [@media(max-height:560px)]:!leading-tight [@media(max-width:350px)]:!text-[10px] [@media(max-width:350px)]:!leading-tight"
            >
              I authorize Mother Terasa College of Education and its representatives to contact me regarding updates and notifications through Email, SMS, WhatsApp, and Calls. This consent overrides any DND/NDNC registration. *
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 sm:py-3.5 rounded-xl bg-primary hover:bg-[#9e031f] text-white font-bold text-base sm:text-lg shadow-sm transition-all mt-3 sm:mt-4 cursor-pointer active:scale-[0.99] disabled:opacity-75 [@media(max-height:560px)]:!py-2.5 [@media(max-height:560px)]:!mt-2 [@media(max-height:560px)]:!text-sm [@media(max-height:560px)]:!rounded-lg [@media(max-width:350px)]:!py-2.5 [@media(max-width:350px)]:!mt-2 [@media(max-width:350px)]:!text-sm [@media(max-width:350px)]:!rounded-lg"
          >
            {isSubmitting ? 'Submitting...' : 'Register Now'}
          </button>
        </form>
      </div>
    </div>
  )
}
