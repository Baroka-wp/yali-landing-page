'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const partners = [
  { name: "USAID", logo: "/placeholder.svg" },
  { name: "African Union", logo: "/placeholder.svg" },
  { name: "MTN", logo: "/placeholder.svg" },
  { name: "Dangote Group", logo: "/placeholder.svg" },
  { name: "African Development Bank", logo: "/placeholder.svg" },
  { name: "UNESCO", logo: "/placeholder.svg" },
  { name: "Tony Elumelu Foundation", logo: "/placeholder.svg" },
  { name: "Ashoka", logo: "/placeholder.svg" },
]

const Partners = () => {
  const [isVisible, setIsVisible] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    let animationId: number

    const animate = () => {
      if (slider) {
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0
        } else {
          slider.scrollLeft += 1
        }
      }
      animationId = requestAnimationFrame(animate)
    }

    if (isVisible) {
      animationId = requestAnimationFrame(animate)
    }

    return () => cancelAnimationFrame(animationId)
  }, [isVisible])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos Partenaires</h2>
        <div 
          className="overflow-hidden" 
          onMouseEnter={() => setIsVisible(false)} 
          onMouseLeave={() => setIsVisible(true)}
        >
          <div 
            ref={sliderRef}
            className="flex whitespace-nowrap"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="inline-block mx-4">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  width={150} 
                  height={75} 
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners

