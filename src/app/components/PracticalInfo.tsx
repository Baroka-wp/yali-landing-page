'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

const PracticalInfo = () => {
  const infoItems = [
    {
      title: "Lieu et accès",
      content: "Le YALI Alumni Summit 2025 se tiendra au Palais des Congrès de Cotonou, Bénin. L'adresse exacte et les instructions d'accès seront envoyées aux participants inscrits."
    },
    {
      title: "Hébergement",
      content: "Nous avons des partenariats avec plusieurs hôtels à proximité du lieu de l'événement. Les détails seront fournis lors de votre inscription."
    },
    {
      title: "Transport",
      content: "Des navettes seront disponibles entre les hôtels partenaires et le lieu de l'événement. Pour ceux qui arrivent par avion, un service de transfert depuis l'aéroport sera proposé."
    },
    {
      title: "Visa et voyage",
      content: "Les participants sont responsables de l'obtention de leur visa. Nous fournirons une lettre d'invitation officielle pour faciliter le processus. Assurez-vous que votre passeport est valide pour au moins 6 mois après la date de l'événement."
    },
    {
      title: "FAQ",
      content: "Pour toute autre question, veuillez consulter notre FAQ complète sur notre site web ou contacter notre équipe d'assistance."
    }
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Informations Pratiques</h2>
        <Accordion type="single" collapsible>
          {infoItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default PracticalInfo
