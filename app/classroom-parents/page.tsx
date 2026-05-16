"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"
import { cn } from "@/lib/utils"

type Grade = "K" | "1" | "2" | "3" | "4" | "5"

interface Classroom {
  teacher: string
  grade: Grade
  classroomParent: {
    name: string
    email: string
  }
}

const classrooms: Classroom[] = [
  // Kindergarten
  { teacher: "Mrs. Hertert", grade: "K", classroomParent: { name: "Parent Name", email: "parent@email.com" } },
  { teacher: "Mrs. Bengston", grade: "K", classroomParent: { name: "Parent Name", email: "parent@email.com" } },
  // 1st Grade
  { teacher: "Mrs. Gabriel", grade: "1", classroomParent: { name: "Parent Name", email: "parent@email.com" } },
  { teacher: "Mr. Peterson", grade: "1", classroomParent: { name: "Parent Name", email: "parent@email.com" } },
  // 2nd Grade
  { teacher: "Mrs. Miller", grade: "2", classroomParent: { name: "Parent Name", email: "parent@email.com" } },
  { teacher: "Mrs. Looney", grade: "2", classroomParent: { name: "Parent Name", email: "parent@email.com" } },
  // 3rd Grade
  { teacher: "Mrs. Wright", grade: "3", classroomParent: { name: "Parent Name", email: "parent@email.com" } },
  { teacher: "Mr. Bartlett", grade: "3", classroomParent: { name: "Parent Name", email: "parent@email.com" } },
  // 4th Grade
  { teacher: "Mrs. Finney", grade: "4", classroomParent: { name: "Parent Name", email: "parent@email.com" } },
  { teacher: "Mrs. Young", grade: "4", classroomParent: { name: "Parent Name", email: "parent@email.com" } },
  // 5th Grade
  { teacher: "Mr. Vaughan", grade: "5", classroomParent: { name: "Parent Name", email: "parent@email.com" } },
  { teacher: "Mrs. Pflug", grade: "5", classroomParent: { name: "Parent Name", email: "parent@email.com" } },
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
        subtitle="Each classroom has a parent volunteer who coordinates class parties, volunteer needs, and parent communication."
      />

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
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {classroom.teacher}
                    </h3>
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                      {classroom.grade === "K" ? "Kinder" : `Grade ${classroom.grade}`}
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    {/* Photo placeholder */}
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-accent-foreground">
                        CP
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {classroom.classroomParent.name}
                      </p>
                      <a
                        href={`mailto:${classroom.classroomParent.email}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {classroom.classroomParent.email}
                      </a>
                    </div>
                  </div>
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
            Classroom parents coordinate a few events per year and serve as the communication link between the PTO and their classroom. Contact our Volunteer Coordinator if you're interested.
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
