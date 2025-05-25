import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
// import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>
        Popular Companions
      </h1>
      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Networks of the Brain"
          subject="science"
          duration={45}
          color="#ffda6a" />
        <CompanionCard
          id="456"
          name="Country the Number Wizard"
          topic="Derivatives & Integrals"
          subject="science"
          duration={45}
          color="#e5d0ff" />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="English Literature "
          subject="language"
          duration={45}
          color="#bde7ee" />
      </section>
      <section>
        <CompanionsList />
        <CTA />
      </section>
    </main>
  )
}

export default Page