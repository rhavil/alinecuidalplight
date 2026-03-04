import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function Heading({
    children,
    className,
    as: Component = "h2",
}: {
    children: React.ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) {
    return (
        <Component
            className={cn(
                "font-fraunces font-medium tracking-tight text-foreground",
                Component === "h1" && "text-5xl md:text-7xl lg:text-8xl",
                Component === "h2" && "text-4xl md:text-5xl lg:text-6xl",
                Component === "h3" && "text-3xl md:text-4xl",
                Component === "h4" && "text-2xl md:text-3xl",
                className
            )}
        >
            {children}
        </Component>
    );
}

export function Text({
    children,
    className,
    variant = "body",
}: {
    children: React.ReactNode;
    className?: string;
    variant?: "body" | "lead" | "caption" | "quote";
}) {
    return (
        <p
            className={cn(
                "font-nunito text-foreground/80 leading-relaxed",
                variant === "lead" && "text-lg md:text-xl",
                variant === "body" && "text-base md:text-lg",
                variant === "caption" && "text-sm md:text-base text-foreground/60",
                variant === "quote" && "font-cormorant italic text-xl md:text-2xl text-accent-champagne/90",
                className
            )}
        >
            {children}
        </p>
    );
}
