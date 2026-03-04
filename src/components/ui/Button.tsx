"use client";

import * as React from "react";
import { cn } from "./Typography";
import { MessageCircle } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    withWhatsapp?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", withWhatsapp, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    "hover:scale-[1.02] active:scale-[0.98]",
                    // Variants
                    variant === "primary" &&
                    "bg-accent-sage text-night-base hover:shadow-[0_0_20px_rgba(168,188,161,0.4)] hover:bg-[#b5c7ae]",
                    variant === "secondary" &&
                    "bg-night-dark text-accent-pearl border-night-dark border hover:bg-night-dark/80",
                    variant === "outline" &&
                    "border border-accent-pearl/20 text-accent-pearl hover:bg-accent-pearl/10",
                    variant === "ghost" && "hover:bg-accent-pearl/10 text-accent-pearl",
                    // Sizes
                    size === "sm" && "h-9 px-4 text-xs",
                    size === "md" && "h-11 px-6 py-2 text-sm",
                    size === "lg" && "h-14 px-8 text-base",
                    className
                )}
                {...props}
            >
                {withWhatsapp && <MessageCircle className="mr-2 h-5 w-5" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
