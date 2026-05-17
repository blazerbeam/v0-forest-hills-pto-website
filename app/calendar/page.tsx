"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { cn } from "@/lib/utils"
import { 
  ChevronDown, 
  ChevronUp, 
  CalendarPlus, 
  Leaf, 
  Snowflake, 
  Sun, 
  Flower2,
  Sparkles
} from "lucide-react"

// Month color palette - children's book illustration style
const monthColors: Record<string, { bg: string; accent: string; text: string }> = {
  August: { bg: "bg-amber-50", accent: "border-amber-300", text: "text-amber-800" },
  September: { bg: "bg-orange-50", accent: "border-orange-300", text: "text-orange-800" },
  October: { bg: "bg-rose-50", accent: "border-rose-300", text: "text-rose-800" },
  November: { bg: "bg-amber-50", accent: "border-amber-400", text: "text-amber-900" },
  December: { bg: "bg-sky-50", accent: "border-sky-300", text: "text-sky-800" },
  January: { bg: "bg-slate-50", accent: "border-slate-300", text: "text-slate-700" },
  February: { bg: "bg-pink-50", accent: "border-pink-300", text: "text-pink-800" },
  March: { bg: "bg-emerald-50", accent: "border-emerald-300", text: "text-emerald-800" },
  April: { bg: "bg-violet-50", accent: "border-violet-300", text: "text-violet-800" },
  May: { bg: "bg-lime-50", accent: "border-lime-400", text: "text-lime-800" },
  June: { bg: "bg-yellow-50", accent: "border-yellow-400", text: "text-yellow-800" },
  July: { bg: "bg-cyan-50", accent: "border-cyan-300", text: "text-cyan-800" },
}

// Season icons
const getSeasonIcon = (month: string) => {
  if (["September", "October", "November"].includes(month)) return Leaf
  if (["December", "January", "February"].includes(month)) return Snowflake
  if (["March", "April", "May"].includes(month)) return Flower2
  return Sun
}

// Year at a glance data
const yearAtGlance = [
  {
    month: "August",
    year: "2026",
    events: ["Enjoy the last few weeks of summer!", "Supply drop off and meet your teacher popsicle party — date TBD"],
  },
  {
    month: "September",
    year: "2026",
    events: ["Coffee with the Principal", "Back to School Night", "Fall Carnival (confirmed: Sept 25)", "Staff Appreciation kickoff", "Community Outreach card-making"],
  },
  {
    month: "October",
    year: "2026",
    events: ["School Picture Day", "Falcon Fun Run", "Scholastic Book Fair", "Halloween Parade"],
  },
  {
    month: "November",
    year: "2026",
    events: ["Hope Church Thanksgiving Food Drive", "5th Grade Wreath Sale orders due", "Staff Appreciation – 4th Grade"],
  },
  {
    month: "December",
    year: "2026",
    events: ["Winter Class Parties", "Wreath pickup", "SCRIP Staff Holiday Giving"],
  },
  {
    month: "January",
    year: "2027",
    events: ["Community Outreach Hunger Fighters Food Drive", "Staff Appreciation – 3rd Grade"],
  },
  {
    month: "February",
    year: "2027",
    events: ["Friendship Day Parties", "Neon Nights Dance Party", "OBOB", "Staff Appreciation – 2nd Grade"],
  },
  {
    month: "March",
    year: "2027",
    events: ["Science Night", "OBOB", "Staff Appreciation – 1st Grade"],
  },
  {
    month: "April",
    year: "2027",
    events: ["Talent Show / Art Showcase", "Staff Appreciation – Kinder"],
  },
  {
    month: "May",
    year: "2027",
    events: ["Fundraising Gala", "Staff Appreciation Week (parent led)"],
  },
  {
    month: "June",
    year: "2027",
    events: ["Field Day", "5th Grade Field Trip", "5th Grade Graduation", "Kinder Graduation", "End of Year Class Parties"],
  },
  {
    month: "July",
    year: "2027",
    events: ["Summer break — see you in August!"],
  },
]

