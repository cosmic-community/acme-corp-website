import Link from 'next/link'
import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const icon = service.metadata.icon
  const category = service.metadata.category
  
  return (
    <Link 
      href={`/services/${service.slug}`}
      className="block bg-neutral rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-accent"
    >
      {icon && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <img
            src={`${icon.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
            alt={service.metadata.service_name}
            className="w-full h-48 object-cover"
            width="400"
            height="300"
          />
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl text-primary font-bold">
          {service.metadata.service_name}
        </h3>
        {category && (
          <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm font-medium rounded-lg">
            {category.value}
          </span>
        )}
      </div>
      
      <div 
        className="text-gray-600 mb-6 prose prose-sm max-w-none line-clamp-3"
        dangerouslySetInnerHTML={{ __html: service.metadata.description }}
      />
      
      {service.metadata.pricing && (
        <div className="text-accent font-bold text-lg mb-4">
          {service.metadata.pricing}
        </div>
      )}
      
      <div className="text-primary font-semibold hover:text-accent transition-colors">
        Learn More →
      </div>
    </Link>
  )
}