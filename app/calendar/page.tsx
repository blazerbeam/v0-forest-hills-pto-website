"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"
import { cn } from "@/lib/utils"

type Grade = "K" | "1" | "2" | "3" | "4" | "5"
type ViewMode = "month" | "list"

const grades: Grade[] = ["K", "1", "2", "3", "4", "5"]

export default function CalendarPage() {
  const [gradeFilter, setGradeFilter] = useState<Grade | "all">("all")
  const [viewMode, setViewMode] = useState<ViewMode>("month")

  return (
    <div>
      <PageHeader
        title="Calendar"
        subtitle="All Forest Hills events and important dates in one place."
      />

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-16 bg-background z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
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
              {grades.map((grade) => (
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
            
            {/* View Toggle */}
            <div className="flex gap-1 bg-muted p-1 rounded-lg">
              <button
                onClick={() => setViewMode("month")}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  viewMode === "month"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Month
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  viewMode === "list"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Embed Placeholder */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-[4/3] lg:aspect-[16/9] bg-muted flex items-center justify-center rounded-xl">
                <div className="text-center px-4">
                  <p className="text-muted-foreground mb-2">
                    {viewMode === "month" ? "Google Calendar (Month View)" : "Google Calendar (List View)"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Calendar embed placeholder — connect your Google Calendar here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Subscribe to the calendar
          </h2>
          <p className="text-muted-foreground max-w-xl mb-4">
            Add our calendar to your Google Calendar, Apple Calendar, or Outlook to stay updated automatically.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              Google Calendar
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              Apple Calendar
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              Outlook
            </a>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/events", label: "Events", description: "Event details and descriptions" },
          { href: "/falcon-flash", label: "Falcon Flash", description: "Weekly newsletter" },
          { href: "/new-families", label: "New Families", description: "Getting started" },
        ]}
      />
    </div>
  )
}
