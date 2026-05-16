import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Calendar, Heart, HelpCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GradeBadgeList } from "@/components/grade-badge"

// Sample upcoming events
const upcomingEvents = [
  {
    date: "Fri 9/19",
    name: "Carnival",
    time: "5–7:30pm",
    grades: ["All"] as const,
  },
  {
    date: "Wed 10/8",
    name: "Falcon Fun Run",
    time: "All day",
    grades: ["All"] as const,
  },
  {
    date: "Mon–Fri 10/27–31",
    name: "Scholastic Book Fair",
    time: "During school",
    grades: ["All"] as const,
  },
  {
    date: "Wed 10/29",
    name: "Halloween Parade",
    time: "2:00pm",
    grades: ["All"] as const,
  },
]

// Navigation tiles
const navTiles = [
  {
    href: "/new-families",
    icon: Sparkles,
    label: "New to Forest Hills",
    description: "Start here. We've got you.",
  },
  {
    href: "/volunteer",
    icon: Heart,
    label: "Volunteer",
    description: "From 1 hour to year-round. Pick what fits.",
  },
  {
    href: "/board",
    icon: Users,
    label: "Meet the Board",
    description: "The parents running this with you.",
  },
  {
    href: "/events",
    icon: Calendar,
    label: "Events",
    description: "What's coming up and what it all means.",
  },
  {
    href: "/pto-vs-losf",
    icon: HelpCircle,
    label: "PTO vs. LOSF",
    description: "Two organizations, two missions. Here's the difference.",
  },
  {
    href: "/future-fh",
    icon: Sparkles,
    label: "Future Forest Hills",
    description: "A new school is coming. Here's what to expect.",
  },
]

// Recent wins
const recentWins = [
  { stat: "$60K+", label: "raised at our 2026 Spring Gala" },
  { stat: "$500", label: "to every teacher to set up their classroom" },
  { stat: "12", label: "field trips funded this year" },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              Forest Hills, together.
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {"At Forest Hills, parents are part of everything — in classrooms, at events, and behind the scenes. There's a place for every family, and every kind of help."}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base group">
                <Link href="/new-families">
                  {"I'm new here"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/about-pto">
                  What we do
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="mt-12 aspect-[16/9] lg:aspect-[21/9] relative rounded-2xl overflow-hidden">
            <Image
              src="/school-building.jpg"
              alt="Forest Hills Elementary School building with brick exterior and trees"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Calendar CTA Strip */}
      <section className="py-10 lg:py-14 bg-[#FFFBF5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              The 2026–27 calendar is here.
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              Twelve months of Forest Hills, all in one place.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="text-base group">
                <Link href="/calendar">
                  See the year
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Bookmark it. We keep it current.
            </p>
          </div>
        </div>
      </section>

      {/* Future FH Banner */}
      <section className="py-4 bg-[#FAF3E0] border-l-4 border-l-primary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <Link 
            href="/future-fh" 
            className="flex items-center justify-center gap-2 text-sm text-foreground hover:text-primary transition-colors group"
          >
            <span>A new Forest Hills is coming. Learn what the rebuild means for your family</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* This Week Strip */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground">
              This week at Forest Hills
            </h2>
            <Link
              href="/calendar"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              See full calendar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="min-w-[280px] lg:min-w-[300px] snap-start flex-shrink-0"
              >
                <CardContent className="p-5">
                  <p className="text-sm font-medium text-primary">{event.date}</p>
                  <h3 className="text-lg font-semibold text-foreground mt-1">
                    {event.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{event.time}</p>
                  <div className="mt-3">
                    <GradeBadgeList grades={event.grades as ("K" | "1" | "2" | "3" | "4" | "5" | "All")[]} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Find What You Need Grid */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-8">
            Find what you need
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {navTiles.map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <tile.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tile.label}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {tile.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Survey Callout */}
      <section className="py-12 lg:py-16 bg-[#1B2A5B]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
              Help shape next year.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {"We're still hearing from parents about what worked, what didn't, and what we should do differently. Your voice matters — even if you're new."}
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="text-base group">
                <a 
                  href="https://us12.list-manage.com/survey?u=f2c68e6bdef7c7f3600d0542a&id=5138905a25&attribution=false"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Take the survey
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {"Takes about 3 minutes. Anonymous if you'd like."}
            </p>
          </div>
        </div>
      </section>

      {/* Recent Wins Strip */}
      <section className="py-12 lg:py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold">
              What we did this year, together
            </h2>
            <Link
              href="/recent-wins"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              See all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recentWins.map((win, index) => (
              <div key={index} className="text-center sm:text-left">
                <p className="text-4xl lg:text-5xl font-bold text-primary">
                  {win.stat}
                </p>
                <p className="text-secondary-foreground/80 mt-2">
                  {win.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
