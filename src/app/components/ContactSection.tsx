import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contactez-nous</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <Input type="text" placeholder="Nom" />
              <Input type="email" placeholder="Email" />
              <Input type="text" placeholder="Sujet" />
              <Textarea placeholder="Votre message" rows={4} />
              <Button type="submit">Envoyer</Button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
            <p className="mb-2">Email: contact@yalisummit2025.org</p>
            <p className="mb-2">Téléphone: +229 XX XX XX XX</p>
            <p className="mb-4">Adresse: Cotonou, Bénin</p>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Linkedin />
              </a>
            </div>
            <h3 className="text-xl font-semibold mt-8 mb-4">Newsletter</h3>
            <form className="flex">
              <Input type="email" placeholder="Votre email" className="mr-2" />
              <Button type="submit">S&apos;abonner</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
