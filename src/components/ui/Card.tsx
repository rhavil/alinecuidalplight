import * as React from "react";
import { cn } from "./Typography";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    glass?: boolean;
}

export function Card({ className, glass, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-[20px] md:rounded-[28px] border p-6 md:p-8",
                glass
                    ? "bg-night-dark/30 backdrop-blur-md border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
                    : "bg-night-dark/60 border-accent-pearl/10 shadow-xl",
                className
            )}
            {...props}
        >
            {/* Subtle inner grain for cards */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("flex flex-col space-y-1.5 pb-4", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn("font-fraunces text-2xl font-medium tracking-tight text-accent-pearl", className)}
            {...props}
        />
    );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("text-foreground/80 font-nunito", className)} {...props} />;
}
