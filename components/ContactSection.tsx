import ContactForm from '@/components/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-neutral mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-neutral/90">
              Got a project? A question? An existential crisis? We're here to help with at least two of those.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  )
}