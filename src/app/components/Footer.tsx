import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">YALI Alumni Summit 2025</h3>
            <p className="text-sm">Inspirer l&apos;Afrique de Demain</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-primary">À propos</Link></li>
              <li><Link href="#program" className="hover:text-primary">Programme</Link></li>
              <li><Link href="#speakers" className="hover:text-primary">Intervenants</Link></li>
              <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Mentions légales</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-primary">Conditions d&apos;utilisation</Link></li>
              <li><Link href="#" className="hover:text-primary">Politique de confidentialité</Link></li>
              <li><Link href="#" className="hover:text-primary">Cookies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><Facebook /></a>
              <a href="#" className="hover:text-primary"><Twitter /></a>
              <a href="#" className="hover:text-primary"><Instagram /></a>
              <a href="#" className="hover:text-primary"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} YALI Alumni Summit. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
