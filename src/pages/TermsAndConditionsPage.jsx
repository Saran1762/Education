import React, { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const termsData = [
  {
    number: '01',
    title: 'Services',
    paragraphs: [
      'Our website provides a platform for users to conveniently access academic information and pay institutional fees online.',
      'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.',
    ],
  },
  {
    number: '02',
    title: 'Fees',
    paragraphs: [
      'Fees for academic programs and services rendered are clearly outlined on our website and prospectus.',
      'Payment processing fees may apply and will be disclosed prior to payment.',
      'All fees are non-refundable unless otherwise stated in official college policies.',
    ],
  },
  {
    number: '03',
    title: 'User Accounts',
    paragraphs: [
      'To access certain features of our services, you may be required to register or provide verifiable identification.',
      'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
      'You agree to provide accurate, current, and complete information during the registration or application process.',
    ],
  },
  {
    number: '04',
    title: 'Payment',
    paragraphs: [
      'By using our payment services, you agree to provide accurate and complete payment information.',
      'Payments made through our platform are processed securely via approved payment gateways.',
      'We are not responsible for any errors or delays in processing payments that result from incorrect payment information provided by the user.',
    ],
  },
  {
    number: '05',
    title: 'Intellectual Property',
    paragraphs: [
      'The content on this website, including but not limited to text, graphics, logos, images, curriculum details, and software, is the property of Mother Teresa College of Education and is protected by copyright laws.',
      'You may not reproduce, distribute, modify, transmit, or use the content of this website for any commercial purpose without prior written consent from the institution.',
    ],
  },
  {
    number: '06',
    title: 'Limitation of Liability',
    paragraphs: [
      'We are not liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.',
      'We do not guarantee the accuracy, completeness, or reliability of any third-party content posted on or linked to our website.',
    ],
  },
  {
    number: '07',
    title: 'Governing Law',
    paragraphs: [
      'These terms and conditions shall be governed by and construed in accordance with the laws of India, within the jurisdiction of Tamil Nadu, without regard to its conflict of law provisions.',
    ],
  },
  {
    number: '08',
    title: 'Changes to Terms',
    paragraphs: [
      'We reserve the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the website after any such changes constitutes your acceptance of the new terms and conditions.',
    ],
  },
  {
    number: '09',
    title: 'Contact Information',
    paragraphs: [
      'If you have any questions or concerns about these terms and conditions, please contact us at',
      'mtce2011@gmail.com',
    ],
  },
]

export default function TermsAndConditionsPage() {
  const [listRef, listVisible] = useScrollReveal()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.title = 'Terms & Conditions - Mother Teresa College of Education'
  }, [])

  return (
    <main className="w-full flex-grow bg-white">
      {/* Terms & Conditions Section */}
      <section
        className="relative w-full bg-white py-14 sm:py-18 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(180deg, #b31424 -50.72%, rgba(255, 255, 255, 0) 14.33%)',
          backgroundSize: '100% 900px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="global-container relative z-10 space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="text-center space-y-2.5 sm:space-y-3">
            <span className="text-[#b31424] text-sm sm:text-base font-semibold tracking-wide">
              Legal Information
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Terms &amp; Conditions
            </h1>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl mx-auto font-normal leading-relaxed pt-1">
              Please read our terms and conditions carefully to understand the rules, responsibilities, and guidelines for using the Mother Teresa College of Education website and educational services.
            </p>
          </div>

          {/* 9 Numbered Legal Terms List */}
          <div ref={listRef} className="w-full space-y-8 sm:space-y-10 md:space-y-12">
            {termsData.map((item, idx) => {
              const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300']
              return (
                <div
                  key={item.number}
                  className={`w-full scroll-fade-up ${listVisible ? 'visible is-visible' : ''} ${delays[idx % delays.length]}`}
                >
                  {/* Desktop / Tablet View */}
                  <div className="hidden md:flex items-start gap-8 sm:gap-10 w-full">
                    {/* Big Red Number */}
                    <span className="text-[#b31424] font-black text-3xl sm:text-4xl tracking-tight shrink-0 w-12 sm:w-14 pt-0.5 select-none leading-none">
                      {item.number}
                    </span>

                    {/* Title and Content */}
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                        {item.title}
                      </h2>

                      <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-1.5">
                        {item.paragraphs.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile View */}
                  <div className="md:hidden flex items-start gap-3.5 w-full">
                    <span className="text-[#b31424] font-black text-xl tracking-tight shrink-0 select-none leading-snug">
                      {item.number}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-bold text-slate-900 tracking-tight leading-snug mb-1.5">
                        {item.title}
                      </h2>

                      <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-1">
                        {item.paragraphs.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

    </main>
  )
}
