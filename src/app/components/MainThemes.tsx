import { Users, Lightbulb, Brain, Shield, Leaf, Atom, Briefcase } from 'lucide-react'

const MainThemes = () => {
  const themes = [
    { icon: Users, title: "Leadership Inclusif" },
    { icon: Lightbulb, title: "Innovation Numérique" },
    { icon: Brain, title: "Intelligence Artificielle" },
    { icon: Shield, title: "Sécurité et Paix" },
    { icon: Leaf, title: "Environnement" },
    { icon: Atom, title: "STEM" },
    { icon: Briefcase, title: "Entrepreneuriat" },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Thématiques Principales</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <theme.icon className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold">{theme.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainThemes

