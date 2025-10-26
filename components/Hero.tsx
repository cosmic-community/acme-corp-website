export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-neutral mb-6 text-balance">
            Digital Services That Actually Work
          </h1>
          <p className="text-xl md:text-2xl text-neutral/90 mb-8 text-balance">
            We build websites, apps, and digital experiences that don't suck. Unlike those other guys who still think Comic Sans is "quirky."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-block px-8 py-4 bg-accent text-gray-900 font-bold rounded-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
            >
              See What We Do
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-neutral text-primary font-bold rounded-lg hover:bg-neutral/90 transition-all hover:scale-105 shadow-lg"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}