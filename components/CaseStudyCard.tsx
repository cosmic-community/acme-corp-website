import { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const image = caseStudy.metadata.featured_image
  
  return (
    <div className="bg-neutral rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
      {image && (
        <img
          src={`${image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
          alt={caseStudy.metadata.project_title}
          className="w-full h-64 object-cover"
          width="800"
          height="400"
        />
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-primary mb-2">
          {caseStudy.metadata.project_title}
        </h3>
        
        {caseStudy.metadata.client_name && (
          <p className="text-secondary font-medium mb-6">
            Client: {caseStudy.metadata.client_name}
          </p>
        )}
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Challenge</h4>
            <div 
              className="text-gray-600 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }}
            />
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Solution</h4>
            <div 
              className="text-gray-600 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: caseStudy.metadata.solution }}
            />
          </div>
          
          {caseStudy.metadata.results && (
            <div>
              <h4 className="text-lg font-bold text-accent mb-2">Results</h4>
              <div 
                className="text-gray-600 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}