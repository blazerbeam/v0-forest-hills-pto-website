"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const navLinks = [
  { href: "/new-families", label: "New Families" },
  { href: "/events", label: "Events" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/board", label: "Board" },
  { href: "/about-pto", label: "About" },
  { href: "/at-a-glance", label: "At a glance" },
  { href: "/dues", label: "Dues" },
  { href: "/future-fh", label: "Future FH" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/frankie-logo.png"
                alt="Frankie the Falcon - Forest Hills mascot"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
                priority
              />
              <div className="hidden sm:block">
                <span className="font-semibold text-foreground">Forest Hills PTO</span>
              </div>
            </Link>
            <Popover>
              <PopoverTrigger asChild>
                <button 
                  className="hidden sm:inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#FFF4D6] text-[#8B6914] hover:bg-[#FFEDBD] transition-colors cursor-pointer"
                  aria-label="Beta information"
                >
                  Beta
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 text-sm" align="start">
                <p className="text-muted-foreground leading-relaxed">
                  This is a working prototype of the new Forest Hills PTO site, shared with the board for feedback. Some content is placeholder. Real launch coming soon. Questions? Email{" "}
                  <a href="mailto:pto@fhpto.org" className="text-primary hover:underline">
                    pto@fhpto.org
                  </a>
                  .
                </p>
              </PopoverContent>
            </Popover>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/calendar" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Calendar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-card z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-semibold text-foreground">Menu</span>
          <button
            type="button"
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/calendar"
              className="px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calendar
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
