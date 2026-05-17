"use client"

import Link from "next/link"
import { ArrowRight, ChevronRight, Printer } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Hand-drawn style SVG icons (from about-pto)
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

// Illustrated icons for "How" section
function PiggyBankIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="28" rx="16" ry="12" fill="currentColor" opacity="0.2" />
      <ellipse cx="24" cy="28" rx="16" ry="12" />
      <circle cx="32" cy="24" r="2" fill="currentColor" />
      <path d="M20 18c0-3 2-6 6-6s6 3 6 6" />
      <path d="M12 32l-4 8" />
      <path d="M36 32l4 8" />
      <path d="M40 26c2 0 4 1 4 3" />
    </svg>
  )
}

function HandsHeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 36s-10-6-10-13c0-4 3-7 6-7 2 0 3 1 4 3 1-2 2-3 4-3 3 0 6 3 6 7 0 7-10 13-10 13z" fill="currentColor" opacity="0.2" />
      <path d="M24 36s-10-6-10-13c0-4 3-7 6-7 2 0 3 1 4 3 1-2 2-3 4-3 3 0 6 3 6 7 0 7-10 13-10 13z" />
      <path d="M8 40c0-4 4-6 8-6h4" />
      <path d="M40 40c0-4-4-6-8-6h-4" />
      <path d="M4 44h12" />
      <path d="M32 44h12" />
    </svg>
  )
}

// Seasonal mini icons for calendar cards
function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" opacity="0.6">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66S8 17 14 17c2 0 4-1 5-3 1-2 1-5-2-6z" />
    </svg>
  )
}

function SnowflakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    </svg>
  )
}

function FlowerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" opacity="0.6">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2a3 3 0 0 0 0 6 3 3 0 0 0 0-6z" />
      <path d="M12 16a3 3 0 0 0 0 6 3 3 0 0 0 0-6z" />
      <path d="M2 12a3 3 0 0 0 6 0 3 3 0 0 0-6 0z" />
      <path d="M16 12a3 3 0 0 0 6 0 3 3 0 0 0-6 0z" />
    </svg>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" opacity="0.6">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

// SECTION 1 data
const whatCategories = [
  {
    icon: PaintbrushIcon,
    title: "Curriculum Enrichment",
    color: "bg-[#E8D5C4]",
    items: "Field trips, art literacy, OBOB, Science Night, assemblies, garden, after-school programs",
  },
  {
    icon: LaptopIcon,
    title: "Technology",
    color: "bg-[#D4E5D7]",
    items: "iPads, Chromebooks, classroom tech, staff training, online directory",
  },
  {
    icon: HeartHandsIcon,
    title: "Community Building",
    color: "bg-[#D6E4EE]",
    items: "Falcon Fest, Fun Run, Carnival, Talent Show, Halloween Parade, class parties, Teacher Appreciation, Yearbook",
  },
  {
    icon: GiftStarIcon,
    title: "Fundraising",
    color: "bg-[#F5E6C8]",
    items: "Annual dues, The Round-up, Fall Fun Run, sponsorships, grants",
  },
]

// SECTION 2 data
const boardMembers = [
  { name: "Shaun Swensen", role: "President" },
  { name: "Jeremy Myrland", role: "Vice President" },
  { name: "Brianna O'Gorman", role: "Operations Treasurer" },
  { name: "Kyle Renalds", role: "Compliance Treasurer" },
  { name: "Kathryn Kuntz", role: "Secretary" },
  { name: "Gretchen McClaughry", role: "Volunteer Coordinator" },
  { name: "Iris Ringer", role: "Communications" },
]

