import React, { useState } from 'react'
import { CheckCircle2, MapPin, Mail, Phone } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', phone: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    }, 600)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/60">
      <div className="global-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          
          {/* Left Column: Admission Enquiry Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Admission Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 mb-6 sm:mb-8 leading-relaxed">
              Fill out the form below and our admissions team will get back to you shortly.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <p className="text-xs sm:text-sm font-medium">
                  Thank you! Your enquiry has been received. Our team will contact you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Row 1: Name and Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-700 block">
                    Name <span className="text-[#b31424]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#b31424]/20 focus:border-[#b31424] transition-all bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-slate-700 block">
                    Phone Number <span className="text-[#b31424]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#b31424]/20 focus:border-[#b31424] transition-all bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Email Address */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-700 block">
                  Email Address <span className="text-[#b31424]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#b31424]/20 focus:border-[#b31424] transition-all bg-white"
                />
              </div>

              {/* Row 3: Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs sm:text-sm font-medium text-slate-700 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your questions or requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#b31424]/20 focus:border-[#b31424] transition-all bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-[#b31424] hover:bg-[#8e0f1c] text-white font-semibold text-sm sm:text-base tracking-wide shadow-sm hover:shadow active:scale-[0.99] transition-all cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Details & Location Map */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            {/* Contact Details */}
            <div className="space-y-2">
              <h3 className="font-bold text-base sm:text-lg text-slate-900">
                Mother Teresa College of Education
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mettusalai, Illupur Post, Pudukkottai Dt, Tamil Nadu - 622102.
              </p>
              <a
                href="mailto:mtce2011@gmail.com"
                className="text-xs sm:text-sm text-slate-700 hover:text-[#b31424] transition-colors block"
              >
                mtce2011@gmail.com
              </a>
              <a
                href="tel:+919942904531"
                className="text-xs sm:text-sm text-slate-700 font-medium hover:text-[#b31424] transition-colors block"
              >
                +91 99429 04531
              </a>
            </div>

            {/* Our Location Map Card */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm sm:text-base text-slate-900">
                Our Location
              </h4>

              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm h-[260px] sm:h-[300px] md:h-[340px] bg-slate-100 group">
                <iframe
                  title="Mother Teresa College of Education Location Map"
                  src="https://maps.google.com/maps?q=Mother+Teresa+College+of+Education+Mettusalai+Illuppur+Pudukkottai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating location card overlay matching screenshot */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-md border border-slate-100 max-w-[210px] text-left pointer-events-none">
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    Mother Teresa College of Education
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Mettusalai, Illuppur post, Pudukkottai Dt, Tamil Nadu - 622102.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Mother+Teresa+College+of+Education+Illuppur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#b31424] font-medium mt-1 inline-block pointer-events-auto hover:underline"
                  >
                    View larger map
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
