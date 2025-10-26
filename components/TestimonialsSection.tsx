import { Testimonial } from '@/types'
import TestimonialCard from '@/components/TestimonialCard'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }
  
  return (
    <section id="testimonials" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-primary mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            We could brag all day, but let's hear from the people who actually paid us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}