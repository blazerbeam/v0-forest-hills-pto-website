import Link from "next/link"
import { ArrowRight, Mail, ChevronRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"

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
    items: "Annual dues, Spring Gala, Fun Run, sponsorships, grants",
  },
]

// SECTION 2 data
const boardMembers = [
  { name: "Shaun Swensen", role: "President", email: "president@fhpto.org" },
  { name: "Jeremy Myrland", role: "Vice President", email: "vp@fhpto.org" },
  { name: "Brianna O'Gorman", role: "Operations Treasurer", email: "treasurer@fhpto.org" },
  { name: "Kyle Renalds", role: "Compliance Treasurer", email: "compliance@fhpto.org" },
  { name: "Kathryn Kuntz", role: "Secretary", email: "secretary@fhpto.org" },
  { name: "Gretchen McClaughry", role: "Volunteer Coordinator", email: "volunteer@fhpto.org" },
  { name: "Iris Ringer", role: "Communications", email: "comms@fhpto.org" },
]

// SECTION 3 data - mini month calendar
const monthColors: Record<string, string> = {
  August: "bg-amber-50 border-amber-200 text-amber-800",
  September: "bg-orange-50 border-orange-200 text-orange-800",
  October: "bg-rose-50 border-rose-200 text-rose-800",
  November: "bg-amber-50 border-amber-200 text-amber-900",
  December: "bg-sky-50 border-sky-200 text-sky-800",
  January: "bg-slate-50 border-slate-200 text-slate-700",
  February: "bg-pink-50 border-pink-200 text-pink-800",
  March: "bg-emerald-50 border-emerald-200 text-emerald-800",
  April: "bg-violet-50 border-violet-200 text-violet-800",
  May: "bg-lime-50 border-lime-200 text-lime-800",
  June: "bg-yellow-50 border-yellow-200 text-yellow-800",
  July: "bg-cyan-50 border-cyan-200 text-cyan-800",
}

const miniCalendar = [
  { month: "August", year: "2026", summary: "Summer break wraps up. Supply drop-off late August." },
  { month: "September", year: "2026", summary: "Back to School Night, Fall Carnival (confirmed: Sept 25)" },
  { month: "October", year: "2026", summary: "Picture Day, Falcon Fun Run, Book Fair, Halloween Parade" },
  { month: "November", year: "2026", summary: "Thanksgiving Food Drive, Wreath Sale" },
  { month: "December", year: "2026", summary: "Winter Class Parties, Wreath pickup" },
  { month: "January", year: "2027", summary: "Hunger Fighters Food Drive" },
  { month: "February", year: "2027", summary: "Friendship Day Parties, Neon Nights Dance, OBOB" },
  { month: "March", year: "2027", summary: "Science Night, OBOB" },
  { month: "April", year: "2027", summary: "Talent Show / Art Showcase" },
  { month: "May", year: "2027", summary: "Spring Gala, Staff Appreciation Week" },
  { month: "June", year: "2027", summary: "Field Day, 5th Grade Graduation, Kinder Graduation" },
  { month: "July", year: "2027", summary: "Summer break" },
]

// SECTION 5 data
const quickFacts = [
  "Over $12K in classroom startup funds last year",
  "Over $60K raised at the 2026 Spring Gala",
  "12 field trips funded last year",
  "501(c)(3) nonprofit — Tax ID 93-0858044",
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

  return (
    <div>
      <PageHeader
        title="At a glance"
        subtitle="The whole PTO, on one page. What we do, who runs it, when things happen, and how to be part of it."
      />

      {/* Meta info */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-foreground">
            Last updated {today}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Looking for something specific? Use the nav above. This page is the quick scan.
          </p>
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

      {/* SECTION 2: Who — Who runs the PTO */}
      <section className="py-10 lg:py-14 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            Who — Who runs the PTO
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {boardMembers.map((member) => (
              <div key={member.email} className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold text-foreground">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-xs text-primary hover:text-primary/80 transition-colors mt-1 inline-block"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Most of the work happens in committees — see the volunteer page for current openings.
          </p>

          <Link
            href="/board"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            See the full board
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 3: When — When things happen */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            When — When things happen
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {miniCalendar.map((m) => (
              <div
                key={m.month}
                className={`rounded-lg border-2 p-3 ${monthColors[m.month]}`}
              >
                <p className="font-semibold text-sm">
                  {m.month} {m.year}
                </p>
                <p className="text-xs mt-1 opacity-80 leading-relaxed">
                  {m.summary}
                </p>
              </div>
            ))}
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

      {/* SECTION 4: How — How it works */}
      <section className="py-10 lg:py-14 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            How — How it works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">How we fund it</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Most of what we do is funded by dues and a handful of community events. The Spring Gala is our biggest fundraiser. The Fall Fun Run is the second largest. Dues and sponsorships round it out.
              </p>
              <Link
                href="/dues"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                About dues
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">How you can help</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Help in whatever way fits your life — even one hour matters. Help from home, help at an event, help in a classroom, or join a committee.
              </p>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Volunteer
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Quick facts */}
      <section className="py-10 lg:py-14 bg-[#D4A437]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            Quick facts
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, i) => (
              <div key={i} className="bg-card rounded-lg p-4 border border-border">
                <p className="text-sm text-foreground">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Want to go deeper? */}
      <section className="py-10 lg:py-14">
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

      {/* Footer reminder */}
      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-foreground text-center">
            This page is meant to be the quick view. For full details, follow the links throughout. Questions? Email{" "}
            <a href="mailto:pto@fhpto.org" className="text-primary hover:underline">
              pto@fhpto.org
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
