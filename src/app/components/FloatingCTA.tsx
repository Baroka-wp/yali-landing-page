'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/app/components/ui/button"

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button size="lg">S&apos;inscrire maintenant</Button>
    </div>
  )
}

export default FloatingCTA
