import Link from "next/link"
import { ArrowRight, BookOpen, Monitor, Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"

const categories = [
  {
    icon: BookOpen,
    title: "Curriculum Enrichment",
    percentage: "45%",
    examples: "Field trips, Art Literacy, Science Fair, guest speakers",
  },
  {
    icon: Monitor,
    title: "Technology",
    percentage: "20%",
    examples: "iPads, Chromebooks, staff training",
  },
  {
    icon: Users,
    title: "Community Building",
    percentage: "25%",
    examples: "Carnival, Fun Run, class parties, yearbook",
  },
  {
    icon: Heart,
    title: "Teacher Support",
    percentage: "10%",
    examples: "Classroom grants, appreciation events, supplies",
  },
]

export default function DuesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Pay your dues
          </h1>
          <p className="mt-4 text-2xl lg:text-3xl font-semibold text-primary">
            $75 per child
          </p>
          <p className="mt-4 text-secondary-foreground/80 max-w-xl mx-auto">
            Your annual dues fund everything the PTO does — from field trips to classroom supplies to community events.
          </p>
          <Button asChild size="lg" className="mt-8 text-base">
            <Link href="#">
              Pay Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Where It Goes */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-8">
            Where your money goes
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card key={category.title}>
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <category.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <p className="text-3xl font-bold text-primary">
                    {category.percentage}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mt-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {category.examples}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            Common questions
          </h2>
          
          <div className="space-y-6 max-w-2xl">
            <div>
              <h3 className="font-semibold text-foreground">
                Are dues required?
              </h3>
              <p className="text-muted-foreground mt-1">
                No, but they directly fund programs your child benefits from. Every family that participates makes a difference.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground">
                Can I pay for multiple children at once?
              </h3>
              <p className="text-muted-foreground mt-1">
                Yes. Select the number of children during checkout and the total will adjust automatically.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground">
                Is my payment tax-deductible?
              </h3>
              <p className="text-muted-foreground mt-1">
                The Forest Hills PTO is a 501(c)(3) nonprofit. Dues payments may be tax-deductible — consult your tax advisor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
            Other ways to give
          </h2>
          <p className="text-muted-foreground mb-6">
            Beyond dues, you can support Forest Hills through your time or at our annual Gala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline">
              <Link href="/volunteer">
                Volunteer your time
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/events">
                Learn about the Gala
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/about-pto", label: "About the PTO", description: "What we fund" },
          { href: "/recent-wins", label: "Recent Wins", description: "What we've accomplished" },
          { href: "/volunteer", label: "Volunteer", description: "Give your time" },
        ]}
      />
    </div>
  )
}
