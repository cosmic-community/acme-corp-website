import Link from 'next/link'
import { CaseStudy } from '@/types'
import CaseStudyCard from '@/components/CaseStudyCard'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
  showViewAll?: boolean
  limit?: number
}

export default function CaseStudiesSection({ caseStudies, showViewAll = false, limit }: CaseStudiesSectionProps) {
  if (!caseStudies || caseStudies.length === 0) {
    return null
  }
  
  // Apply limit if specified
  const displayedCaseStudies = limit && limit > 0 ? caseStudies.slice(0, limit) : caseStudies
  
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
          {displayedCaseStudies.map(caseStudy => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
        
        {/* View All Link */}
        {showViewAll && (
          <div className="text-center mt-12">
            <Link 
              href="/case-studies"
              className="inline-block px-8 py-4 bg-primary text-neutral font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Case Studies →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}