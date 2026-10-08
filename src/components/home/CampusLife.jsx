import React from 'react'
import libraryImg from '../../assets/home/library.png'
import labsImg from '../../assets/home/labs.png'
import sportsImg from '../../assets/home/sports.png'
import hostelImg from '../../assets/home/hostel.png'
import auditoriumImg from '../../assets/home/auditorium.png'
import cafeteriaImg from '../../assets/home/cafeteria.png'

export default function CampusLife() {
  const facilities = [
    {
      name: 'Library',
      image: libraryImg,
    },
    {
      name: 'Labs',
      image: labsImg,
    },
    {
      name: 'Sports',
      image: sportsImg,
    },
    {
      name: 'Hostel',
      image: hostelImg,
    },
    {
      name: 'Auditorium',
      image: auditoriumImg,
    },
    {
      name: 'Cafeteria',
      image: cafeteriaImg,
    },
  ]

  return (
    <section id="life-mtce" className="pt-19 md:pt-24">
      <div className="global-container space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="heading-section font-extrabold text-slate-900 tracking-tight">
            Campus Life
          </h2>
          <p className="body-text leading-relaxed">
            Experience world-class facilities and a vibrant campus environment
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md group border border-slate-200 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bottom Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 27.72%, #000000 100%)',
                }}
              />

              {/* Facility Name */}
              <div className="absolute bottom-5 left-5 z-10">
                <span className="body-text font-bold text-white tracking-wide">
                  {facility.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
