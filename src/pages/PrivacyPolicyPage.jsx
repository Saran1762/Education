import React, { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const privacyData = [
  {
    number: '01',
    title: 'Information We Collect',
    paragraphs: [
      {
        boldPrefix: 'Personal Information: ',
        text: 'When you use our services, apply for admission, or submit enquiries, we may collect personal details such as your name, email address, phone number, academic records, and payment information.',
      },
      {
        boldPrefix: 'Usage Data: ',
        text: 'We may also collect information about how you interact with our website, including your IP address, browser type, pages visited, and other usage data to optimize institutional services.',
      },
    ],
  },
  {
    number: '02',
    title: 'How We Use Your Information',
    paragraphs: [
      {
        boldPrefix: 'To Provide Educational Services: ',
        text: 'We use your personal information to process applications, student registrations, fee payments, and facilitate institutional communications.',
      },
      {
        boldPrefix: 'To Improve Our Platform: ',
        text: 'We analyze anonymized usage data to monitor web performance and deliver an enhanced digital experience to applicants and students.',
      },
    ],
  },
  {
    number: '03',
    title: 'Data Security',
    paragraphs: [
      {
        boldPrefix: 'Security Measures: ',
        text: 'We implement industry-standard security protocols and encryption to safeguard your sensitive information from unauthorized access, modification, or disclosure.',
      },
      {
        boldPrefix: '',
        text: 'However, please note that no internet transmission or electronic storage method is 100% immune from vulnerabilities, and we continually upgrade our security systems.',
      },
    ],
  },
  {
    number: '04',
    title: 'Disclosure of Information',
    paragraphs: [
      {
        boldPrefix: '',
        text: 'We do not sell or trade your personal information. We may share data with vetted institutional service partners and statutory educational regulatory authorities as required by law.',
      },
      {
        boldPrefix: '',
        text: 'We may also disclose information when mandatory to comply with judicial processes, enforce policies, or protect student and campus safety.',
      },
    ],
  },
  {
    number: '05',
    title: 'Third-Party Links',
    paragraphs: [
      {
        boldPrefix: '',
        text: 'Our website may contain external links to university portals, government bodies, or educational affiliations. These external sites operate under independent privacy policies, and we are not liable for their content.',
      },
    ],
  },
  {
    number: '06',
    title: "Children's Privacy",
    paragraphs: [
      {
        boldPrefix: '',
        text: 'Our collegiate portal is designed for higher education candidates and guardians. We do not intentionally harvest data from children under 13 without verified parental consent.',
      },
    ],
  },
  {
    number: '07',
    title: 'Changes to Privacy Policy',
    paragraphs: [
      {
        boldPrefix: '',
        text: 'We reserve the right to revise this Privacy Policy periodically. Modifications take effect immediately upon being posted on this official portal.',
      },
    ],
  },
  {
    number: '08',
    title: 'Contact Us',
    paragraphs: [
      {
        boldPrefix: '',
        text: 'If you have questions or concerns regarding our privacy practices, please reach out to us at',
      },
      {
        boldPrefix: '',
        text: 'mtce2011@gmail.com',
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
  const [listRef, listVisible] = useScrollReveal()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.title = 'Privacy Policy - Mother Teresa College of Education'
  }, [])

  return (
    <main className="w-full flex-grow bg-white">
      {/* Privacy Policy Section */}
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
              Privacy &amp; Security
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h1>

            <p className="text-slate-600 text-sm sm:text-base max-w-4xl mx-auto font-normal leading-relaxed pt-1">
              Your privacy is paramount. Learn how Mother Teresa College of Education collects, manages, and safeguards your personal information while ensuring a transparent digital environment.
            </p>
          </div>

          {/* 8 Numbered Legal Terms List */}
          <div ref={listRef} className="w-full space-y-8 sm:space-y-10 md:space-y-12">
            {privacyData.map((item, idx) => {
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
                          <p key={pIdx}>
                            {para.boldPrefix && (
                              <strong className="font-bold text-slate-900">{para.boldPrefix}</strong>
                            )}
                            {para.text}
                          </p>
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

                      <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-1.5">
                        {item.paragraphs.map((para, pIdx) => (
                          <p key={pIdx}>
                            {para.boldPrefix && (
                              <strong className="font-bold text-slate-900">{para.boldPrefix}</strong>
                            )}
                            {para.text}
                          </p>
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
