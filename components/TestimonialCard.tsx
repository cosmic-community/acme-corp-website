import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const photo = testimonial.metadata.client_photo
  const rating = testimonial.metadata.rating
  
  // Convert rating key to number for star rendering
  const ratingNumber = rating ? parseInt(rating.key) : 5
  
  return (
    <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-center mb-6">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={testimonial.metadata.client_name}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary mr-4"
            width="64"
            height="64"
          />
        )}
        
        <div>
          <h4 className="font-bold text-primary">
            {testimonial.metadata.client_name}
          </h4>
          {testimonial.metadata.client_position && testimonial.metadata.client_company && (
            <p className="text-sm text-gray-600">
              {testimonial.metadata.client_position} at {testimonial.metadata.client_company}
            </p>
          )}
        </div>
      </div>
      
      <div className="flex text-accent mb-4">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < ratingNumber ? 'text-accent' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-600 italic">
        "{testimonial.metadata.testimonial}"
      </p>
    </div>
  )
}