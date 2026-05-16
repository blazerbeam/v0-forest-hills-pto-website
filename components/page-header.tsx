import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle?: string
  className?: string
  children?: React.ReactNode
}

export function PageHeader({ title, subtitle, className, children }: PageHeaderProps) {
  return (
    <section className={cn("py-12 lg:py-16 border-b border-border", className)}>
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
