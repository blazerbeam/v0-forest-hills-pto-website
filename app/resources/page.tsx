import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"

interface ResourceLink {
  title: string
  url: string
  description: string
}

interface ResourceSection {
  heading: string
  links: ResourceLink[]
}

const resourceSections: ResourceSection[] = [
  {
    heading: "Day-to-day",
    links: [
      {
        title: "ParentVUE login",
        url: "https://lo.cesdk12.org/losd/PXP2_Login.aspx",
        description: "Grades, attendance, and student info",
      },
      {
        title: "Daily Schedule",
        url: "https://fh.losdschools.org/about-forest-hills/daily-schedule",
        description: "When the bell rings and when it doesn't",
      },
      {
        title: "Attendance",
        url: "https://fh.losdschools.org/about-forest-hills/attendance",
        description: "Report an absence",
      },
      {
        title: "Calendar",
        url: "https://fh.losdschools.org/calendar",
        description: "Official school calendar",
      },
      {
        title: "Bus Routes",
        url: "https://www.losdschools.org/transportation/bus-routes",
        description: "Find your route and stop",
      },
      {
        title: "Nutrition Services",
        url: "https://www.losdschools.org/nutrition-services",
        description: "School meals and menus",
      },
    ],
  },
  {
    heading: "Getting started",
    links: [
      {
        title: "New Families",
        url: "https://fh.losdschools.org/resources/new-families",
        description: "Enrollment and first-week info from the school",
      },
      {
        title: "School Supply Lists",
        url: "https://fh.losdschools.org/resources/school-supply-lists",
        description: "What to bring on day one",
      },
      {
        title: "Back to School Prep",
        url: "https://fh.losdschools.org/resources/back-to-school-prep",
        description: "Forms, packets, and prep info",
      },
      {
        title: "Register a New Student",
        url: "https://www.losdschools.org/about-losd/registration-transfers/register",
        description: "For families joining LOSD",
      },
      {
        title: "District Volunteer Application",
        url: "https://fh.losdschools.org/resources/volunteer-application",
        description: "Required district background check to volunteer in classrooms",
      },
    ],
  },
  {
    heading: "Health and support",
    links: [
      {
        title: "Nurses",
        url: "https://www.losdschools.org/student-services/nurses",
        description: "Health office and medications",
      },
      {
        title: "Mental Health Resources",
        url: "https://www.losdschools.org/student-services/mental-health-resources",
        description: "Support and counseling services",
      },
      {
        title: "Food Resources",
        url: "https://docs.google.com/document/d/1g7iVTq6fwPEpel_lP-OI__yrHgDCEjwytObTcFuIRf0/edit?usp=sharing",
        description: "Help with food access",
      },
      {
        title: "Fee Waiver or Reduction",
        url: "https://fh.losdschools.org/resources/fee-waiver-or-reduction-form",
        description: "Reduced fees and waivers",
      },
      {
        title: "Student & Family Handbook",
        url: "https://fh.losdschools.org/about-forest-hills/student-family-handbook",
        description: "Policies and guidelines",
      },
    ],
  },
  {
    heading: "Programs and enrichment",
    links: [
      {
        title: "Extended Care",
        url: "https://fh.losdschools.org/programs/extended-care",
        description: "Before and after school care",
      },
      {
        title: "Art Literacy",
        url: "http://lakeoswegoartliteracy.org/",
        description: "Volunteer-led classroom art program",
      },
      {
        title: "Elementary Strings & Orchestra",
        url: "https://www.losdschools.org/community-programs/elementary-strings-orchestra",
        description: "Music program for 4th and 5th",
      },
      {
        title: "Kindergarten Transition Program",
        url: "https://www.losdschools.org/community-programs/kindergarten-transition-program",
        description: "Preparing for the first year",
      },
      {
        title: "Library",
        url: "https://fh.losdschools.org/library",
        description: "School library resources",
      },
    ],
  },
  {
    heading: "Reporting and safety",
    links: [
      {
        title: "Bias Incident Report",
        url: "https://docs.google.com/forms/d/e/1FAIpQLScDNsf-IJ9yjqqwVVlQxzFKdoDu4nmX5wA6Cukc01ZOJGmKLQ/viewform",
        description: "Report a bias-related incident",
      },
      {
        title: "Safe Oregon",
        url: "https://www.safeoregon.com/",
        description: "Anonymous tip line",
      },
      {
        title: "Safety and Security",
        url: "https://www.losdschools.org/safety-and-security",
        description: "District safety information",
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div>
      <PageHeader
        title="Resources"
        subtitle="The links every Forest Hills parent ends up needing. All in one place."
      />

      {/* Resource Sections */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {resourceSections.map((section) => (
              <div key={section.heading}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xl lg:text-2xl font-semibold text-foreground">
                    {section.heading}
                  </h2>
                  <div className="flex-1 h-0.5 bg-[#87A878]/30 rounded-full" />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {section.links.map((link) => (
                    <a
                      key={link.title}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="transition-all duration-200 hover:bg-muted/50 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20 cursor-pointer">
                        <CardContent className="p-4 flex items-center justify-between gap-4">
                          <div className="min-w-0">
                            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {link.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-0.5 truncate">
                              {link.description}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help note */}
      <section className="py-8 lg:py-12 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-foreground text-center">
            Don&apos;t see what you need? Email{" "}
            <a
              href="mailto:fhptoprez@gmail.com"
              className="text-primary hover:underline"
            >
              fhptoprez@gmail.com
            </a>{" "}
            and we&apos;ll either add it or point you to it.
          </p>
        </div>
      </section>
    </div>
  )
}
