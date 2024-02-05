import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center font-bold overflow-hidden group rounded-md transition-all ease-out disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "text-[#ffa347] border border-[#ff8a05] border-solid border-width: 1rem hover:bg-gradient-to-br hover:from-[#ff00c6] hover:via-[#ff5478] hover:to-[#ff8a05] hover:text-white ",
        destructive: "text-white border border-[#ff8a05] hover:bg-gradient-to-br hover:from-[#ff00c6] hover:via-[#ff5478] hover:to-[#ff8a05] hover:text-white ",
        outline: "border border-input bg-background hover:bg-gradient-to-br hover:from-[#ff00c6] hover:via-[#ff5478] hover:to-[#ff8a05] hover:text-white ",
        secondary: "text-white border border-[#ff8a05] hover:bg-gradient-to-br hover:from-[#ff00c6] hover:via-[#ff5478] hover:to-[#ff8a05] hover:text-white ",
        ghost: "hover:bg-gradient-to-br hover:from-[#ff00c6] hover:via-[#ff5478] hover:to-[#ff8a05] hover:text-white ",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-w-[2.5rem] h-10 w-60 px-4 py-2",
        sm: "min-w-[2.5rem] h-9 rounded-md px-3",
        lg: "min-w-[2.5rem] h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
       
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }