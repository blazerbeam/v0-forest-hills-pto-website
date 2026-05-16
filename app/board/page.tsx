import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"

// Small sparkle accent (matches calendar page design language)
function SparkleAccent({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
    </svg>
  )
}

const boardMembers = [
  {
    name: "Shaun Swensen",
    role: "President",
    description: "Leads the board and represents the PTO.",
    grades: "K, 3rd",
    initials: "SS",
  },
  {
    name: "Jeremy Myrland",
    role: "Vice President",
    description: "Supports the president and steps in as needed.",
    grades: "4th (twins)",
    initials: "JM",
  },
  {
    name: "Brianna O'Gorman",
    role: "Operations Treasurer",
    description: "Manages day-to-day finances and reporting.",
    grades: "4th",
    initials: "BO",
  },
  {
    name: "Kyle Renalds",
    role: "Compliance Treasurer",
    description: "Handles tax filings and financial compliance.",
    grades: "1st",
    initials: "KR",
  },
  {
    name: "Kathryn Kuntz",
    role: "Secretary",
    description: "Keeps records of meetings and votes.",
    grades: "5th",
    initials: "KK",
  },
  {
    name: "Gretchen McClaughry",
    role: "Volunteer Coordinator",
    description: "Connects parents with the right opportunities.",
    grades: "3rd, 5th",
    initials: "GM",
  },
  {
    name: "Iris Ringer",
    role: "Communications",
    description: "Runs the website, social, and Falcon Flash.",
    grades: "4th",
    initials: "IR",
  },
]

export default function BoardPage() {
  return (
    <div>
      <PageHeader
        title="Meet the Board"
        subtitle="The 2026–27 PTO board is made up of parent volunteers who keep things running. We're always happy to hear from you."
      />

      {/* Board Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <div
                key={member.name}
                className="group relative bg-[#FFFBF7] border border-[#E8E0D8] rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Sparkle accent */}
                <SparkleAccent 
                  className={`absolute w-4 h-4 text-primary/30 ${
                    index % 3 === 0 ? 'top-3 right-3' : 
                    index % 3 === 1 ? 'top-4 right-4' : 
                    'top-3 right-5'
                  }`} 
                />
                
                <div className="flex flex-col items-center text-center">
                  {/* Photo placeholder - generous circle */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F5EFE6] to-[#E8DFD3] flex items-center justify-center mb-4 border-2 border-[#E0D5C8]">
                    <span className="text-2xl font-semibold text-[#8B7355]">
                      {member.initials}
                    </span>
                  </div>
                  
                  {/* Name - friendlier, slightly larger */}
                  <h3 className="text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  
                  {/* Role - Falcon red accent */}
                  <p className="text-sm font-semibold text-primary mt-1">
                    {member.role}
                  </p>
                  
                  {/* Description - quieter */}
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* Kids' grades */}
                  <div className="mt-4 pt-4 border-t border-[#E8E0D8] w-full">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Kids&apos; grades:</span> {member.grades}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 lg:py-16 bg-[#FAF7F2] border-y border-[#E8E0D8]">
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
