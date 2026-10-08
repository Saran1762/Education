import React, { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const refundData = [
  {
    number: '01',
    title: 'Refund Eligibility',
    intro: 'Fees paid through our institutional portal are generally governed by standard academic regulations. However, refunds may be considered under the following specific circumstances:',
    bullets: [
      {
        boldPrefix: 'Duplicate Payments: ',
        text: 'If you accidentally execute multiple payments for the identical fee component or application ID, you are entitled to a full reimbursement of the duplicate charge.',
      },
      {
        boldPrefix: 'Processing Errors: ',
        text: 'If an error within our authorized payment gateway causes an overcharge or deduction above the stated fee structure, the surplus amount will be credited back.',
      },
      {
        boldPrefix: 'Program Cancellation: ',
        text: 'In the exceptional event that an academic course or special workshop is cancelled by the institution prior to commencement, fees paid will be refunded in accordance with university norms.',
      },
    ],
  },
  {
    number: '02',
    title: 'Refund Procedure',
    paragraphs: [
      'To initiate a refund review, please contact our accounts department within 10 business days of the transaction date. Kindly attach bank transaction receipts, payment reference IDs, and candidate enrollment details.',
      'Approved refunds are typically processed within 7 to 14 business days. The reimbursed amount will be routed back directly to the original source bank account or payment method utilized.',
    ],
  },
  {
    number: '03',
    title: 'Non-Refundable Fee Components',
    paragraphs: [
      'Administrative application charges, registration fees, and examination verification charges are strictly non-refundable once documentation has been processed.',
      'No refund claims are entertainable for academic sessions or practical workshop components already commenced or attended.',
    ],
  },
  {
    number: '04',
    title: 'Contact Us',
    paragraphs: [
      'For inquiries or clarifications regarding fee transactions and refund claims, please email our financial desk at',
      'mtce2011@gmail.com',
    ],
  },
]

export default function ReturnRefundPolicyPage() {
  const [listRef, listVisible] = useScrollReveal()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.title = 'Return & Refund Policy - Mother Teresa College of Education'
  }, [])

  return (
    <main className="w-full flex-grow bg-white">
      {/* Return & Refund Policy Section */}
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
              Payments &amp; Refunds
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Return &amp; Refund Policy
            </h1>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl mx-auto font-normal leading-relaxed pt-1">
              Review our return and refund guidelines, including eligibility, processing timelines, and financial conditions applicable to online payments at Mother Teresa College of Education.
            </p>
          </div>

          {/* 4 Numbered Legal Terms List */}
          <div ref={listRef} className="w-full space-y-8 sm:space-y-10 md:space-y-12">
            {refundData.map((item, idx) => {
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

                      <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-2.5">
                        {item.intro && <p>{item.intro}</p>}

                        {item.bullets && (
                          <ul className="space-y-1.5 pl-5 list-disc marker:text-[#b31424]">
                            {item.bullets.map((bullet, bIdx) => (
                              <li key={bIdx}>
                                <strong className="font-bold text-slate-900">{bullet.boldPrefix}</strong>
                                {bullet.text}
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.paragraphs && item.paragraphs.map((para, pIdx) => (
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

                      <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-2">
                        {item.intro && <p>{item.intro}</p>}

                        {item.bullets && (
                          <ul className="space-y-1.5 pl-4 list-disc marker:text-[#b31424]">
                            {item.bullets.map((bullet, bIdx) => (
                              <li key={bIdx}>
                                <strong className="font-bold text-slate-900">{bullet.boldPrefix}</strong>
                                {bullet.text}
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.paragraphs && item.paragraphs.map((para, pIdx) => (
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
