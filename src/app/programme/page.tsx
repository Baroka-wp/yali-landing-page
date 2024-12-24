'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "../components/ui/button"
import { Clock, MapPin, LayoutGrid } from 'lucide-react'
import { cn } from "@/lib/utils"

const days = [
  { id: "09", number: "09", day: "lundi", date: "9 avril" },
  { id: "10", number: "10", day: "mardi", date: "10 avril" },
  { id: "11", number: "11", day: "mercredi", date: "11 avril" },
]

const eventsByDay = {
  "09": [
    {
      title: "Cérémonie d'ouverture",
      description: "Mettant l'accent sur l'importance du leadership des jeunes et de l'engagement communautaire à travers le continent, la cérémonie d'ouverture lancera le sommet avec des discours inspirants...",
      time: "09:00 à 09:45",
      location: "Palais des Congrès de Cotonou, Salle Plénière",
      type: "Plenary",
      speakers: [
        {
          name: "Dr. Aisha Ndiaye",
          role: "YALI Network",
          image: "/placeholder.svg"
        },
        {
          name: "Kwame Osei",
          role: "USAID, West Africa",
          image: "/placeholder.svg"
        },
        {
          name: "Amina Zaki",
          role: "U.S. Embassy, Benin",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      title: "Célébration des Innovations Réussies",
      description: "Dans cette session de style TED Talk, rencontrez quatre anciens exceptionnels de YALI qui ont développé des solutions innovantes dans les secteurs de l'agriculture, de la santé, du climat et de la finance...",
      time: "09:45 à 10:45",
      location: "Palais des Congrès de Cotonou, Salle de Conférence A",
      type: "Panel",
      speakers: [
        {
          name: "Yannick Mounkala",
          role: "Climate Innovation Hub",
          image: "/placeholder.svg"
        },
        {
          name: "Fatou Diop",
          role: "AgriTech Solutions",
          image: "/placeholder.svg"
        }
      ]
    }
  ],
  "10": [
    {
      title: "Panel sur l'IA et l'Innovation",
      description: "Une discussion approfondie sur l'impact de l'intelligence artificielle en Afrique et les opportunités d'innovation qu'elle présente...",
      time: "09:00 à 10:30",
      location: "Palais des Congrès de Cotonou, Salle de Conférence B",
      type: "Panel",
      speakers: [
        {
          name: "Omar Hassan",
          role: "Tech Innovation Lead",
          image: "/placeholder.svg"
        },
        {
          name: "Sarah Mensah",
          role: "AI Research Director",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      title: "Atelier sur la Sécurité et la Paix",
      description: "Un atelier interactif explorant les approches innovantes pour promouvoir la paix et la sécurité en Afrique...",
      time: "11:00 à 12:30",
      location: "Palais des Congrès de Cotonou, Salle des Ateliers",
      type: "Workshop",
      speakers: [
        {
          name: "Jean-Paul Kamara",
          role: "Peace & Security Expert",
          image: "/placeholder.svg"
        }
      ]
    }
  ],
  "11": [
    {
      title: "Forum sur l'Entrepreneuriat Durable",
      description: "Une exploration des opportunités d'entrepreneuriat qui combinent profit et impact social positif...",
      time: "09:00 à 10:30",
      location: "Palais des Congrès de Cotonou, Salle de Conférence C",
      type: "Forum",
      speakers: [
        {
          name: "Grace Okonjo",
          role: "Social Enterprise Founder",
          image: "/placeholder.svg"
        },
        {
          name: "Mohamed Ali",
          role: "Impact Investment Advisor",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      title: "Cérémonie de Clôture",
      description: "Célébration des réalisations du sommet et présentation des prochaines étapes...",
      time: "16:00 à 17:30",
      location: "Palais des Congrès de Cotonou, Salle Plénière",
      type: "Plenary",
      speakers: [
        {
          name: "Dr. Aminata Touré",
          role: "YALI Director",
          image: "/placeholder.svg"
        }
      ]
    }
  ]
}

interface Speaker {
  name: string;  // This makes name required and non-null
  role: string;
  image: string;
}

interface Event {
  title: string;
  description: string;
  time: string;
  location: string;
  type: string;
  speakers: Speaker[];
}

export default function ProgrammePage() {
  const [selectedDay, setSelectedDay] = useState("09")

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-12">Programme du Sommet</h1>
          
          {/* Date Navigation */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {days.map((day) => (
              <Button
                key={day.id}
                variant={selectedDay === day.id ? "default" : "outline"}
                className={cn(
                  "p-6 h-auto flex flex-col items-center",
                  selectedDay === day.id ? "bg-primary text-white" : "hover:bg-gray-50"
                )}
                onClick={() => setSelectedDay(day.id)}
              >
                <div className="text-3xl font-bold mb-1">{day.number}</div>
                <div className="text-sm uppercase">{day.day}</div>
                <div className="text-sm">{day.date}</div>
              </Button>
            ))}
          </div>

          {/* Events */}
          <div className="space-y-6">
            {eventsByDay[selectedDay].map((event: Event, index: any) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="mt-2">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Event Details */}
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <LayoutGrid className="h-4 w-4 mr-2" />
                        <span>{event.type}</span>
                      </div>
                    </div>

                    {/* Speakers */}
                    <div className="pt-4 border-t">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {event.speakers.map((speaker, speakerIndex) => (
                          <div key={speakerIndex} className="flex items-center space-x-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={speaker.image} alt={speaker.name} />
                              <AvatarFallback>
                                {speaker.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{speaker.name}</div>
                              <div className="text-sm text-gray-600">{speaker.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
