import { cn } from "../../lib/utils"

export function Avatar({ className, children, ...props }) {
  return (
    <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props}>
      {children}
    </div>
  )
}

