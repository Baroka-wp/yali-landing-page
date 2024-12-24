'use client'

import Image from 'next/image'
import { Button } from "@/app/components/ui/button"
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: '/images/hero/slide1.jpg',
      title: "YALI ALUMNI SUMMIT 2025-BENIN",
      subtitle: "Inspirer l'Afrique de Demain : Leadership inclusif, Paix, Innovation et Technologie pour une Croissance Durable"
    },
    {
      id: 2,
      image: '/images/hero/slide2.JPG',
      title: "Leadership Inclusif",
      subtitle: "Construire ensemble l'avenir de l'Afrique"
    },
    {
      id: 3,
      image: '/images/hero/slide3.JPG',
      title: "Innovation & Technologie",
      subtitle: "Pour une croissance durable"
    }
  ];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [currentSlide] = useState(0)

  useEffect(() => {
    const countdownDate = new Date("April 9, 2025 00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })

      if (distance < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Carousel */}
      <div className="carousel w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className="carousel-item relative w-full"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image
              src={slide.image}
              fill
              className="object-cover"
              alt={slide.title}
              priority={true}
            />

            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                  <div className="relative z-20 max-w-screen-xl mx-auto px-4 py-28 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                      {slides[currentSlide].title}
                    </h1>
                    <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl">
                      {slides[currentSlide].subtitle}
                    </p>
                    <p className="text-xl text-white mb-8">
                      9-11 Avril 2025 | Cotonou, Bénin
                    </p>
                    <div className="space-x-4">
                      <Button size="lg" className="mb-8">S&apos;inscrire maintenant</Button>
                      <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto mt-8">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                          <div key={unit} className="bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                            <div className="text-3xl font-bold text-white">{value}</div>
                            <div className="text-sm font-medium text-white uppercase tracking-wider">{unit}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
              <a
                href={`#slide${index === 0 ? slides.length : index}`}
                className="btn btn-circle btn-ghost text-white"
              >
                ❮
              </a>
              <a
                href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle btn-ghost text-white"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation Indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((slide) => (
          <a
            key={slide.id}
            href={`#slide${slide.id}`}
            className="btn btn-xs btn-circle"
          >
            {slide.id}
          </a>
        ))}
      </div>
    </div>
  )
}

export default HeroSection