// PTO Meeting dates
const ptoMeetings = [
  { month: "September", date: "Wed 9/9 @ 8:30am" },
  { month: "October", date: "Wed 10/14 @ 7pm" },
  { month: "November", date: "Wed 11/11 @ 8:30am" },
  { month: "December", date: "No meeting" },
  { month: "January", date: "Wed 1/13 @ 8:30am" },
  { month: "February", date: "Wed 2/10 @ 7pm" },
  { month: "March", date: "Wed 3/10 @ 8:30am" },
  { month: "April", date: "Wed 4/14 @ 7pm" },
  { month: "May", date: "Wed 5/12 @ 8:30am" },
]

// Seed events for Section 2
type EventCategory = "PTO" | "School" | "District" | "Community"
type Grade = "K" | "1" | "2" | "3" | "4" | "5" | "All"

interface CalendarEvent {
  id: string
  date: string
  dateEnd?: string
  dayOfWeek: string
  name: string
  time: string
  location: string
  description: string
  grades: Grade[]
  category: EventCategory
  recentlyUpdated?: boolean
  confirmed?: boolean
  details?: string
}

const seedEvents: CalendarEvent[] = [
  {
    id: "1",
    date: "Aug 27, 2026",
    dayOfWeek: "Thu",
    name: "Supply Drop-off + Meet Your Teacher Popsicle Party",
    time: "2:30–3:30pm",
    location: "At school",
    description: "Drop off supplies and meet your teacher before school starts.",
    grades: ["All"],
    category: "PTO",
    recentlyUpdated: true,
    details: "Bring your school supplies to your classroom and enjoy a popsicle while meeting your teacher and classmates. A great way to ease first-day jitters!",
  },
  {
    id: "2",
    date: "Sep 9, 2026",
    dayOfWeek: "Wed",
    name: "PTO General Meeting",
    time: "8:30–9:30am",
    location: "Forest Hills Library",
    description: "Monthly PTO meeting — all parents welcome.",
    grades: ["All"],
    category: "PTO",
    details: "Join us for our first meeting of the year. We'll go over the calendar, introduce the board, and discuss volunteer opportunities.",
  },
  {
    id: "3",
    date: "Sep 25, 2026",
    dayOfWeek: "Fri",
    name: "Fall Carnival",
    time: "5:00–7:30pm",
    location: "Forest Hills playground",
    description: "Games, food, and fun for the whole family.",
    grades: ["All"],
    category: "PTO",
    confirmed: true,
    details: "Our biggest fall event! Carnival games, bounce houses, face painting, food trucks, and more. Volunteers needed — sign up on the volunteer page.",
  },
  {
    id: "4",
    date: "Oct 6, 2026",
    dayOfWeek: "Tue",
    name: "School Picture Day",
    time: "During school",
    location: "At school",
    description: "Individual and class photos.",
    grades: ["All"],
    category: "School",
    details: "Individual portraits and class photos. Order forms will be sent home the week before.",
  },
  {
    id: "5",
    date: "Oct 7, 2026",
    dayOfWeek: "Wed",
    name: "Falcon Fun Run",
    time: "During school",
    location: "At school",
    description: "Our biggest fundraiser of the year!",
    grades: ["All"],
    category: "PTO",
    recentlyUpdated: true,
    details: "Students run laps while family and friends pledge donations. Includes music, prizes, and lots of encouragement. Parent volunteers welcome to cheer along the track.",
  },
  {
    id: "6",
    date: "Oct 26, 2026",
    dateEnd: "Oct 30, 2026",
    dayOfWeek: "Mon–Fri",
    name: "Scholastic Book Fair",
    time: "During school",
    location: "Forest Hills Library",
    description: "Books, books, and more books.",
    grades: ["All"],
    category: "PTO",
    details: "Browse hundreds of titles. Students visit during the school day; families are welcome before and after school. Proceeds support the library.",
  },
  {
    id: "7",
    date: "Oct 30, 2026",
    dayOfWeek: "Fri",
    name: "Halloween Parade",
    time: "2:00pm",
    location: "Front of school",
    description: "Costumes encouraged!",
    grades: ["All"],
    category: "PTO",
    details: "Students parade in costume around the school. Parents and families are welcome to watch from the sidewalk.",
  },
]

