'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Team' },
    { href: '/case-studies', label: 'Case Studies' },
  ]

  return (
    <nav className="bg-primary text-neutral sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold hover:text-accent transition-colors">
            Acme Corp
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-neutral hover:text-accent transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={toggleMenu}
                className="px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}