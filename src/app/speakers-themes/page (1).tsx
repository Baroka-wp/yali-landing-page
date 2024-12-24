import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

const speakers = [
  { 
    name: "Dr. Aisha Ndiaye", 
    role: "Experte en Leadership Inclusif", 
    country: "Sénégal",
    bio: "Dr. Ndiaye est une spécialiste renommée en leadership inclusif avec plus de 15 ans d'expérience dans le développement organisationnel en Afrique.",
    image: "/placeholder.svg",
    themes: ["Leadership Inclusif", "Entrepreneuriat"]
  },
  { 
    name: "Kwame Osei", 
    role: "Innovateur Technologique", 
    country: "Ghana",
    bio: "Fondateur de plusieurs startups technologiques, Kwame Osei est un pionnier dans l'application de l'IA pour résoudre les défis africains.",
    image: "/placeholder.svg",
    themes: ["Innovation Numérique", "Intelligence Artificielle"]
  },
  { 
    name: "Amina Zaki", 
    role: "Experte en Sécurité et Paix", 
    country: "Nigeria",
    bio: "Amina Zaki a travaillé avec l'ONU sur plusieurs initiatives de paix en Afrique de l'Ouest et est une voix influente dans le domaine de la sécurité régionale.",
    image: "/placeholder.svg",
    themes: ["Sécurité et Paix", "Leadership Inclusif"]
  },
  { 
    name: "Yannick Mounkala", 
    role: "Environnementaliste", 
    country: "Congo",
    bio: "Yannick est à la tête d'une ONG qui a planté plus d'un million d'arbres dans le bassin du Congo. Il est un ardent défenseur de la conservation de la biodiversité.",
    image: "/placeholder.svg",
    themes: ["Environnement", "Leadership Inclusif"]
  },
]

const themes = [
  { 
    name: "Leadership Inclusif", 
    description: "Explorer les stratégies pour un leadership qui valorise la diversité et promeut l'inclusion à tous les niveaux de la société et des organisations.",
    icon: "👥"
  },
  { 
    name: "Innovation Numérique", 
    description: "Découvrir les dernières avancées technologiques et comment elles peuvent être appliquées pour résoudre les défis uniques du continent africain.",
    icon: "💡"
  },
  { 
    name: "Intelligence Artificielle", 
    description: "Comprendre les implications de l'IA pour l'Afrique et explorer son potentiel pour accélérer le développement dans divers secteurs.",
    icon: "🤖"
  },
  { 
    name: "Sécurité et Paix", 
    description: "Discuter des approches innovantes pour promouvoir la paix et la sécurité, essentielles au développement durable de l'Afrique.",
    icon: "🕊️"
  },
  { 
    name: "Environnement", 
    description: "Aborder les défis environnementaux critiques et les solutions durables pour préserver les écosystèmes uniques de l'Afrique.",
    icon: "🌍"
  },
  { 
    name: "STEM", 
    description: "Mettre en lumière l'importance des sciences, de la technologie, de l'ingénierie et des mathématiques pour l'avenir de l'Afrique.",
    icon: "🔬"
  },
  { 
    name: "Entrepreneuriat", 
    description: "Partager des stratégies et des ressources pour stimuler l'esprit d'entreprise et créer des opportunités économiques à travers le continent.",
    icon: "🚀"
  },
]

export default function SpeakersThemesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center text-primary">Intervenants et Thématiques</h1>
        
        <Tabs defaultValue="speakers" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="speakers">Intervenants</TabsTrigger>
            <TabsTrigger value="themes">Thématiques</TabsTrigger>
          </TabsList>
          <TabsContent value="speakers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {speakers.map((speaker, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <Image 
                      src={speaker.image} 
                      alt={speaker.name} 
                      width={100} 
                      height={100} 
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle>{speaker.name}</CardTitle>
                      <CardDescription>{speaker.role}</CardDescription>
                      <CardDescription>{speaker.country}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{speaker.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {speaker.themes.map((theme, themeIndex) => (
                        <Badge key={themeIndex} variant="secondary">{theme}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="themes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {themes.map((theme, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="text-3xl mr-2">{theme.icon}</span>
                      {theme.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{theme.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

