import { CaseStudy } from '@/types'
import CaseStudyCard from '@/components/CaseStudyCard'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  if (!caseStudies || caseStudies.length === 0) {
    return null
  }
  
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-primary mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's proof we actually know what we're doing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map(caseStudy => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  )
}