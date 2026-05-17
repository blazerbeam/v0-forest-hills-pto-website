"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

type Grade = "K" | "1" | "2" | "3" | "4" | "5"

interface Classroom {
  teacher: string
  grade: Grade
  leads: string[]
  helpers?: string[]
}

const classrooms: Classroom[] = [
  // Kindergarten
  { 
    teacher: "Leach", 
    grade: "K", 
    leads: ["Leia Wien"]
  },
  { 
    teacher: "Anderson", 
    grade: "K", 
    leads: ["Kelly Robinson"],
    helpers: ["Taryn Hatchel", "Brynee Fletcher", "Joe Dobbyn", "Carly Lagusis", "Erin Kirkpatrick", "Renee Canazaro", "Becca Kraus"]
  },
  // 1st Grade
  { 
    teacher: "Hertert", 
    grade: "1", 
    leads: ["Katarina Harding"]
  },
  { 
    teacher: "Bengston", 
    grade: "1", 
    leads: ["Caitlin Heitz"],
    helpers: ["Amy Renalds", "Meena Tappouni"]
  },
  // 2nd Grade
  { 
    teacher: "Peterson", 
    grade: "2", 
    leads: ["Jennifer Mozinski"],
    helpers: ["Svetlana Darling", "Jill Cabral Schinn", "Johannes Ruhl"]
  },
  { 
    teacher: "Gabriel", 
    grade: "2", 
    leads: ["Stephanie Knight"],
    helpers: ["Amy Pfieffer", "Erin Kirkpatrick"]
  },
  // 3rd Grade
  { 
    teacher: "Looney", 
    grade: "3", 
    leads: ["Sonal Haladay", "Beth Anteparra-Naujock"]
  },
  { 
    teacher: "Miller", 
    grade: "3", 
    leads: ["Pavni Uberoi"],
    helpers: ["Kelley Smith", "Caitlin Heitz"]
  },
  // 4th Grade
  { 
    teacher: "Bartlett", 
    grade: "4", 
    leads: ["Desi Schlotthauer"],
    helpers: ["Dayna Pulsiphur", "Gretchen McClaughry", "Kelly Smith"]
  },
  { 
    teacher: "Wright", 
    grade: "4", 
    leads: ["Ashleigh Hartkopf"],
    helpers: ["Nandhini Paranjpe", "Stephanie Knight", "Rosh Abernathy", "Erin Alt", "Noelle Redmond", "Lauren deHaan", "Johannes Ruhl", "Claire Lynskey"]
  },
  { 
    teacher: "Finney", 
    grade: "4", 
    leads: ["Kristi Miller"],
    helpers: ["Yassi Iranjpanah", "Rosalyn Kennedy", "Shelby Croteau", "Anna Curtis", "Katie Erickson", "Huidan Lu"]
  },
  // 5th Grade
  { 
    teacher: "Young", 
    grade: "5", 
    leads: ["Taryn Hatchel", "Nicole Woodruff"],
    helpers: ["Malia Acohido", "Lisa Neufield", "Johanna Willis"]
  },
  { 
    teacher: "Pflug", 
    grade: "5", 
    leads: ["Kate Vance"],
    helpers: ["Esther Choo", "Jenni Shawcross"]
  },
  { 
    teacher: "Vaughan", 
    grade: "5", 
    leads: ["Michelle Smigel"]
  },
]

const grades: Grade[] = ["K", "1", "2", "3", "4", "5"]

export default function ClassroomParentsPage() {
  const [selectedGrade, setSelectedGrade] = useState<Grade | "all">("all")

  const filteredClassrooms = selectedGrade === "all"
    ? classrooms
    : classrooms.filter((c) => c.grade === selectedGrade)

  return (
    <div>
      <PageHeader
        title="Classroom Parents"
        subtitle="The parent volunteers who keep each classroom connected."
      />

      {/* Info panel */}
      <section className="pb-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#87A878]/10 rounded-xl px-5 py-4 max-w-xl">
            <p className="text-sm text-muted-foreground">
              This is the 2025–26 list. We&apos;ll update for 2026–27 as parents are confirmed in the fall.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Want to reach a classroom parent? Email the PTO president at{" "}
              <a href="mailto:fhptoprez@gmail.com" className="text-primary hover:underline">
                fhptoprez@gmail.com
              </a>
              {" "}— we&apos;ll connect you.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 border-b border-border sticky top-16 bg-background z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedGrade("all")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                selectedGrade === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              All Grades
            </button>
            {grades.map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                  selectedGrade === grade
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {grade === "K" ? "Kindergarten" : `Grade ${grade}`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Classrooms Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredClassrooms.map((classroom, index) => (
              <Card 
                key={index} 
                className="group transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20"
              >
                <CardContent className="p-6 relative">
                  <ChevronRight className="absolute top-4 right-4 w-5 h-5 text-muted-foreground/30" />
                  
                  {/* Grade tag */}
                  <span className="absolute top-4 right-12 px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                    {classroom.grade === "K" ? "Kinder" : `Grade ${classroom.grade}`}
                  </span>
                  
                  {/* Teacher name */}
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {classroom.teacher}
                  </h3>
                  
                  {/* Lead parent(s) */}
                  <div className="mb-3">
                    <p className="text-sm text-muted-foreground mb-1">
                      {classroom.leads.length > 1 ? "Co-leads" : "Lead"}
                    </p>
                    <p className="font-medium text-foreground">
                      {classroom.leads.join(", ")}
                    </p>
                  </div>
                  
                  {/* Helpers */}
                  {classroom.helpers && classroom.helpers.length > 0 && (
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Also helping: {classroom.helpers.join(", ")}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Classroom Parent */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Want to be a classroom parent?
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Classroom parents coordinate a few events per year and serve as the communication link between the PTO and their classroom. Email{" "}
            <a href="mailto:fhptoprez@gmail.com" className="text-primary hover:underline">
              fhptoprez@gmail.com
            </a>
            {" "}if you&apos;re interested.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/volunteer", label: "Volunteer", description: "Other ways to help" },
          { href: "/board", label: "Meet the Board", description: "PTO leadership" },
          { href: "/events", label: "Events", description: "What's coming up" },
        ]}
      />
    </div>
  )
}
