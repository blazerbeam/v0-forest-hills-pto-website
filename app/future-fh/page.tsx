import Link from "next/link"
import { ExternalLink, Building2, MapPin, Clock } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { RelatedLinks } from "@/components/related-links"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "Future Forest Hills | Forest Hills PTO",
  description: "Forest Hills Elementary is being rebuilt as part of the 2025 LO school bond. Learn what the rebuild means for your family.",
}

const whatWeKnow = [
  {
    icon: Building2,
    title: "What's being built",
    description: "A brand new school on the current Forest Hills site. Same neighborhood, same community, new building.",
  },
  {
    icon: MapPin,
    title: "Where we'll be during construction",
    description: "Students and staff will temporarily relocate to the Uplands campus while the new school is built.",
  },
  {
    icon: Clock,
    title: "When",
    description: "Construction bidding begins spring 2026. Stay tuned for the relocation timeline as the district shares it.",
  },
]

const timeline = [
  {
    date: "March 2026",
    title: "75% Construction Documents complete",
    description: "First bid package (abatement and demolition) goes to bid in early April. General contractor pre-qualification underway.",
  },
  {
    date: "February 2026",
    title: "50% Construction Documents complete",
    description: "District reviewing for conformance. Land use review ongoing.",
  },
  {
    date: "December 2025",
    title: "Design Development phase complete",
    description: "Project moves to Construction Document phase.",
  },
  {
    date: "November 2025",
    title: "Design Development nearing completion",
    description: "Land use review submission in preparation.",
  },
  {
    date: "October 2025",
    title: "Stakeholder meetings",
    description: "Feedback from staff, parents, neighbors, and city officials being incorporated into design.",
  },
  {
    date: "September 2025",
    title: "Forest Hills design underway",
    description: "Stakeholder engagement begins.",
  },
]

const faqs = [
  {
    question: "Will my child stay at Forest Hills during construction?",
    answer: "Students and staff will temporarily relocate to the Uplands campus during construction. The Forest Hills community stays together — same teachers, same classmates, different building.",
  },
  {
    question: "When will the move happen?",
    answer: "The exact relocation timing depends on the construction schedule. The district will share specifics as bidding and permitting wrap up. Watch the official district updates and we'll share what we hear.",
  },
  {
    question: "How long will we be at Uplands?",
    answer: "Construction timelines for projects this size typically run 18–24 months, but the district has not published a confirmed return date. We'll update this page as we learn more.",
  },
  {
    question: "What will the new building look like?",
    answer: "The new school is being designed with input from staff, parents, neighbors, and city officials. Renderings and design materials are being released as the project progresses on the official LOSD bond site.",
  },
  {
    question: "Is the project on budget?",
    answer: "The most recent district update noted the project is currently over budget. The district and design team are working through cost reduction strategies during the final construction document phase.",
  },
  {
    question: "How is the PTO supporting this transition?",
    answer: "We're focused on keeping our community connected through the move — events, communication, and helping families navigate the change. If you want to help, the volunteer page is a good place to start.",
  },
  {
    question: "Where do I get official updates?",
    answer: "The Lake Oswego School District publishes monthly project updates and offers a bond bulletin newsletter you can sign up for. Links below.",
  },
]

const relatedLinks = [
  { href: "/about-pto", label: "About the PTO" },
  { href: "/pto-vs-losf", label: "PTO vs. LOSF" },
  { href: "/resources", label: "Resources" },
]

export default function FutureFHPage() {
  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <PageHeader
          title="Future Forest Hills"
          subtitle="We're getting a brand new school. Here's what that means for your family."
        />

        {/* Intro Paragraph */}
        <section className="mt-8 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thanks to the 2025 LO school bond, Forest Hills is being rebuilt — not renovated. 
            The current building, which opened in 1946, will be replaced with a new school on 
            the same site. During construction, students and staff will temporarily relocate 
            to the Uplands campus. We know this raises a lot of questions. Here&apos;s what we know so far.
          </p>
        </section>

        {/* What We Know */}
        <section className="mt-12 lg:mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">What we know</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeKnow.map((item, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-12 lg:mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Timeline so far</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border" />
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div>
                    <p className="text-sm font-medium text-primary">{item.date}</p>
                    <h3 className="text-base font-semibold text-foreground mt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            This timeline is summarized from official LOSD bond project updates. For the most 
            current information, see the{" "}
            <a
              href="https://bond.losdschools.org/projects/forest-hills-elementary/project-updates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              district&apos;s project page
            </a>
            .
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-12 lg:mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Official Updates CTA */}
        <section className="mt-12 lg:mt-16">
          <Card className="bg-secondary text-secondary-foreground">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-semibold mb-2">Get the official updates</h2>
              <p className="text-secondary-foreground/80 mb-6">
                The Lake Oswego School District is the source of truth for all bond project information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
                  <a
                    href="https://bond.losdschools.org/projects/forest-hills-elementary/project-updates"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project updates page
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                  <a
                    href="https://bond.losdschools.org/fs/pages/6456"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign up for Bond Bulletin newsletter
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Links */}
        <section className="mt-12 lg:mt-16">
          <RelatedLinks links={relatedLinks} />
        </section>
      </div>
    </div>
  )
}
