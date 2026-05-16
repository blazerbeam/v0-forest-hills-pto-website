import Link from "next/link"
import { ArrowRight, School, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"

const ptoItems = [
  "Funds enrichment programs and field trips",
  "Supports after-school activities",
  "Organizes classroom parties and events",
  "Provides teacher grants and supplies",
  "Builds community through school events",
]

const losfItems = [
  "Raises funds to hire additional teachers",
  "Supports programs across the entire district",
  "Works at the Lake Oswego School District level",
  "Cannot fund capital projects (those come from bonds)",
]

export default function PTOvsLOSFPage() {
  return (
    <div>
      <PageHeader
        title="PTO vs. LOSF"
        subtitle="Two organizations, two missions. Both support our kids — here's how they differ."
      />

      {/* Comparison Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* PTO Column */}
            <Card className="border-primary/20">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <School className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      Forest Hills PTO
                    </h2>
                    <p className="text-sm text-muted-foreground">Just our school</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {ptoItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Cannot do:</strong> Hire teachers or fund capital projects
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* LOSF Column */}
            <Card>
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      Lake Oswego Schools Foundation
                    </h2>
                    <p className="text-sm text-muted-foreground">District-wide</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {losfItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <Link
                    href="https://losfoundation.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Visit LOSF website
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Both Matter */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
              Both matter. They do different things.
            </h2>
            <p className="text-muted-foreground">
              The PTO and LOSF work together to support Lake Oswego students. We focus on making Forest Hills the best it can be; LOSF focuses on strengthening the entire district. Many families contribute to both.
            </p>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/dues", label: "Pay PTO Dues", description: "$75 per child" },
          { href: "/about-pto", label: "About the PTO", description: "What we fund and how" },
          { href: "/board", label: "Meet the Board", description: "Your PTO leadership" },
        ]}
      />
    </div>
  )
}
