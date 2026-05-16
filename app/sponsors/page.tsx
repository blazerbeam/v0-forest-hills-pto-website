import Link from "next/link"
import { ArrowRight, Users, Heart, Receipt, Calendar, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"

// Placeholder sponsor data - replace with real sponsors when available
const falconTierSponsors: Array<{
  name: string
  description: string
  website?: string
  logoPlaceholder?: string
}> = []

const communityTierSponsors: Array<{
  name: string
  website?: string
}> = []

const friendsTierSponsors: Array<{
  name: string
}> = []

const pastEventSponsors: Array<{
  name: string
  logoUrl?: string
}> = []

const valueProps = [
  {
    icon: Users,
    title: "Reach engaged local families",
    description:
      "Forest Hills serves 381 students and their families in Lake Oswego. Sponsoring puts your business in front of an active, connected community.",
  },
  {
    icon: Heart,
    title: "Support what matters",
    description:
      "Your sponsorship funds field trips, art literacy, science programs, and community events for kids in our neighborhood.",
  },
  {
    icon: Receipt,
    title: "Tax-deductible giving",
    description:
      "The Forest Hills PTO is a registered 501(c)(3). Sponsorships are typically tax-deductible — check with your accountant.",
  },
  {
    icon: Calendar,
    title: "Built into our events",
    description:
      "We highlight sponsors at major events including our annual Gala, Carnival, Fun Run, and Science Night.",
  },
]

const sponsorTiers = [
  {
    name: "Falcon Tier",
    amount: "$1,000+",
    featured: true,
    benefits: [
      "Featured placement on website",
      "Logo recognition at all major events",
      "Listed in event programs",
      "Social media recognition",
    ],
  },
  {
    name: "Community Tier",
    amount: "$500",
    featured: false,
    benefits: [
      "Logo on website",
      "Recognition at major events",
      "Listed in event programs",
    ],
  },
  {
    name: "Friends of Forest Hills",
    amount: "$250",
    featured: false,
    benefits: ["Name on website", "Recognition at major events"],
  },
]

export default function SponsorsPage() {
  const hasCurrentSponsors =
    falconTierSponsors.length > 0 ||
    communityTierSponsors.length > 0 ||
    friendsTierSponsors.length > 0

  return (
    <div>
      <PageHeader
        title="Our Sponsors"
        subtitle="Local businesses that help Forest Hills kids thrive."
      />

      {/* Intro */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-lg text-muted-foreground max-w-3xl">
            Behind every great Forest Hills event is a community of local
            businesses who chip in to make it possible. We&apos;re grateful for
            the partners who help us do more for our kids.
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-8">
            Current sponsors
          </h2>

          {!hasCurrentSponsors ? (
            // Empty state
            <Card className="border-dashed">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We&apos;re building our 2025–26 sponsor community right now.
                  If your business would like to be one of the first, we&apos;d
                  love to talk.
                </p>
                <Button asChild>
                  <a href="#contact">
                    Become a sponsor
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-12">
              {/* Falcon Tier */}
              {falconTierSponsors.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                    Falcon Tier
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {falconTierSponsors.map((sponsor) => (
                      <Card key={sponsor.name} className="border-primary/20">
                        <CardContent className="p-6 flex items-center gap-6">
                          <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-muted-foreground text-xs">
                              Logo
                            </span>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground">
                              {sponsor.name}
                            </h4>
                            <p className="text-muted-foreground mt-1">
                              {sponsor.description}
                            </p>
                            {sponsor.website && (
                              <a
                                href={sponsor.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:text-primary/80 transition-colors"
                              >
                                Visit website
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Community Tier */}
              {communityTierSponsors.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                    Community Tier
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {communityTierSponsors.map((sponsor) => (
                      <Card key={sponsor.name}>
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-muted-foreground text-xs">
                              Logo
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">
                              {sponsor.name}
                            </h4>
                            {sponsor.website && (
                              <a
                                href={sponsor.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary text-sm hover:text-primary/80 transition-colors"
                              >
                                Website
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Friends Tier */}
              {friendsTierSponsors.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                    Friends of Forest Hills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {friendsTierSponsors.map((sponsor) => (
                      <span
                        key={sponsor.name}
                        className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground"
                      >
                        {sponsor.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Past Event Sponsors */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
            Past event sponsors
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Thanks to the businesses who supported our 2024–25 Spring Gala and
            other events. We couldn&apos;t do it without you.
          </p>

          {pastEventSponsors.length > 0 ? (
            <div className="flex flex-wrap items-center gap-8">
              {pastEventSponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="h-12 px-4 bg-muted rounded-lg flex items-center justify-center"
                >
                  {sponsor.logoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={sponsor.logoUrl}
                      alt={sponsor.name}
                      className="h-8 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-muted-foreground text-sm">
                      {sponsor.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="h-16 border border-dashed border-border rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-sm">
                Sponsor logos coming soon
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-8">
            Why sponsor the Forest Hills PTO
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueProps.map((prop) => (
              <Card key={prop.title}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <prop.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {prop.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Levels */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-8">
            Sponsor levels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorTiers.map((tier) => (
              <Card
                key={tier.name}
                className={tier.featured ? "border-primary ring-1 ring-primary/20" : ""}
              >
                <CardContent className="p-6">
                  {tier.featured && (
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded mb-3">
                      Featured
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-foreground">
                    {tier.name}
                  </h3>
                  <p className="text-2xl font-bold text-foreground mt-1 mb-4">
                    {tier.amount}
                    <span className="text-sm font-normal text-muted-foreground ml-1">
                      (placeholder)
                    </span>
                  </p>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-2xl">
            Sponsorship levels and amounts are being finalized for 2025–26.
            Contact us to discuss what works for your business.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-12 lg:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl lg:text-2xl font-semibold text-secondary-foreground mb-4">
              Interested in sponsoring? Let&apos;s talk.
            </h2>
            <p className="text-secondary-foreground/80 mb-6">
              We&apos;d love to hear from you and find a way to partner that
              works for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="default">
                <a href="mailto:sponsors@fhpto.org">
                  <Mail className="w-4 h-4 mr-2" />
                  Send us a message
                </a>
              </Button>
              <span className="text-secondary-foreground/60 text-sm">
                sponsors@fhpto.org
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
