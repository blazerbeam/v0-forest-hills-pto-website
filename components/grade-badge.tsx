import { cn } from "@/lib/utils"

type Grade = "K" | "1" | "2" | "3" | "4" | "5" | "All"

interface GradeBadgeProps {
  grade: Grade
  className?: string
}

const gradeColors: Record<Grade, string> = {
  K: "bg-amber-100 text-amber-800",
  "1": "bg-sky-100 text-sky-800",
  "2": "bg-emerald-100 text-emerald-800",
  "3": "bg-rose-100 text-rose-800",
  "4": "bg-violet-100 text-violet-800",
  "5": "bg-orange-100 text-orange-800",
  All: "bg-secondary/10 text-secondary",
}

export function GradeBadge({ grade, className }: GradeBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
        gradeColors[grade],
        className
      )}
    >
      {grade === "All" ? "All grades" : `Grade ${grade}`}
    </span>
  )
}

interface GradeBadgeListProps {
  grades: Grade[]
  className?: string
}

export function GradeBadgeList({ grades, className }: GradeBadgeListProps) {
  return (
    <div className={cn("flex flex-wrap gap-1", className)}>
      {grades.map((grade) => (
        <GradeBadge key={grade} grade={grade} />
      ))}
    </div>
  )
}
