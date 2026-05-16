"use client"

import { useState } from "react"
import { Search, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"

// Sample newsletter archive
const newsletters = [
  { date: "May 9, 2025", title: "End of Year Celebrations", id: "2025-05-09" },
  { date: "May 2, 2025", title: "Teacher Appreciation Week", id: "2025-05-02" },
  { date: "Apr 25, 2025", title: "Gala Recap & Thank You", id: "2025-04-25" },
  { date: "Apr 18, 2025", title: "Gala Reminder & Field Day Planning", id: "2025-04-18" },
  { date: "Apr 11, 2025", title: "Science Night Highlights", id: "2025-04-11" },
  { date: "Apr 4, 2025", title: "Spring Break Reminders", id: "2025-04-04" },
  { date: "Mar 28, 2025", title: "Science Night Preview", id: "2025-03-28" },
  { date: "Mar 21, 2025", title: "Gala Tickets Now Available", id: "2025-03-21" },
  { date: "Mar 14, 2025", title: "Neon Nights Recap", id: "2025-03-14" },
  { date: "Mar 7, 2025", title: "Friendship Day Photos", id: "2025-03-07" },
  { date: "Feb 28, 2025", title: "Neon Nights Dance This Week", id: "2025-02-28" },
  { date: "Feb 21, 2025", title: "Valentine's Day Recap", id: "2025-02-21" },
]

export default function FalconFlashPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredNewsletters = newsletters.filter((newsletter) =>
    newsletter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    newsletter.date.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <PageHeader
        title="Falcon Flash"
        subtitle="Our weekly newsletter keeps you in the loop on everything happening at Forest Hills. It arrives every Friday."
      />

      {/* Search */}
      <section className="py-6 border-b border-border sticky top-16 bg-background z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search newsletters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Archive List */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            {filteredNewsletters.length === 0 ? (
              <p className="text-muted-foreground">No newsletters found matching your search.</p>
            ) : (
              <div className="space-y-2">
                {filteredNewsletters.map((newsletter) => (
                  <Card key={newsletter.id} className="hover:bg-muted/50 transition-colors">
                    <CardContent className="p-4">
                      <a href="#" className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground truncate">
                            {newsletter.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {newsletter.date}
                          </p>
                        </div>
                        <span className="text-sm text-primary font-medium flex-shrink-0">
                          Read
                        </span>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Not receiving the Falcon Flash?
          </h2>
          <p className="text-muted-foreground max-w-xl">
            The newsletter goes to all families with students enrolled at Forest Hills. If you're not receiving it, check your spam folder or contact the front office to verify your email address.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/calendar", label: "Calendar", description: "All events in one place" },
          { href: "/events", label: "Events", description: "Event details" },
          { href: "/new-families", label: "New Families", description: "Getting started guide" },
        ]}
      />
    </div>
  )
}
