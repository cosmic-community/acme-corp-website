'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Service } from '@/types'
import ServiceCard from '@/components/ServiceCard'

interface ServicesSectionProps {
  services: Service[]
  showViewAll?: boolean
  limit?: number
}

export default function ServicesSection({ services, showViewAll = false, limit }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  // Get unique categories - filter out undefined and ensure type safety
  const categoryKeys = services
    .map(s => s.metadata.category?.key)
    .filter((key): key is string => Boolean(key))
  const categories = ['all', ...new Set(categoryKeys)]
  
  // Filter services by category
  let filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.metadata.category?.key === selectedCategory)
  
  // Apply limit if specified
  if (limit && limit > 0) {
    filteredServices = filteredServices.slice(0, limit)
  }
  
  if (!services || services.length === 0) {
    return null
  }
  
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            We do a bunch of stuff. And we're pretty damn good at it.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-neutral shadow-lg scale-105'
                  : 'bg-neutral text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'All Services' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        {/* View All Link */}
        {showViewAll && (
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-block px-8 py-4 bg-primary text-neutral font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Services →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}