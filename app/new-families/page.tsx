import Link from "next/link"
import { ArrowRight, Calendar, DollarSign, Users, Mail, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"

const firstMonthCards = [
  {
    icon: Calendar,
    title: "Check the calendar",
    description: "Events are posted by grade level. Filter to see what applies to your child.",
    href: "/calendar",
  },
  {
    icon: DollarSign,
    title: "Pay your dues",
    description: "$75 per child funds everything from field trips to classroom supplies.",
    href: "/dues",
  },
  {
    icon: Users,
    title: "Meet your classroom parent",
    description: "They coordinate class parties, volunteer needs, and parent communication.",
    href: "/classroom-parents",
  },
  {
    icon: Mail,
    title: "Read the Falcon Flash",
    description: "Our weekly email newsletter keeps you in the loop. It arrives every Friday.",
    href: "/falcon-flash",
  },
]

const quickWins = [
  "Sign up for one volunteer shift at a single event",
  "Introduce yourself to your child's classroom parent",
  "Attend one school event with your family",
  "Read the Falcon Flash for two weeks straight",
]

export default function NewFamiliesPage() {
  return (
    <div>
      <PageHeader
        title="Welcome to Forest Hills"
        subtitle="Whether this is your first child starting school or you're new to the district, you belong here. We're glad you found us."
      />

      {/* First Month Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            What to know in your first month
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {firstMonthCards.map((card) => (
              <Link key={card.title} href={card.href} className="group">
                <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20 cursor-pointer">
                  <CardContent className="p-6 relative">
                    <ChevronRight className="absolute top-4 right-4 w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                      <card.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Wins Section */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-foreground">
                Quick wins
              </h2>
              <p className="text-muted-foreground mt-1">
                Small ways to engage that take under an hour.
              </p>
            </div>
          </div>
          
          <ul className="space-y-3 max-w-xl">
            {quickWins.map((win, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-foreground">{win}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/volunteer">
                Find a way to help
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dues">
                Pay your dues
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/calendar", label: "Calendar", description: "See what's coming up" },
          { href: "/classroom-parents", label: "Classroom Parents", description: "Find your class contact" },
          { href: "/falcon-flash", label: "Falcon Flash", description: "Weekly newsletter archive" },
        ]}
      />
    </div>
  )
}
