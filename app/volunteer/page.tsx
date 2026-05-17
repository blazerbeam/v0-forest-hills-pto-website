import Link from "next/link"
import { Clock, Users, Home, ArrowRight, Mail, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"

const volunteerTypes = [
  {
    icon: Clock,
    title: "One-time event",
    commitment: "1–2 hours",
    description: "Help at a single event like Carnival, Book Fair, or Fun Run. Perfect for first-time volunteers.",
  },
  {
    icon: Users,
    title: "Ongoing committee",
    commitment: "Monthly",
    description: "Join a team that plans and runs programs throughout the year. More involvement, bigger impact.",
  },
  {
    icon: Home,
    title: "From home / remote",
    commitment: "Flexible",
    description: "Help with tasks that can be done remotely — organizing, emailing, or prepping materials.",
  },
]

interface Committee {
  name: string
  description: string
  timeCommitment: string
  chairs: string
  chairTBD?: boolean
}

const ongoingCommittees: Committee[] = [
  {
    name: "Classroom Photographers",
    description: "Capture students at events throughout the year — Fun Run, Halloween Parade, parties, field trips.",
    timeCommitment: "A few hours per month",
    chairs: "TBD — could be you",
    chairTBD: true,
  },
  {
    name: "Yearbook Committee",
    description: "Help organize the yearbook. Tag photos, design layouts, celebrate the year.",
    timeCommitment: "Monthly, more in spring",
    chairs: "Molly Ramsay (and one TBD)",
  },
  {
    name: "Directory Spot",
    description: "Upload and manage data in our directory software. Mostly a fall project, then occasional updates.",
    timeCommitment: "A few hours from home",
    chairs: "Ashley Speer",
  },
  {
    name: "Three Bees Garden",
    description: "Help maintain our school garden. Run Tuesday/Wednesday lunchtime garden club with students.",
    timeCommitment: "About an hour a week",
    chairs: "TBD — could be you",
    chairTBD: true,
  },
  {
    name: "Art Literacy",
    description: "Bring monthly art lessons to your child's classroom. No artistic ability required — training provided.",
    timeCommitment: "2 hours per month",
    chairs: "Inna King, Taryn Hatchell, Johanna Willis, Bridget Thompson",
  },
  {
    name: "Multicultural Committee",
    description: "Help elevate and celebrate the diverse backgrounds within our school community.",
    timeCommitment: "Monthly meetings",
    chairs: "Beth Anteparra, Inna King (TBD)",
  },
  {
    name: "Falcon Community Outreach",
    description: "Promote volunteerism in our students through drives and monthly making clinics for groups like Meals on Wheels and Oregon Humane Society.",
    timeCommitment: "Monthly",
    chairs: "Lauren deHaan, Beth Anteparra-Naujock, Julia Daigneault",
  },
]

const seasonalCommittees: Committee[] = [
  {
    name: "Teacher & Staff Appreciation",
    description: "Each grade level takes a turn organizing appreciation for staff — lunches, treats, gifts. Your grade picks the month, you pick the vibe.",
    timeCommitment: "One month, ~3-4 hours",
    chairs: "TBD (most grades)",
    chairTBD: true,
  },
  {
    name: "Falcon Fun Run",
    description: "Plan and run our biggest fall event. Co-chairs gather sponsors, plan logistics, and coordinate volunteers.",
    timeCommitment: "Heavy in September-October",
    chairs: "Sonal Haladay",
  },
  {
    name: "Fall Book Fair",
    description: "Coordinate our Scholastic Book Fair with the school librarian. 100% of profits benefit our school library.",
    timeCommitment: "1 week in October",
    chairs: "Anna Curtis",
  },
  {
    name: "Holiday Staff Giving Campaign (SCRIP)",
    description: "Organize our November-December holiday giving for staff. Parents donate toward gift cards selected by school staff.",
    timeCommitment: "November-December, ~10 hours total",
    chairs: "Abby Pringle, Kristyn Anthony",
  },
  {
    name: "5th Grade Fundraiser (Wreath Sale)",
    description: "5th graders sell holiday wreaths and poinsettias. Funds the 5th Grade End of Year Celebration.",
    timeCommitment: "October-December, drive-by pickup day in December",
    chairs: "Iris Ringer",
  },
  {
    name: "Talent Showcase",
    description: "Grades 3-5 share their special talents. Help plan, promote, and run this beloved spring event.",
    timeCommitment: "~4 hours",
    chairs: "Pavni Uberoi, Manu Uberoi",
  },
  {
    name: "Art Showcase",
    description: "Help organize an art exhibit alongside the Talent Show. Collect and display student work.",
    timeCommitment: "Under 3 hours",
    chairs: "TBD — could be you",
    chairTBD: true,
  },
  {
    name: "Science Fair",
    description: "Coordinate our evening science fair where students showcase special projects.",
    timeCommitment: "~10 hours leading up to event",
    chairs: "Noelle Redmond",
  },
  {
    name: "OBOB (Oregon Battle of the Books)",
    description: "Support our reading competition team. Co-chairs coordinate practice, motivation, and competition prep.",
    timeCommitment: "Weekly during season",
    chairs: "Julia Daigneault, Bridget Thompson",
  },
  {
    name: "Spring Dance Party (Neon Nights)",
    description: "Help plan our spring 'Neon Nights' family dance party — the student party of the year.",
    timeCommitment: "Several hours leading up to event",
    chairs: "Elizabeth Casimiro, Stephanie Knight",
  },
  {
    name: "Round-up",
    description: "Our every-other-year spring fundraiser. Western-themed with mechanical bulls, cocktails, and BBQ. Confirmed: Friday, May 14, 2027.",
    timeCommitment: "Heavy in spring, large team helpful",
    chairs: "Amy Renalds",
  },
  {
    name: "Field Day",
    description: "Help our PE teacher Ms. McDonald with end-of-year Field Day — the highlight of June for Forest Hills students.",
    timeCommitment: "Day-of and a bit of prep",
    chairs: "Brittany Tanner, Jeny Merrill (both TBD)",
  },
  {
    name: "5th Grade End of Year Celebration",
    description: "Coordinate the 5th grade ceremony, end-of-year festivities, yearbook memory insert, and slideshow.",
    timeCommitment: "Spring, especially May-June",
    chairs: "TBD — could be you",
    chairTBD: true,
  },
  {
    name: "Spiritwear Committee",
    description: "Help launch a spiritwear sale of sweatshirts, tees, and hats.",
    timeCommitment: "A few hours of planning",
    chairs: "Amy Renalds",
  },
  {
    name: "Falcon Mascot",
    description: "Dress as Frankie the Falcon at events — Fun Run, Carnival, Field Day, and more. Multiple volunteers preferred so we can rotate.",
    timeCommitment: "Per-event, an hour or two",
    chairs: "TBD — could be you",
    chairTBD: true,
  },
  {
    name: "Kindergarten Playdates (Summer 2026)",
    description: "Organize late-summer playdates for incoming kindergarteners. Great for existing parents with a kindergartner starting, or current pre-K families.",
    timeCommitment: "A few summer afternoons",
    chairs: "TBD — could be you",
    chairTBD: true,
  },
]

function CommitteeCard({ committee }: { committee: Committee }) {
  const subject = encodeURIComponent(`Volunteer interest: ${committee.name}`)
  
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20">
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground text-lg">
            {committee.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            {committee.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-2.5 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-full">
              {committee.timeCommitment}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            <span className="font-medium text-foreground">
              {committee.chairTBD ? "Chair: " : "Chair(s): "}
            </span>
            <span className={committee.chairTBD ? "text-primary font-medium" : ""}>
              {committee.chairs}
            </span>
          </p>
        </div>
        <a
          href={`mailto:fhptoprez@gmail.com?subject=${subject}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
        >
          Email to join
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </CardContent>
    </Card>
  )
}

export default function VolunteerPage() {
  return (
    <div>
      <PageHeader
        title="Volunteer"
        subtitle="Help in whatever way fits your life. From an hour at an event to year-round committee work — every kind of help matters."
      />

      {/* Intro paragraph */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Forest Hills is 100% volunteer-driven. Whether you have one hour or one year, there&apos;s a way to help. Browse the committees below or email{" "}
            <a href="mailto:fhptoprez@gmail.com" className="text-primary hover:underline">
              fhptoprez@gmail.com
            </a>{" "}
            if nothing fits but you want to get involved anyway.
          </p>
        </div>
      </section>

      {/* Volunteer Types - Entry Point Cards */}
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

      {/* All Committees Section */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            All committees
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Browse our 2026–27 committees below. Some need year-round help, others are tied to specific events.
          </p>

          {/* Section A: Ongoing Committees */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Ongoing committees
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Year-round commitments with regular involvement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ongoingCommittees.map((committee) => (
                <CommitteeCard key={committee.name} committee={committee} />
              ))}
            </div>
          </div>

          {/* Section B: Seasonal & Event Committees */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Seasonal & event committees
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Time-bounded around specific events.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {seasonalCommittees.map((committee) => (
                <CommitteeCard key={committee.name} committee={committee} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Panel */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#D4A437]/10 rounded-2xl p-6 lg:p-8 max-w-2xl">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Don&apos;t see something that fits?
            </h2>
            <p className="text-muted-foreground">
              Email{" "}
              <a href="mailto:fhptoprez@gmail.com" className="text-primary hover:underline">
                fhptoprez@gmail.com
              </a>
              . We almost always have room for new ideas — or just an extra pair of hands.
            </p>
          </div>
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
