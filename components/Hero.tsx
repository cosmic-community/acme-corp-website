import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-primary text-neutral py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Digital Services That Actually Work
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral/90">
            We build websites, apps, and digital experiences that don't suck. Seriously.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact"
              className="px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Let's Talk
            </Link>
            <Link 
              href="/services"
              className="px-8 py-4 bg-neutral text-primary font-bold rounded-lg hover:bg-neutral/90 transition-colors"
            >
              See What We Do
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}