import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface RelatedLink {
  href: string
  label: string
  description?: string
}

interface RelatedLinksProps {
  links: RelatedLink[]
}

export function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <section className="py-12 lg:py-16 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-6">
          Related
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </span>
                {link.description && (
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {link.description}
                  </p>
                )}
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
