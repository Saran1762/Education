import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import faqImg from '../../assets/home/music.jpg'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState()

  const faqs = [
    {
      question: '1. What programs are offered at Mother Teresa College of Education?',
      answer:
        'We offer Bachelor of Education (B.Ed.) and Master of Education (M.Ed.) programmes designed to prepare competent and professional educators.',
    },
    {
      question: '2. Is the college approved and affiliated?',
      answer:
        'Yes, the college is approved by the National Council for Teacher Education (NCTE) and affiliated with Tamil Nadu Teachers Education University (TNTEU).',
    },
    {
      question: '3. What is the duration of the B.Ed. program?',
      answer:
        'The B.Ed. programme is a 2-year full-time professional course divided into 4 semesters comprising core pedagogy, practical training, and school internships.',
    },
    {
      question: '4. What is the duration of the M.Ed. program?',
      answer:
        'The M.Ed. programme is a 2-year full-time postgraduate course focusing on advanced educational leadership, curriculum design, and teacher research methodologies.',
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="pt-19 md:pt-24 pb-19 md:pb-24 bg-white border-t border-slate-100">
      <div className="global-container space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="heading-section font-bold">
            Frequently Asked Questions
          </h2>
          <p className="body-text leading-relaxed">
            Find answers to common questions about our programs
          </p>
        </div>

        {/* Content: Left Student Photo + Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Photo */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200">
              <img
                src={faqImg}
                alt="Mother Teresa College Student Activities"
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="body-card font-bold">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#b31424]' : ''
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 body-card border-t border-slate-100/60 mt-1 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
