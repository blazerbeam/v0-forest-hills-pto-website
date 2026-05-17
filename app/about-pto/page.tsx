import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"

// Hand-drawn style SVG icons
function PaintbrushIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 40c2-4 6-6 10-6 2 0 4 1 5 3s1 4-1 6c-2 3-6 3-9 2s-6-3-5-5z" fill="currentColor" opacity="0.2" />
      <path d="M18 34l6-8 12-14c2-2 5-2 7 0s2 5 0 7L29 31l-8 6" />
      <path d="M36 12l-4 4" />
      <circle cx="14" cy="38" r="2" fill="currentColor" />
    </svg>
  )
}

function LaptopIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="10" width="36" height="24" rx="3" fill="currentColor" opacity="0.2" />
      <rect x="6" y="10" width="36" height="24" rx="3" />
      <path d="M2 38h44" />
      <path d="M18 38l-2 4h16l-2-4" />
      <rect x="12" y="16" width="24" height="12" rx="1" />
    </svg>
  )
}

function HeartHandsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 42s-14-8-14-18c0-5 4-9 8-9 3 0 5 1 6 4 1-3 3-4 6-4 4 0 8 4 8 9 0 10-14 18-14 18z" fill="currentColor" opacity="0.2" />
      <path d="M24 42s-14-8-14-18c0-5 4-9 8-9 3 0 5 1 6 4 1-3 3-4 6-4 4 0 8 4 8 9 0 10-14 18-14 18z" />
      <path d="M4 30c2-1 4-1 6 0 2 2 2 5 0 6-1 1-3 1-4 0" />
      <path d="M44 30c-2-1-4-1-6 0-2 2-2 5 0 6 1 1 3 1 4 0" />
    </svg>
  )
}

function GiftStarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4l3 9h10l-8 6 3 9-8-6-8 6 3-9-8-6h10z" fill="currentColor" opacity="0.2" />
      <path d="M24 4l3 9h10l-8 6 3 9-8-6-8 6 3-9-8-6h10z" />
      <rect x="10" y="32" width="28" height="12" rx="2" fill="currentColor" opacity="0.15" />
      <rect x="10" y="32" width="28" height="12" rx="2" />
      <path d="M24 32v12" />
      <path d="M10 38h28" />
    </svg>
  )
}

const categories = [
  {
    icon: PaintbrushIcon,
    title: "Curriculum Enrichment",
    color: "bg-[#E8D5C4]", // terracotta/warm tan
    borderColor: "border-[#C9A88A]",
    rotation: "-rotate-1",
    items: [
      "Field trips",
      "Art Literacy",
      "OBOB (Oregon Battle of the Books)",
      "Science Night",
      "Assemblies and guest speakers",
      "Garden program",
      "After-school programs",
      "Multicultural experiences",
    ],
  },
  {
    icon: LaptopIcon,
    title: "Technology",
    color: "bg-[#D4E5D7]", // sage green
    borderColor: "border-[#A8C9AE]",
    rotation: "rotate-1",
    items: [
      "iPads and Chromebooks",
      "Printers and classroom tech",
      "Staff technology training",
      "Online school directory",
    ],
  },
  {
    icon: HeartHandsIcon,
    title: "Community Building",
    color: "bg-[#D6E4EE]", // dusty blue
    borderColor: "border-[#A8C5D9]",
    rotation: "-rotate-0.5",
    items: [
      "Back to School Falcon Fest",
      "Fun Run",
      "Talent Show",
      "Class parties",
      "Carnival, Book Fair, Halloween Parade",
      "Teacher Appreciation",
      "Yearbook",
      "5th Grade Celebration",
    ],
  },
  {
    icon: GiftStarIcon,
    title: "Fundraising",
    color: "bg-[#F5E6C8]", // warm gold
    borderColor: "border-[#DFC99A]",
    rotation: "rotate-0.5",
    items: [
      "Annual PTO Dues",
      "The Round-up (alternates with Spring Gala)",
      "Fall Fun Run",
      "Sponsorships",
      "Grants",
    ],
  },
]

const impactStats = [
  { stat: "$60K+", caption: "Raised at the Spring Gala" },
  { stat: "$500", caption: "To every teacher to set up their classroom" },
  { stat: "12", caption: "Field trips funded" },
]

export default function AboutPTOPage() {
  return (
    <div>
      <PageHeader
        title="What the PTO does"
        subtitle="We fund the extras that make Forest Hills special — the experiences beyond the standard curriculum that enrich our kids' education."
      />

      {/* Category Cards */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {categories.map((category) => (
              <div
                key={category.title}
                className={`${category.color} ${category.borderColor} ${category.rotation} border-2 rounded-2xl p-8 transition-transform hover:scale-[1.02]`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <category.icon className="w-12 h-12 text-foreground/80 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-foreground pt-2">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2.5 ml-1">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground/80">
                      <span className="w-2 h-2 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 lg:py-20 bg-[#D4A437]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-12">
            Our Impact This Year
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {impactStats.map((item) => (
              <div key={item.stat} className="text-center">
                <p className="text-5xl lg:text-6xl font-bold text-primary">
                  {item.stat}
                </p>
                <p className="text-muted-foreground mt-3 text-lg">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Funded */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
            How we&apos;re funded
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