// SECTION 3 data - illustrated mini calendar
const miniCalendar = [
  { month: "August", year: "2026", summary: "Summer break wraps up. Supply drop-off late August.", season: "summer", color: "bg-[#FEF3C7]", borderColor: "border-[#F59E0B]", textColor: "text-[#92400E]" },
  { month: "September", year: "2026", summary: "Back to School Night, Fall Carnival", confirmed: "(confirmed: Sept 25)", season: "fall", color: "bg-[#FFEDD5]", borderColor: "border-[#EA580C]", textColor: "text-[#9A3412]" },
  { month: "October", year: "2026", summary: "Picture Day, Falcon Fun Run, Book Fair, Halloween Parade", season: "fall", color: "bg-[#FEE2E2]", borderColor: "border-[#DC2626]", textColor: "text-[#991B1B]" },
  { month: "November", year: "2026", summary: "Thanksgiving Food Drive, Wreath Sale", season: "fall", color: "bg-[#FEF3C7]", borderColor: "border-[#D97706]", textColor: "text-[#92400E]" },
  { month: "December", year: "2026", summary: "Winter Class Parties, Wreath pickup", season: "winter", color: "bg-[#E0F2FE]", borderColor: "border-[#0EA5E9]", textColor: "text-[#0369A1]" },
  { month: "January", year: "2027", summary: "Hunger Fighters Food Drive", season: "winter", color: "bg-[#F1F5F9]", borderColor: "border-[#64748B]", textColor: "text-[#475569]" },
  { month: "February", year: "2027", summary: "Friendship Day Parties, Neon Nights Dance, OBOB", season: "winter", color: "bg-[#FCE7F3]", borderColor: "border-[#DB2777]", textColor: "text-[#9D174D]" },
  { month: "March", year: "2027", summary: "Science Night, OBOB", season: "spring", color: "bg-[#D1FAE5]", borderColor: "border-[#10B981]", textColor: "text-[#065F46]" },
  { month: "April", year: "2027", summary: "Talent Show / Art Showcase", season: "spring", color: "bg-[#EDE9FE]", borderColor: "border-[#8B5CF6]", textColor: "text-[#5B21B6]" },
  { month: "May", year: "2027", summary: "The Round-up (every-other-year spring fundraiser), Staff Appreciation Week", season: "spring", color: "bg-[#ECFCCB]", borderColor: "border-[#84CC16]", textColor: "text-[#3F6212]" },
  { month: "June", year: "2027", summary: "Field Day, 5th Grade Graduation, Kinder Graduation", season: "summer", color: "bg-[#FEF9C3]", borderColor: "border-[#EAB308]", textColor: "text-[#854D0E]" },
  { month: "July", year: "2027", summary: "Summer break", season: "summer", color: "bg-[#CFFAFE]", borderColor: "border-[#06B6D4]", textColor: "text-[#0E7490]" },
]

function getSeasonIcon(season: string) {
  switch (season) {
    case "fall":
      return LeafIcon
    case "winter":
      return SnowflakeIcon
    case "spring":
      return FlowerIcon
    case "summer":
      return SunIcon
    default:
      return SunIcon
  }
}

// SECTION 5 data
const quickFacts = [
  { stat: "$12K+", caption: "in classroom startup funds last year" },
  { stat: "$60K+", caption: "raised at the 2026 Spring Gala" },
  { stat: "12", caption: "field trips funded last year" },
  { stat: "501(c)(3)", caption: "nonprofit organization — Tax ID 93-0858044" },
]

// SECTION 6 data
const deeperLinks = [
  { href: "/new-families", label: "New Families", description: "Start here if you're new to Forest Hills" },
  { href: "/future-fh", label: "Future FH", description: "The new school being built" },
  { href: "/pto-vs-losf", label: "PTO vs. LOSF", description: "Two organizations, two missions" },
  { href: "/sponsors", label: "Sponsors", description: "Local businesses supporting us" },
  { href: "/resources", label: "Resources", description: "District links every parent needs" },
  { href: "/falcon-flash", label: "Falcon Flash", description: "Past newsletters" },
]

