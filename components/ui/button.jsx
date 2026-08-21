import * as React from "react"
import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all outline-none select-none cursor-pointer disabled:pointer-events-none disabled:opacity-50 border border-transparent",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/30",
        outline: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 shadow-sm",
        ghost: "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-2.5 text-sm",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-3 text-base",
        icon: "w-10 h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot.Root : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
