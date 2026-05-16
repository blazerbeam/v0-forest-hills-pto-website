import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"

const stats = [
  { stat: "12", label: "Field trips funded this year" },
  { stat: "$18K", label: "Raised at the Spring Gala" },
  { stat: "100%", label: "Of classrooms received teacher grants" },
  { stat: "450+", label: "Volunteer hours logged" },
  { stat: "6", label: "After-school programs supported" },
  { stat: "$2,500", label: "In technology upgrades" },
  { stat: "3", label: "New garden beds installed" },
  { stat: "24", label: "Art Literacy lessons delivered" },
  { stat: "150", label: "Books added to library" },
]

const highlights = [
  {
    title: "Carnival Success",
    description: "Over 400 families attended our fall Carnival, raising funds for classroom supplies and building community connections.",
  },
  {
    title: "Fun Run Record",
    description: "This year's Falcon Fun Run was our most successful yet, with participation from 95% of students.",
  },
  {
    title: "Teacher Appreciation",
    description: "Every teacher received a personalized gift and appreciation event, coordinated by grade-level parent volunteers.",
  },
  {
    title: "Technology Refresh",
    description: "New Chromebooks for 3rd and 4th grade classrooms, plus updated printers for the front office and library.",
  },
]

export default function RecentWinsPage() {
  return (
    <div>
      <PageHeader
        title="Recent Wins"
        subtitle="A look at what we've accomplished together this year. Every dollar and volunteer hour makes a difference."
      />

      {/* Stats Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {stats.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-primary">
                    {item.stat}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-8">
            Highlights from this year
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You */}
      <section className="py-12 lg:py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Thank you, Forest Hills families
          </h2>
          <p className="text-secondary-foreground/80 mt-4 max-w-xl mx-auto">
            None of this happens without you. Whether you paid dues, volunteered an hour, or simply showed up to an event — you made this possible.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/dues", label: "Pay Dues", description: "Support next year" },
          { href: "/volunteer", label: "Volunteer", description: "Get involved" },
          { href: "/about-pto", label: "About the PTO", description: "What we do" },
        ]}
      />
    </div>
  )
}
