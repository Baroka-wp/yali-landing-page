'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          YALI Summit 2025
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-primary">Accueil</Link>
          <Link href="/#about" className="text-gray-600 hover:text-primary">À propos</Link>
          <Link href="/programme" className="text-gray-600 hover:text-primary">Programme</Link>
          <Link href="/#contact" className="text-gray-600 hover:text-primary">Contact</Link>
          <Button variant="outline">FR | EN</Button>
        </nav>
        <Button className="hidden md:inline-flex">S&apos;inscrire</Button>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <nav className="flex flex-col space-y-2 px-4">
            <Link href="/" className="text-gray-600 hover:text-primary">Accueil</Link>
            <Link href="#about" className="text-gray-600 hover:text-primary">À propos</Link>
            <Link href="/programme" className="text-gray-600 hover:text-primary">Programme</Link>
            <Link href="/inscription/participant" className="text-gray-600 hover:text-primary">Inscription Participant</Link>
            <Link href="/inscription/champion" className="text-gray-600 hover:text-primary">Inscription Champion</Link>
            <Link href="#contact" className="text-gray-600 hover:text-primary">Contact</Link>
            <Button variant="outline" className="w-full">FR | EN</Button>
            <Button className="w-full">S&apos;inscrire</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
