import { Button } from "@/app/components/ui/button"

const FlagshipProgram = () => {
  const programDays = [
    {
      day: "Jour 1",
      events: [
        "Cérémonie d'ouverture",
        "Keynote sur le leadership inclusif",
        "Panel sur l'innovation numérique en Afrique"
      ]
    },
    {
      day: "Jour 2",
      events: [
        "Ateliers sur l'IA et le STEM",
        "Débat sur la sécurité et la paix",
        "Sessions de networking"
      ]
    },
    {
      day: "Jour 3",
      events: [
        "Forum sur l'entrepreneuriat durable",
        "Présentation des projets communautaires",
        "Cérémonie de clôture et gala"
      ]
    }
  ]

  return (
    <section id="program" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Programme Phare</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {programDays.map((day, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{day.day}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {day.events.map((event, eventIndex) => (
                  <li key={eventIndex}>{event}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button>Voir le programme complet</Button>
        </div>
      </div>
    </section>
  )
}

export default FlagshipProgram

