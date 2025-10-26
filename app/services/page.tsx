import { getServices } from '@/lib/cosmic'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Our Services - Acme Corp',
  description: 'We do a bunch of stuff. And we\'re pretty damn good at it.',
}

export default async function ServicesPage() {
  const services = await getServices()
  
  return (
    <main className="min-h-screen bg-neutral">
      <div className="bg-primary text-neutral py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We do a bunch of stuff. And we're pretty damn good at it. 
            No fluff, no BS—just results that actually matter.
          </p>
        </div>
      </div>
      <ServicesSection services={services} />
      <Footer />
    </main>
  )
}