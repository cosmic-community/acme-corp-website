export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-neutral py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-accent">
            Acme Corp
          </h3>
          <p className="text-neutral/80 mb-8">
            Making the internet less terrible, one pixel at a time.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#services" className="text-neutral/80 hover:text-accent transition-colors">
              Services
            </a>
            <a href="#team" className="text-neutral/80 hover:text-accent transition-colors">
              Team
            </a>
            <a href="#case-studies" className="text-neutral/80 hover:text-accent transition-colors">
              Case Studies
            </a>
            <a href="#testimonials" className="text-neutral/80 hover:text-accent transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-neutral/80 hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          
          <div className="border-t border-neutral/20 pt-8">
            <p className="text-neutral/60 text-sm">
              © {currentYear} Acme Corp. All rights reserved. No corporate jargon was harmed in the making of this website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}