import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
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

const sponsorTiers = [
  {
    name: "Falcon Tier",
    amount: "$1,000+",
    amountNote: "estimated",
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
    amountNote: "estimated",
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
    amountNote: "estimated",
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

      {/* Why Partner Section */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
            One commitment. A year of Forest Hills.
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Each year, Forest Hills hosts events that bring our community together — the Carnival, the Fun Run, the Spring Gala, and more. Traditionally, local businesses get approached multiple times across the year for separate events. We&apos;re trying something simpler: partner with us once, support all of it.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  For local businesses
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    One commitment instead of multiple requests
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Consistent visibility with hundreds of engaged local families
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    A strong presence in one of the most active school communities near downtown Lake Oswego
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Recognition across events, including signage and inclusion on Fun Run shirts (a keepsake many students wear for years)
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  For Forest Hills
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  It lets us spend less time fundraising and more time supporting students, teachers, and programs that directly impact our community.
                </p>
              </CardContent>
            </Card>
          </div>
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
                  We&apos;re building our 2026–27 sponsor community right now.
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
            Thanks to the businesses who supported our 2025–26 Spring Gala and
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



      {/* Sponsor Levels */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
            Sponsor levels
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Sponsorship levels and amounts for 2026–27 are being finalized. Here&apos;s the structure — we can also tailor something that fits your business.
          </p>
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
                    {tier.amountNote && (
                      <span className="text-sm font-normal text-muted-foreground ml-1">
                        ({tier.amountNote})
                      </span>
                    )}
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

        </div>
      </section>

      {/* Tax-Deductible Callout */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-border max-w-xl">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Forest Hills Elementary School PTO is a 501(c)(3) nonprofit organization. Donations are tax deductible to the fullest extent of the law.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Tax ID: 93-0858044
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-12 lg:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl lg:text-2xl font-semibold text-secondary-foreground mb-4">
              Let&apos;s talk.
            </h2>
            <p className="text-secondary-foreground/80 mb-6">
              Tell us about your business and we&apos;ll find a way to partner that works.
            </p>
            <Button asChild size="lg" variant="default">
              <a href="mailto:fhptoprez@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email us
              </a>
            </Button>
            <p className="text-secondary-foreground/60 text-sm mt-4">
              Or call the PTO and we&apos;ll get back to you — contact info on the{" "}
              <Link href="/about-pto" className="underline hover:text-secondary-foreground transition-colors">
                About page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
