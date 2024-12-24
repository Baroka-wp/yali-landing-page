'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/app/components/ui/button"

const speakers = [
  { id: 1, name: "Aminata Touré", role: "Experte en Leadership", country: "Sénégal", image: "/placeholder.svg" },
  { id: 2, name: "Kwame Nkrumah", role: "Innovateur Technologique", country: "Ghana", image: "/placeholder.svg" },
  { id: 3, name: "Ngozi Okonjo-Iweala", role: "Économiste", country: "Nigeria", image: "/placeholder.svg" },
  { id: 4, name: "Aliko Dangote", role: "Entrepreneur", country: "Nigeria", image: "/placeholder.svg" },
  { id: 5, name: "Wangari Maathai", role: "Environnementaliste", country: "Kenya", image: "/placeholder.svg" },
  { id: 6, name: "Haile Gebrselassie", role: "Athlète et Homme d'affaires", country: "Éthiopie", image: "/placeholder.svg" },
]

const SpeakersChampions = () => {
  const [filter, setFilter] = useState('all')

  const filteredSpeakers = filter === 'all' ? speakers : speakers.filter(speaker => speaker.country === filter)

  return (
    <section id="speakers" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Intervenants et Champions</h2>
        <div className="mb-8 flex justify-center space-x-4">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            Tous
          </Button>
          {Array.from(new Set(speakers.map(s => s.country))).map(country => (
            <Button 
              key={country} 
              variant={filter === country ? 'default' : 'outline'}
              onClick={() => setFilter(country)}
            >
              {country}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpeakers.map(speaker => (
            <div key={speaker.id} className="bg-white p-6 rounded-lg shadow-md">
              <Image 
                src={speaker.image} 
                alt={speaker.name} 
                width={200} 
                height={200} 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">{speaker.name}</h3>
              <p className="text-gray-600 text-center mb-2">{speaker.role}</p>
              <p className="text-gray-500 text-center">{speaker.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpeakersChampions

