import React from 'react'
import founderImg from '../../assets/about/Founder.png'
import chairmanImg from '../../assets/about/Chairman.png'
import principalImg from '../../assets/about/Principal.png'

export default function LeadershipMessages() {
  const leaders = [
    {
      title: "Founder's Message",
      name: 'Shri. R. Chinnathambi',
      designation: 'Founder, Mother Teresa Educational & Charitable Trust',
      image: founderImg,
      imageAlt: 'Shri. R. Chinnathambi - Founder',
      paragraphs: [
        'Our Founder, is widely respected for his contributions to the field of education. With a strong vision to uplift society through knowledge, he has played a key role in establishing and developing institutions that serve students across diverse disciplines.',
        "Driven by a commitment to promote quality education in rural areas, he continues to inspire the institution's mission of providing accessible, meaningful, and value-based education.",
      ],
    },
    {
      title: "Chairman's Message",
      name: 'Shri. R. C. Uthayakumar, B.A.',
      designation: 'Chairman, Mother Teresa Educational & Charitable Trust',
      image: chairmanImg,
      imageAlt: 'Shri. R. C. Uthayakumar - Chairman',
      paragraphs: [
        'Our Chairman is a visionary leader, philanthropist, and entrepreneur dedicated to providing value-based education, particularly for students from rural and underserved communities. Through his leadership, the institution has grown into a multi-disciplinary educational group focused on academic excellence and holistic development.',
        'He emphasises bridging theory and practice to equip students with practical skills and real-world knowledge. With a strong commitment to growth, innovation, and social responsibility, he continues to inspire and guide the institution towards a brighter future.',
      ],
    },
    {
      title: "Principal's Message",
      name: 'Dr.S.Chitra M.A., M.Phil., M.Ed., Ph.D.,',
      designation: 'Principal, Mother Terasa College of Education',
      image: principalImg,
      imageAlt: 'Dr. S. Chitra - Principal',
      paragraphs: [
        'Welcome to Mother Teresa College of Education, where future educators are empowered with knowledge, values, and professional excellence. We believe that teaching is a transformative profession that shapes individuals and strengthens society.',
        'Our institution provides a supportive learning environment that combines academic excellence, practical teaching experience, and character development. We are committed to preparing competent, compassionate, and innovative educators who are ready to make a positive impact in the world.',
      ],
    },
  ]

  return (
    <section className="py-global bg-white">
      <div className="global-container space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-5xl mx-auto">
          <h2 className="heading-section font-bold tracking-tight">
            Leadership Messages
          </h2>
          <p className="body-text leading-relaxed">
            Meet the visionary leaders whose guidance, experience, and commitment continue to shape the growth and excellence of Mother Terasa Martic. Hr. Sec. School
          </p>
        </div>

        {/* Leaders List */}
        <div className="space-y-16 sm:space-y-24">
          {leaders.map((leader) => {
            const commaIdx = leader.designation.indexOf(',')
            const role = commaIdx !== -1 ? leader.designation.substring(0, commaIdx + 1) : leader.designation
            const org = commaIdx !== -1 ? leader.designation.substring(commaIdx + 1) : ''

            return (
              <div
                key={leader.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 xl:gap-9 items-center"
              >
                {/* Leader Portrait */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative rounded-[200px] overflow-hidden bg-[#f8f5f6] max-w-[520px] sm:max-w-[560px] lg:max-w-[600px] xl:max-w-[600px] aspect-[1/1]">
                    <img
                      src={leader.image}
                      alt={leader.imageAlt}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Leader Text Message */}
                <div className="space-y-4 sm:space-y-5">
                  <h3 className="heading-section font-bold">
                    {leader.title}
                  </h3>

                  <div className="space-y-1">
                    <p className="body-text font-bold text-primary">
                      {leader.name}
                    </p>
                    <p className="body-text">
                      <span className="font-bold text-primary">{role}</span>
                      <span className="font-medium">{org}</span>
                    </p>
                  </div>

                  <div className="space-y-4 sm:space-y-5 body-text leading-relaxed pt-1">
                    {leader.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
