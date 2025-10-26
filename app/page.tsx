import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const [services, team, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials()
  ])
  
  return (
    <main className="min-h-screen bg-neutral">
      <Hero />
      <ServicesSection services={services} />
      <TeamSection team={team} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
      <Footer />
    </main>
  )
}