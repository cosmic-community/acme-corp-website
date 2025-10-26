// app/services/[slug]/page.tsx
import { getServiceBySlug, getServices } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Generate static params for all services
export async function generateStaticParams() {
  const services = await getServices()
  
  return services.map((service) => ({
    slug: service.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  
  if (!service) {
    return {
      title: 'Service Not Found - Acme Corp',
    }
  }
  
  return {
    title: `${service.metadata.service_name} - Acme Corp`,
    description: service.metadata.description.replace(/<[^>]*>/g, '').substring(0, 160),
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  
  if (!service) {
    notFound()
  }
  
  const icon = service.metadata.icon
  const category = service.metadata.category
  
  return (
    <main className="min-h-screen bg-neutral">
      {/* Hero Section */}
      <div className="bg-primary text-neutral py-20">
        <div className="container mx-auto px-4">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-neutral hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-5xl font-bold">{service.metadata.service_name}</h1>
              {category && (
                <span className="px-4 py-2 bg-secondary/30 text-neutral text-sm font-medium rounded-lg">
                  {category.value}
                </span>
              )}
            </div>
            
            {service.metadata.pricing && (
              <div className="text-accent font-bold text-2xl mb-4">
                {service.metadata.pricing}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {icon && (
            <div className="mb-12 rounded-xl overflow-hidden shadow-xl">
              <img
                src={`${icon.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
                alt={service.metadata.service_name}
                className="w-full h-96 object-cover"
                width="1600"
                height="900"
              />
            </div>
          )}
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">About This Service</h2>
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: service.metadata.description }}
            />
          </div>
          
          {/* CTA Section */}
          <div className="mt-12 bg-primary text-neutral rounded-xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8">
              Let's talk about how we can help you achieve your goals with {service.metadata.service_name}.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}