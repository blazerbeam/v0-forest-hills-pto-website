import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"

// Small decorative star
function StarAccent({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
    </svg>
  )
}

const boardMembers = [
  {
    name: "Shaun",
    role: "President",
    description: "Leads the board and represents the PTO.",
    grades: "K, 3rd",
    gradient: "from-[#1B2A5B] to-[#87A878]", // navy to sage
    pillBg: "bg-primary",
  },
  {
    name: "Jeremy",
    role: "Vice President",
    description: "Supports the president and steps in as needed.",
    grades: "4th (twins)",
    gradient: "from-[#C8102E] to-[#D4A437]", // red to gold
    pillBg: "bg-secondary",
  },
  {
    name: "Brianna",
    role: "Operations Treasurer",
    description: "Manages day-to-day finances and reporting.",
    grades: "4th",
    gradient: "from-[#87A878] to-[#D4A437]", // sage to gold
    pillBg: "bg-primary",
  },
  {
    name: "Kyle",
    role: "Compliance Treasurer",
    description: "Handles tax filings and financial compliance.",
    grades: "1st",
    gradient: "from-[#1B2A5B] to-[#FFFBF7]", // navy to warm cream
    pillBg: "bg-secondary",
  },
  {
    name: "Kathryn",
    role: "Secretary",
    description: "Keeps records of meetings and votes.",
    grades: "5th",
    gradient: "from-[#D4A437] to-[#87A878]", // gold to sage
    pillBg: "bg-primary",
  },
  {
    name: "Gretchen",
    role: "Volunteer Coordinator",
    description: "Connects parents with the right opportunities.",
    grades: "3rd, 5th",
    gradient: "from-[#87A878] to-[#1B2A5B]", // sage to navy
    pillBg: "bg-secondary",
  },
  {
    name: "Iris",
    role: "Communications",
    description: "Runs the website, social, and Falcon Flash.",
    grades: "4th",
    gradient: "from-[#C8102E] to-[#1B2A5B]", // red to navy
    pillBg: "bg-primary",
  },
]

// Stagger offsets for visual interest
const staggerOffsets = [0, 20, 8, 24, 12, 4, 16]

export default function BoardPage() {
  return (
    <div>
      <PageHeader
        title="Meet the Board"
        subtitle="The 2026–27 PTO board is made up of parent volunteers who keep things running. We're always happy to hear from you."
      />

      {/* Headshot note */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-foreground italic">
            Real headshots coming soon — for now, our colors stand in.
          </p>
        </div>
      </section>

      {/* Board Grid */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {boardMembers.map((member, index) => (
              <div
                key={member.name}
                className="group relative"
                style={{ 
                  marginTop: `${staggerOffsets[index % staggerOffsets.length]}px` 
                }}
              >
                {/* Card */}
                <div className="bg-card border border-border rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Photo area - top 2/3 with gradient */}
                  <div className={`relative h-48 bg-gradient-to-br ${member.gradient} opacity-90`}>
                    {/* Decorative star */}
                    <StarAccent 
                      className={`absolute w-5 h-5 text-white/30 ${
                        index % 3 === 0 ? 'top-4 right-4' : 
                        index % 3 === 1 ? 'top-5 left-5' : 
                        'bottom-16 right-6'
                      }`} 
                    />
                    
                    {/* Name + Role pill - floating at bottom of photo area */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-1/2">
                      <div className={`${member.pillBg} text-white px-5 py-2 rounded-full shadow-lg`}>
                        <span className="font-semibold">{member.name}</span>
                        <span className="mx-2 opacity-60">·</span>
                        <span className="font-normal">{member.role}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content area - bottom 1/3 */}
                  <div className="pt-8 pb-6 px-6 text-center">
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                    
                    {/* Kids' grades */}
                    <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
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
      <section className="py-12 lg:py-16 bg-[#87A878]/8 border-y border-[#87A878]/20">
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
