import Link from "next/link"

const quickLinks = [
  { href: "/new-families", label: "New Families" },
  { href: "/events", label: "Events" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/board", label: "Board" },
  { href: "/about-pto", label: "About PTO" },
]

const resourceLinks = [
  { href: "/calendar", label: "Calendar" },
  { href: "/falcon-flash", label: "Falcon Flash" },
  { href: "/classroom-parents", label: "Classroom Parents" },
  { href: "/pto-vs-losf", label: "PTO vs LOSF" },
  { href: "/recent-wins", label: "Recent Wins" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">FH</span>
              </div>
              <span className="font-semibold">Forest Hills PTO</span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Connecting parents, teachers, and students at Forest Hills Elementary in Lake Oswego, Oregon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-secondary-foreground/60">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-secondary-foreground/60">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-secondary-foreground/60">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:pto@foresthillspto.org"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  pto@foresthillspto.org
                </a>
              </li>
              <li>
                <a
                  href="https://fh.losdschools.org/about-forest-hills/parent-teacher-organization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Official School PTO Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Forest Hills Elementary PTO. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/dues"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Pay Dues
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
