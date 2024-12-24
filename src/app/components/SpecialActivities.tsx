'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/app/components/ui/button"

const SpecialActivities = () => {
  const activities = [
    "Soirée culturelle",
    "Gala de clôture",
    "Activités communautaires",
    "Marche sportive et don de sang",
    "Écotourisme",
    "Visites d'entreprises",
    "Foire d'innovation"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Activités Spéciales</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {activities.map((activity, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-4">{activity}</h3>
                    <p className="text-gray-600">Description de l&apos;activité {activity.toLowerCase()}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button 
            variant="outline" 
            className="absolute top-1/2 left-0 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button 
            variant="outline" 
            className="absolute top-1/2 right-0 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SpecialActivities