type ViewMode = "list" | "month"

export default function CalendarPage() {
  const [gradeFilter, setGradeFilter] = useState<Grade | "all">("all")
  const [categoryFilter, setCategoryFilter] = useState<EventCategory | "all">("all")
  const [viewMode, setViewMode] = useState<ViewMode>("list")
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set())

  const grades: Grade[] = ["K", "1", "2", "3", "4", "5"]
  const categories: EventCategory[] = ["PTO", "School", "District", "Community"]

  const toggleExpanded = (eventId: string) => {
    setExpandedEvents(prev => {
      const next = new Set(prev)
      if (next.has(eventId)) {
        next.delete(eventId)
      } else {
        next.add(eventId)
      }
      return next
    })
  }

  const filteredEvents = seedEvents.filter(event => {
    const gradeMatch = gradeFilter === "all" || event.grades.includes("All") || event.grades.includes(gradeFilter as Grade)
    const categoryMatch = categoryFilter === "all" || event.category === categoryFilter
    return gradeMatch && categoryMatch
  })

  return (
    <div>
      <PageHeader
        title="Calendar"
        subtitle="All Forest Hills events and important dates in one place."
      />

      {/* SECTION 0: Disclaimer Banner */}
      <section className="py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#FEF9E7] border border-amber-200 rounded-xl p-4 lg:p-5">
            <p className="text-amber-900 text-sm lg:text-base leading-relaxed">
              <strong>Heads up</strong> — these are estimated dates for the 2026–27 school year, based on last year&apos;s calendar pattern. The board will confirm final dates by August 2026. We&apos;ll update this page as things are finalized.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: The Year at a Glance */}
      <section className="py-12 lg:py-16 bg-[#FFFBF5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              The year at a glance
            </h2>
            <p className="text-sm text-muted-foreground">
              Last updated May 15, 2026
            </p>
          </div>

          {/* 12 Month Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {yearAtGlance.map((monthData, index) => {
              const colors = monthColors[monthData.month]
              const SeasonIcon = getSeasonIcon(monthData.month)
              // Slight rotation for hand-placed feel
              const rotations = ["-0.5deg", "0.3deg", "-0.2deg", "0.5deg", "-0.3deg", "0.2deg"]
              const rotation = rotations[index % rotations.length]
              
              return (
                <div
                  key={monthData.month}
                  className={cn(
                    "rounded-2xl border-2 overflow-hidden transition-transform hover:scale-[1.02]",
                    colors.bg,
                    colors.accent
                  )}
                  style={{ transform: `rotate(${rotation})` }}
                >
                  {/* Month Header */}
                  <div className={cn(
                    "px-4 py-3 border-b-2 flex items-center justify-between",
                    colors.accent
                  )}>
                    <h3 className={cn("font-bold text-lg", colors.text)}>
                      {monthData.month} {monthData.year}
                    </h3>
                    <SeasonIcon className={cn("w-5 h-5", colors.text)} />
                  </div>
                  
                  {/* Events List */}
                  <div className="p-4">
                    <ul className="space-y-2">
                      {monthData.events.map((event, eventIndex) => (
                        <li 
                          key={eventIndex}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", colors.text.replace("text-", "bg-"))} />
                          <span>{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* PTO General Meetings Panel */}
          <div className="mt-10 bg-white rounded-2xl border-2 border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg text-foreground">
                PTO General Meetings
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Held in the Forest Hills Library. All parents welcome!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {ptoMeetings.map((meeting) => (
                <div 
                  key={meeting.month}
                  className="bg-slate-50 rounded-lg px-3 py-2 text-center"
                >
                  <p className="font-medium text-sm text-foreground">{meeting.month}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{meeting.date}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">
              (Dates are estimates for 2026–27 to be confirmed)
            </p>
          </div>

          {/* Disclaimer note */}
          <p className="text-sm text-muted-foreground mt-6 text-center">
            Events, dates, and speakers are tentative. Detailed info will be shared as events are finalized.
          </p>
        </div>
      </section>

      {/* SECTION 2: Find Your Next Event */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Find your next event
            </h2>
            
            {/* View Toggle */}
            <div className="flex gap-1 bg-muted p-1 rounded-lg w-fit">
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  viewMode === "list"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                List view
              </button>
              <button
                onClick={() => setViewMode("month")}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  viewMode === "month"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Month view
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            {/* Grade Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground py-1.5">Grade:</span>
              <button
                onClick={() => setGradeFilter("all")}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  gradeFilter === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                All
              </button>
              {grades.map((grade) => (
                <button
                  key={grade}
                  onClick={() => setGradeFilter(grade)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                    gradeFilter === grade
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {grade}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground py-1.5">Type:</span>
              <button
                onClick={() => setCategoryFilter("all")}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  categoryFilter === "all"
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCategoryFilter(category)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                    categoryFilter === category
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Event List */}
          {viewMode === "list" ? (
            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-5">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        {/* Date Column */}
                        <div className="lg:w-32 flex-shrink-0">
                          <p className="font-bold text-primary text-sm">
                            {event.dateEnd ? `${event.date.split(",")[0]}–${event.dateEnd.split(",")[0].split(" ")[1]}` : event.date.split(",")[0]}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {event.dayOfWeek}
                          </p>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 flex-wrap">
                            <h3 className="font-semibold text-foreground">
                              {event.name}
                            </h3>
                            {event.confirmed && (
                              <span className="px-2 py-0.5 bg-[#87A878] text-white text-xs font-medium rounded-full">
                                Confirmed
                              </span>
                            )}
                            {event.recentlyUpdated && (
                              <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                                Recently updated
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                            <span>{event.time}</span>
                            <span>{event.location}</span>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mt-2">
                            {event.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-2 mt-3">
                            {event.grades.map((grade) => (
                              <span
                                key={grade}
                                className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded"
                              >
                                {grade === "All" ? "All grades" : `Grade ${grade}`}
                              </span>
                            ))}
                            <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs font-medium rounded">
                              {event.category}
                            </span>
                          </div>

                          {/* Expandable Details */}
                          {event.details && (
                            <div className="mt-4">
                              <button
                                onClick={() => toggleExpanded(event.id)}
                                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                              >
                                {expandedEvents.has(event.id) ? (
                                  <>
                                    <ChevronUp className="w-4 h-4" />
                                    Hide details
                                  </>
                                ) : (
                                  <>
                                    <ChevronDown className="w-4 h-4" />
                                    More details
                                  </>
                                )}
                              </button>
                              
                              {expandedEvents.has(event.id) && (
                                <div className="mt-3 p-4 bg-muted/50 rounded-lg">
                                  <p className="text-sm text-foreground leading-relaxed">
                                    {event.details}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Add to Calendar */}
                        <div className="lg:w-auto flex-shrink-0">
                          <Button variant="outline" size="sm" asChild>
                            <a href="#">
                              <CalendarPlus className="w-4 h-4 mr-2" />
                              Add to calendar
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No events match your filters. Try adjusting your selection.
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Month View Placeholder */
            <Card>
              <CardContent className="p-0">
                <div className="aspect-[4/3] lg:aspect-[16/9] bg-muted flex items-center justify-center rounded-xl">
                  <div className="text-center px-4">
                    <p className="text-muted-foreground mb-2">
                      Month View
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Calendar month view coming soon
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* SECTION 3: Dates Change Footer */}
      <section className="py-8 lg:py-10 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h3 className="font-semibold text-foreground mb-2">
              Heads up — dates change.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Schedules shift. When something on this calendar changes, we&apos;ll mark it &quot;Recently updated&quot; and post about it in the Falcon Flash. We aim to keep this page the single source of truth — if you see something that doesn&apos;t match what you heard, please email us at{" "}
              <a href="mailto:pto@fhpto.org" className="text-primary hover:underline">
                pto@fhpto.org
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