export default function AtAGlancePage() {
  const today = new Date().toLocaleDateString("en-US", { 
    month: "long", 
    day: "numeric", 
    year: "numeric" 
  })

  const handlePrint = () => {
    window.print()
  }

  return (
    <div>
      <PageHeader
        title="At a glance"
        subtitle="The whole PTO, on one page. What we do, who runs it, when things happen, and how to be part of it."
      />

      {/* FIX 5: Meta info panel */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="bg-[#87A878]/8 rounded-xl px-5 py-4 max-w-lg">
              <p className="text-sm text-muted-foreground">
                Last updated {today}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Looking for something specific? Use the nav above. This page is the quick scan.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="print-hide self-start sm:self-center"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print this page
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 1: What — What the PTO does */}
      <section className="py-10 lg:py-14 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            What — What the PTO does
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatCategories.map((cat) => (
              <div
                key={cat.title}
                className={`${cat.color} rounded-xl p-5`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <cat.icon className="w-8 h-8 text-foreground/70 flex-shrink-0" />
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {cat.items}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/about-pto"
            className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            See the full list
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 2: Who — Who runs the PTO (FIX 1 & FIX 6) */}
      <section className="py-10 lg:py-14 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            Who — Who runs the PTO
          </h2>
          
          {/* FIX 6: 4-column grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {boardMembers.map((member) => (
              <div key={member.name} className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold text-foreground">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>

          {/* FIX 1: Contact panel instead of individual emails */}
          <Card className="mt-8 bg-[#87A878]/8 border-[#87A878]/20">
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2">Want to reach the board?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Email the PTO president at{" "}
                <a href="mailto:fhptoprez@gmail.com" className="text-primary hover:underline">
                  fhptoprez@gmail.com
                </a>
                {" "}— it&apos;s the fastest way to get a question to the right person. Most of the work happens in committees, so we&apos;ll route you appropriately.
              </p>
            </CardContent>
          </Card>

          <Link
            href="/board"
            className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            See the full board
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 3: When — When things happen (FIX 2) */}
      <section className="py-10 lg:py-14 print-break-before">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            When — When things happen
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {miniCalendar.map((m) => {
              const SeasonIcon = getSeasonIcon(m.season)
              return (
                <div
                  key={m.month}
                  className={`${m.color} rounded-2xl border-2 ${m.borderColor} p-4 relative overflow-hidden`}
                  style={{ borderRadius: '16px' }}
                >
                  {/* Decorative season icon */}
                  <SeasonIcon className={`absolute top-3 right-3 w-5 h-5 ${m.textColor}`} />
                  
                  {/* Month header banner */}
                  <div className={`${m.textColor} font-bold text-sm mb-2 pb-2 border-b-2 ${m.borderColor} border-dashed`}>
                    {m.month} {m.year}
                  </div>
                  
                  <p className={`text-xs ${m.textColor} leading-relaxed`}>
                    {m.summary}
                    {m.confirmed && (
                      <span className="ml-1 px-1.5 py-0.5 bg-[#87A878] text-white text-xs font-medium rounded-full">
                        {m.confirmed}
                      </span>
                    )}
                  </p>
                </div>
              )
            })}
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            PTO General Meetings — second Wednesday of most months. See calendar for details.
          </p>

          <Link
            href="/calendar"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            See the full calendar
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 4: How — How it works (FIX 4) */}
      <section className="py-10 lg:py-14 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            How — How it works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card">
              <CardContent className="p-6">
                <PiggyBankIcon className="w-12 h-12 text-[#D4A437] mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">How we fund it</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our main fundraisers are the Round-up (a western-themed event with mechanical bulls, cocktails, and BBQ) and the Fall Fun Run. The PTO alternates between the Round-up and a Spring Gala year to year. Annual dues, sponsorships, and smaller events fill in the rest.
                </p>
                <Link
                  href="/dues"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                >
                  About dues
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="p-6">
                <HandsHeartIcon className="w-12 h-12 text-[#C8102E] mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">How you can help</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Help in whatever way fits your life — even one hour matters. Help from home, help at an event, help in a classroom, or join a committee.
                </p>
                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                >
                  Volunteer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5: Quick facts (FIX 3) */}
      <section className="py-12 lg:py-16 bg-[#D4A437]/12">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-8">
            Quick facts
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border text-center">
                <p className="text-3xl lg:text-4xl font-bold text-[#C8102E]">{fact.stat}</p>
                <p className="text-sm text-foreground mt-2 leading-relaxed">{fact.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Want to go deeper? */}
      <section className="py-10 lg:py-14 print-hide">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            Want to go deeper?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {deeperLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary/20 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {link.description}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer reminder (FIX 1: updated email) */}
      <section className="py-8 border-t border-border print-hide">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-foreground text-center">
            This page is meant to be the quick view. For full details, follow the links throughout. Questions? Email{" "}
            <a href="mailto:fhptoprez@gmail.com" className="text-primary hover:underline">
              fhptoprez@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* Print-only footer */}
      <div className="print-only print-footer">
        <p>Forest Hills PTO — fhpto.org</p>
        <p>Questions? fhptoprez@gmail.com</p>
      </div>
    </div>
  )
}
