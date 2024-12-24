import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YALI Alumni Summit 2025-Bénin',
  description: 'Inspirer l\'Afrique de Demain : Leadership inclusif, Paix, Innovation et Technologie pour une Croissance Durable',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" data-theme="cupcake">
      <body className={`${inter.className} bg-base-100 min-h-screen`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
