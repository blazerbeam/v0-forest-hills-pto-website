import Link from "next/link"
import { Clock, Users, Home, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"
import { GradeBadgeList } from "@/components/grade-badge"

const volunteerTypes = [
  {
    icon: Clock,
    title: "One-time event",
    commitment: "1–2 hours",
    description: "Help at a single event like Carnival, Book Fair, or Fun Run. Perfect for busy schedules.",
  },
  {
    icon: Users,
    title: "Ongoing committee",
    commitment: "Monthly",
    description: "Join a team that plans and runs programs throughout the year. More involvement, bigger impact.",
  },
  {
    icon: Home,
    title: "From home",
    commitment: "Flexible",
    description: "Help with tasks that can be done remotely — organizing, emailing, or prepping materials.",
  },
]

const opportunities = [
  {
    title: "Carnival Setup & Teardown",
    commitment: "2 hours",
    date: "Sept 19",
    grades: ["All"] as const,
  },
  {
    title: "Fun Run Volunteer",
    commitment: "3 hours",
    date: "Oct 8",
    grades: ["All"] as const,
  },
  {
    title: "Book Fair Helper",
    commitment: "2 hours",
    date: "Oct 27–31",
    grades: ["All"] as const,
  },
  {
    title: "Art Literacy Volunteer",
    commitment: "1 hour/month",
    date: "Ongoing",
    grades: ["K", "1", "2"] as const,
  },
  {
    title: "Science Fair Judge",
    commitment: "3 hours",
    date: "Spring",
    grades: ["4", "5"] as const,
  },
  {
    title: "Gala Planning Committee",
    commitment: "Monthly meetings",
    date: "Jan–Apr",
    grades: ["All"] as const,
  },
]

export default function VolunteerPage() {
  return (
    <div>
      <PageHeader
        title="Volunteer"
        subtitle="Help in a way that fits your life. Every hour you give makes Forest Hills better for our kids."
      />

      {/* Volunteer Types */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {volunteerTypes.map((type) => (
              <Card key={type.title} className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {type.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mt-1">
                    {type.commitment}
                  </p>
                  <p className="text-muted-foreground mt-3">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            Current opportunities
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {opportunities.map((opp, index) => (
              <Card key={index}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {opp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {opp.commitment} · {opp.date}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <GradeBadgeList grades={opp.grades as ("K" | "1" | "2" | "3" | "4" | "5" | "All")[]} />
                    <Button size="sm" variant="outline">
                      Sign up
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-secondary text-secondary-foreground">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-xl font-semibold">
                Not sure where to start?
              </h2>
              <p className="text-secondary-foreground/80 mt-2 max-w-xl">
                Our Volunteer Coordinator can help match you with opportunities that fit your schedule and interests.
              </p>
              <Button asChild className="mt-4">
                <Link href="mailto:volunteer@foresthillspto.org">
                  Email our Volunteer Coordinator
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/board", label: "Meet the Board", description: "Who leads the PTO" },
          { href: "/events", label: "Events", description: "What's coming up" },
          { href: "/classroom-parents", label: "Classroom Parents", description: "Grade-level contacts" },
        ]}
      />
    </div>
  )
}
