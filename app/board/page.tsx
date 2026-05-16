import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"

const boardMembers = [
  {
    name: "Shaun Swensen",
    role: "President",
    description: "Leads the board and represents the PTO.",
    grades: "Kindergarten, 3rd grade",
  },
  {
    name: "Jeremy Myrland",
    role: "Vice President",
    description: "Supports the president and steps in as needed.",
    grades: "4th grade twins",
  },
  {
    name: "Brianna O'Gorman",
    role: "Operations Treasurer",
    description: "Manages day-to-day finances and reporting.",
    grades: "4th grade",
  },
  {
    name: "Kyle Renalds",
    role: "Compliance Treasurer",
    description: "Handles tax filings and financial compliance.",
    grades: "1st grade",
  },
  {
    name: "Kathryn Kuntz",
    role: "Secretary",
    description: "Keeps records of meetings and votes.",
    grades: "5th grade",
  },
  {
    name: "Gretchen McClaughry",
    role: "Volunteer Coordinator",
    description: "Connects parents with the right opportunities.",
    grades: "3rd, 5th grade",
  },
  {
    name: "Iris Ringer",
    role: "Communications",
    description: "Runs the website, social, and Falcon Flash.",
    grades: "4th grade",
  },
]

export default function BoardPage() {
  return (
    <div>
      <PageHeader
        title="Meet the Board"
        subtitle="The 2025–26 PTO board is made up of parent volunteers who keep things running. We're always happy to hear from you."
      />

      {/* Board Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Photo placeholder */}
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-semibold text-muted-foreground">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    {member.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Kids:</span> {member.grades}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Want to get in touch?
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Have a question or idea? Reach out to any board member directly or email us at{" "}
            <a href="mailto:pto@foresthillspto.org" className="text-primary hover:underline">
              pto@foresthillspto.org
            </a>
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/volunteer", label: "Volunteer", description: "Find ways to help" },
          { href: "/about-pto", label: "About the PTO", description: "What we do" },
          { href: "/classroom-parents", label: "Classroom Parents", description: "Grade-level contacts" },
        ]}
      />
    </div>
  )
}
