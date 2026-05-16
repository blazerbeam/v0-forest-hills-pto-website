import Link from "next/link"
import { ArrowRight, School, Building2, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"

const ptoItems = [
  "Field trips, art literacy, OBOB, Science Night",
  "Teacher grants and classroom supplies",
  "After-school programs and enrichment",
  "Community events: Carnival, Fun Run, Talent Show, Gala",
  "Staff appreciation and community building",
]

const losfItems = [
  "Funds teaching positions across all LOSD schools",
  "Adds teachers the state funding doesn't cover",
  "Raises $1.5M annually toward this single purpose",
  "Includes elementary music and reading specialists",
  "Includes middle and high school electives in science, technology, and arts",
]

export default function PTOvsLOSFPage() {
  return (
    <div>
      <PageHeader
        title="PTO vs. LOSF"
        subtitle="Both organizations matter. Both rely on parents. But they do different things, and a lot of people get them confused. Here's the difference."
      />

      {/* Comparison Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* PTO Column */}
            <Card className="border-primary/20">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <School className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      Forest Hills PTO
                    </h2>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-primary mb-4">
                  Funds the experiences.
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {"The PTO is just for Forest Hills. We fund the things that make the school year richer — field trips, classroom enrichment, after-school programs, teacher grants, community events, and the supplies that keep classrooms running. We can't hire teachers, and that's not our job."}
                </p>
                
                <ul className="space-y-3">
                  {ptoItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* LOSF Column */}
            <Card>
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      Lake Oswego Schools Foundation
                    </h2>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-secondary mb-4">
                  Funds the teachers.
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {"LOSF is a district-wide nonprofit. Their job is straightforward: raise money to hire more teachers across every school in Lake Oswego. They don't fund classrooms, events, or buildings. Just teachers — because state funding for our district falls short by about $850 per student."}
                </p>
                
                <ul className="space-y-3">
                  {losfItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple Version Takeaway */}
      <section className="py-10 lg:py-14 bg-[#D4A437]/12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-8">
              The simple version:
            </h2>
            
            <div className="space-y-3">
              <div className="bg-card rounded-xl border border-border p-4">
                <p className="text-foreground font-medium">Parent Clubs fund things.</p>
              </div>
              <div className="bg-card rounded-xl border border-border p-4">
                <p className="text-foreground font-medium">Bond measures fund buildings.</p>
              </div>
              <div className="bg-card rounded-xl border border-border p-4">
                <p className="text-foreground font-medium">{"The Foundation funds people — teachers."}</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              — Lake Oswego Schools Foundation
            </p>
          </div>
        </div>
      </section>

      {/* Support LOSF CTA */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Want to support LOSF too?
            </h2>
            <p className="text-muted-foreground mb-6">
              {"Most Forest Hills families give to both — they're complementary, not competing. Learn more about LOSF and how to donate."}
            </p>
            <Button asChild variant="outline" className="group">
              <a
                href="https://losfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit LOSF
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/dues", label: "About Dues", description: "What dues fund and how they work" },
          { href: "/about-pto", label: "About the PTO", description: "What we fund and how" },
          { href: "/board", label: "Meet the Board", description: "Your PTO leadership" },
        ]}
      />
    </div>
  )
}
