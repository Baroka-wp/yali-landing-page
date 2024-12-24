import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"

const CommunityImpact = () => {
  const impacts = [
    { title: "Projets planifiés", value: "20+", description: "Initiatives communautaires" },
    { title: "Bénéficiaires directs", value: "5000+", description: "Personnes impactées" },
    { title: "Arbres plantés", value: "10000", description: "Pour la reforestation" },
    { title: "Startups soutenues", value: "50", description: "Jeunes entreprises innovantes" },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Impact Communautaire</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {impacts.map((impact, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{impact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{impact.value}</p>
                <CardDescription>{impact.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Témoignages</h3>
          <blockquote className="italic text-gray-600">
            &ldquo;Le YALI Alumni Summit a été une expérience transformatrice. J&apos;ai acquis des compétences précieuses et 
            établi des connexions qui m&apos;aideront à avoir un impact positif dans ma communauté.&rdquo;
          </blockquote>
          <p className="mt-2 text-right">- Kofi Anan, Participant 2023</p>
        </div>
      </div>
    </section>
  )
}

export default CommunityImpact
