import Link from "next/link"
import { ArrowRight, BookOpen, Monitor, Users, Heart, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"

const buckets = [
  {
    icon: BookOpen,
    title: "Curriculum Enrichment",
    items: [
      "Field trips",
      "Art Literacy",
      "OBOB",
      "Science Fair",
      "Assemblies",
      "Guest Speakers",
      "Garden program",
      "Teaching supplies",
      "After-school programs",
      "Multicultural experiences",
    ],
  },
  {
    icon: Monitor,
    title: "Technology",
    items: [
      "iPads",
      "Chromebooks",
      "Printers",
      "Staff training",
      "Online directory",
    ],
  },
  {
    icon: Users,
    title: "Community Building",
    items: [
      "Falcon Fest",
      "Fun Run",
      "Talent Show",
      "Class parties",
      "Carnival",
      "Book Fair",
      "Teacher Appreciation",
      "Yearbook",
      "5th Grade Celebration",
      "Spirit Wear",
    ],
  },
  {
    icon: Heart,
    title: "Fundraising",
    items: [
      "Annual dues",
      "Spring Gala",
    ],
  },
]

export default function AboutPTOPage() {
  return (
    <div>
      <PageHeader
        title="What the PTO does"
        subtitle="We fund the extras that make Forest Hills special — the experiences beyond the standard curriculum that enrich our kids' education."
      />

      {/* Buckets Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buckets.map((bucket) => (
              <Card key={bucket.title}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <bucket.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {bucket.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bucket.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-muted text-sm text-muted-foreground rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Funded */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
            How we're funded
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Our primary funding comes from annual dues ($75 per child) and our Spring Gala. Every dollar stays at Forest Hills and directly supports our students and teachers.
          </p>
          <Link
            href="/dues"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Learn more about dues
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Bylaws */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Our bylaws
              </h2>
              <p className="text-muted-foreground mt-1 mb-3">
                Want the full details on how we operate?
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Download PTO Bylaws (PDF)
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/board", label: "Meet the Board", description: "The parents leading the PTO" },
          { href: "/pto-vs-losf", label: "PTO vs. LOSF", description: "Understanding the difference" },
          { href: "/volunteer", label: "Volunteer", description: "Get involved" },
        ]}
      />
    </div>
  )
}
