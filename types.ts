// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Service interface
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    description: string;
    icon?: {
      url: string;
      imgix_url: string;
    };
    pricing?: string;
    category?: {
      key: string;
      value: string;
    };
  };
}

// Team Member interface
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name: string;
    role: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    linkedin_url?: string;
    twitter_handle?: string;
  };
}

// Case Study interface
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title: string;
    client_name?: string;
    challenge: string;
    solution: string;
    results?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    related_service?: Service | string;
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    client_company?: string;
    client_position?: string;
    testimonial: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Contact Submission interface
export interface ContactSubmission extends CosmicObject {
  type: 'contact-submissions';
  metadata: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    message: string;
    status: {
      key: string;
      value: string;
    };
  };
}

// Type literals for select-dropdown values
export type ServiceCategory = 'consulting' | 'development' | 'design' | 'marketing';
export type ContactStatus = 'new' | 'in-progress' | 'resolved';
export type TestimonialRating = '5' | '4' | '3';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}