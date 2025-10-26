import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-neutral py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Acme Corp</h3>
            <p className="text-neutral/80">
              Digital services that actually work. No fluff, just results.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral/80 hover:text-neutral transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral/80 hover:text-neutral transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-neutral/80 hover:text-neutral transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-neutral/80 hover:text-neutral transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">What We Do</h4>
            <ul className="space-y-2 text-neutral/80">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Design & UX</li>
              <li>Consulting</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <p className="text-neutral/80 mb-4">
              Ready to work with us?
            </p>
            <Link 
              href="#contact"
              className="inline-block px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-neutral/20 pt-8 text-center text-neutral/80">
          <p>&copy; {new Date().getFullYear()} Acme Corp. All rights reserved. Obviously.</p>
        </div>
      </div>
    </footer>
  )
}