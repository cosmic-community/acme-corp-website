import { getCaseStudies } from '@/lib/cosmic'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Case Studies - Acme Corp',
  description: 'Don\'t just take our word for it. Here\'s proof we actually know what we\'re doing.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()
  
  return (
    <main className="min-h-screen bg-neutral">
      <div className="bg-primary text-neutral py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Here's proof we actually know what we're doing. 
            Real projects, real results, real impressed clients.
          </p>
        </div>
      </div>
      <CaseStudiesSection caseStudies={caseStudies} />
      <Footer />
    </main>
  )
}