import React, { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const cancellationData = [
  {
    number: '01',
    title: 'Cancellation Eligibility',
    paragraphs: [
      'Cancellation of online payments or registrations made through our platform is subject to the following criteria: Cancellation requests must be filed within 3 business days of the transaction date and prior to registration completion.',
      'Requests must be submitted in writing through our official support channel along with verified transaction credentials.',
    ],
  },
  {
    number: '02',
    title: 'Cancellation Procedure',
    paragraphs: [
      'To request a cancellation, students or applicants should email our admissions administration team detailing their enrollment number, payment reference ID, and rationale for cancellation.',
      'Cancellations processed within the approved timeline will be settled expeditiously. Any eligible disbursements will be disbursed in strict accordance with our Institutional Refund Policy.',
    ],
  },
  {
    number: '03',
    title: 'Non-Cancellable Services',
    paragraphs: [
      'Certain statutory fees, entrance processing charges, and university affiliation remittances are non-cancellable once enrolled into official records.',
      'The management reserves the right to decline cancellation appeals that do not fulfill standard criteria or contravene academic university regulations.',
    ],
  },
  {
    number: '04',
    title: 'Contact Us',
    paragraphs: [
      'If you have questions or require help regarding cancellation requests, please contact our administrative desk at',
      'mtce2011@gmail.com',
    ],
  },
]

export default function CancellationPolicyPage() {
  const [listRef, listVisible] = useScrollReveal()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.title = 'Cancellation Policy - Mother Teresa College of Education'
  }, [])

  return (
    <main className="w-full flex-grow bg-white">
      {/* Cancellation Policy Section */}
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
              Cancellations &amp; Policies
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Cancellation Policy
            </h1>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl mx-auto font-normal leading-relaxed pt-1">
              Review our cancellation policies to understand procedures, eligibility, and institutional terms for cancelling applications or service requests at Mother Teresa College of Education.
            </p>
          </div>

          {/* 4 Numbered Legal Terms List */}
          <div ref={listRef} className="w-full space-y-8 sm:space-y-10 md:space-y-12">
            {cancellationData.map((item, idx) => {
              const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300']
              return (
                <div
                  key={item.number}
                  className={`w-full scroll-fade-up ${listVisible ? 'visible is-visible' : ''} ${delays[idx % delays.length]}`}
                >
                  {/* Desktop / Tablet View */}
                  <div className="hidden md:flex items-start gap-8 sm:gap-10 w-full">
                    <span className="text-[#b31424] font-black text-3xl sm:text-4xl tracking-tight shrink-0 w-12 sm:w-14 pt-0.5 select-none leading-none">
                      {item.number}
                    </span>

                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                        {item.title}
                      </h2>

                      <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-2">
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
