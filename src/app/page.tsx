import { Suspense } from 'react'
import HeroSection from './components/HeroSection'
import BriefOverview from './components/BriefOverview'
import AboutEvent from './components/AboutEvent'
import FlagshipProgram from './components/FlagshipProgram'
import MainThemes from './components/MainThemes'
import SpecialActivities from './components/SpecialActivities'
import SpeakersChampions from './components/SpeakersChampions'
import CommunityImpact from './components/CommunityImpact'
import Partners from './components/Partners'
import PracticalInfo from './components/PracticalInfo'
import ContactSection from './components/ContactSection'
import FloatingCTA from './components/FloatingCTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <BriefOverview />
        <AboutEvent />
        <MainThemes />
        <FlagshipProgram />
        <PracticalInfo />
        <Partners />
        <SpecialActivities />
        <Suspense fallback={<div>Loading speakers...</div>}>
          <SpeakersChampions />
        </Suspense>
        <CommunityImpact />
        <ContactSection />
      </main>
      <FloatingCTA />
    </div>
  )
}
