import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { Examples } from '@/components/sections/Examples'
import { Problem } from '@/components/sections/Problem'
import { Features } from '@/components/sections/Features'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { UseCases } from '@/components/sections/UseCases'
import { Privacy } from '@/components/sections/Privacy'
import { Pricing } from '@/components/sections/Pricing'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Examples />
      <Problem />
      <Features />
      <HowItWorks />
      <UseCases />
      <Privacy />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
