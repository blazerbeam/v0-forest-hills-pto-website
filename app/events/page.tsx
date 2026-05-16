"use client"

import { useState } from "react"
import { CalendarPlus, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"
import { GradeBadgeList } from "@/components/grade-badge"
import { cn } from "@/lib/utils"

type Grade = "K" | "1" | "2" | "3" | "4" | "5" | "All"

interface Event {
  date: string
  name: string
  shortDescription: string
  fullDescription: string
  grades: Grade[]
  category: "community" | "enrichment" | "fundraising"
}

const events: Event[] = [
  {
    date: "Sept 2",
    name: "Coffee with the Principal",
    shortDescription: "Meet Principal Johnson and other parents",
    fullDescription: "An informal gathering to meet our principal, ask questions, and connect with other Forest Hills families. Coffee and pastries provided.",
    grades: ["All"],
    category: "community",
  },
  {
    date: "Sept 10",
    name: "Back to School Night",
    shortDescription: "Visit classrooms and meet teachers",
    fullDescription: "Tour your child's classroom, meet their teacher, and learn about curriculum plans for the year. Childcare not provided.",
    grades: ["All"],
    category: "community",
  },
  {
    date: "Sept 19",
    name: "Carnival",
    shortDescription: "Games, food, and fun for the whole family",
    fullDescription: "Our annual fall carnival features games, prizes, food trucks, and entertainment. A great way to kick off the school year and meet other families.",
    grades: ["All"],
    category: "community",
  },
  {
    date: "Oct 7",
    name: "Picture Day",
    shortDescription: "Individual and class photos",
    fullDescription: "School photos for all students. Order forms will be sent home the week before. Retake day available in November.",
    grades: ["All"],
    category: "community",
  },
  {
    date: "Oct 8",
    name: "Falcon Fun Run",
    shortDescription: "Our biggest fundraiser of the year",
    fullDescription: "Students collect pledges and run laps to raise money for PTO programs. A celebration of fitness and community that funds field trips, technology, and more.",
    grades: ["All"],
    category: "fundraising",
  },
  {
    date: "Oct 27–31",
    name: "Scholastic Book Fair",
    shortDescription: "Books for sale in the library",
    fullDescription: "Browse and purchase books during library hours. A portion of sales supports our school library. Family shopping night on Wednesday.",
    grades: ["All"],
    category: "enrichment",
  },
  {
    date: "Oct 29",
    name: "Halloween Parade",
    shortDescription: "Costume parade around the school",
    fullDescription: "Students parade in their costumes for families to watch. Parade starts at 2pm on the blacktop. Classroom parties follow.",
    grades: ["All"],
    category: "community",
  },
  {
    date: "Jan 22",
    name: "Talent Show",
    shortDescription: "Student performances for families",
    fullDescription: "Watch our talented students perform in the gym. Auditions held in December. All acts welcome — singing, dancing, instruments, comedy, and more.",
    grades: ["All"],
    category: "community",
  },
  {
    date: "Feb 14",
    name: "Friendship Day",
    shortDescription: "Valentine celebrations in classrooms",
    fullDescription: "Classroom parties with card exchanges and treats. Room parents coordinate activities. Sign up to help your child's class celebrate.",
    grades: ["All"],
    category: "community",
  },
  {
    date: "Feb 27",
    name: "Neon Nights Dance",
    shortDescription: "Evening dance party for families",
    fullDescription: "A glow-in-the-dark dance party in the gym. DJ, snacks, and glow accessories. Family event — parents stay with kids.",
    grades: ["All"],
    category: "community",
  },
  {
    date: "Mar 12",
    name: "Science Night",
    shortDescription: "Hands-on science activities",
    fullDescription: "Explore science stations throughout the school. Activities for all ages. Science Fair projects on display in the gym.",
    grades: ["All"],
    category: "enrichment",
  },
  {
    date: "Apr 17",
    name: "Spring Gala",
    shortDescription: "Adults-only fundraiser dinner",
    fullDescription: "Our premier fundraising event featuring dinner, drinks, live and silent auctions, and entertainment. Tickets on sale in March.",
    grades: ["All"],
    category: "fundraising",
  },
  {
    date: "June",
    name: "Field Day",
    shortDescription: "Outdoor games and activities",
    fullDescription: "A day of outdoor games, relay races, and water activities to celebrate the end of the school year. Volunteers needed!",
    grades: ["All"],
    category: "community",
  },
  {
    date: "June",
    name: "5th Grade Graduation",
    shortDescription: "Celebration for graduating 5th graders",
    fullDescription: "A ceremony and reception honoring our 5th graders as they move on to middle school. 5th grade families only.",
    grades: ["5"],
    category: "community",
  },
  {
    date: "June",
    name: "Kindergarten Graduation",
    shortDescription: "Celebration for graduating kindergartners",
    fullDescription: "A special ceremony for our kindergartners completing their first year of school. Kindergarten families only.",
    grades: ["K"],
    category: "community",
  },
]

const recurringPrograms = [
  {
    name: "OBOB (Oregon Battle of the Books)",
    description: "A statewide reading competition. Teams of students read selected books and compete in quiz-style battles.",
  },
  {
    name: "Art Literacy",
    description: "Parent volunteers teach art history and hands-on projects in classrooms monthly.",
  },
  {
    name: "Staff Appreciation",
    description: "Each grade takes a month to organize appreciation activities for teachers and staff.",
  },
]

const grades: Grade[] = ["K", "1", "2", "3", "4", "5", "All"]
const categories = [
  { value: "all", label: "All Events" },
  { value: "community", label: "Community" },
  { value: "enrichment", label: "Enrichment" },
  { value: "fundraising", label: "Fundraising" },
]

function EventCard({ event }: { event: Event }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-primary">{event.date}</p>
            <h3 className="text-lg font-semibold text-foreground mt-1">
              {event.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {event.shortDescription}
            </p>
          </div>
          <Button size="sm" variant="outline" className="flex-shrink-0">
            <CalendarPlus className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
        
        <div className="mt-3 flex items-center gap-3">
          <GradeBadgeList grades={event.grades} />
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            {expanded ? "Less" : "More"}
            <ChevronDown className={cn("w-4 h-4 transition-transform", expanded && "rotate-180")} />
          </button>
        </div>
        
        {expanded && (
          <p className="mt-3 text-sm text-muted-foreground border-t border-border pt-3">
            {event.fullDescription}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export default function EventsPage() {
  const [gradeFilter, setGradeFilter] = useState<Grade | "all">("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  const filteredEvents = events.filter((event) => {
    const gradeMatch = gradeFilter === "all" || event.grades.includes("All") || event.grades.includes(gradeFilter as Grade)
    const categoryMatch = categoryFilter === "all" || event.category === categoryFilter
    return gradeMatch && categoryMatch
  })

  return (
    <div>
      <PageHeader
        title="Events"
        subtitle="Everything happening at Forest Hills this year. Filter by grade or category to find what matters to you."
      />

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-16 bg-background z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {/* Grade Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setGradeFilter("all")}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                  gradeFilter === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                All Grades
              </button>
              {grades.filter(g => g !== "All").map((grade) => (
                <button
                  key={grade}
                  onClick={() => setGradeFilter(grade)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                    gradeFilter === grade
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {grade === "K" ? "K" : grade}
                </button>
              ))}
            </div>
            
            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setCategoryFilter(cat.value)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                    categoryFilter === cat.value
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Recurring Programs */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
            Recurring programs
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            These programs run throughout the year. New to Forest Hills? Here's what you might not know about.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recurringPrograms.map((program) => (
              <Card key={program.name}>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground">{program.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/calendar", label: "Calendar", description: "Month view of all events" },
          { href: "/volunteer", label: "Volunteer", description: "Help at events" },
          { href: "/new-families", label: "New Families", description: "Getting started guide" },
        ]}
      />
    </div>
  )
}
