"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger, we will simulate DrawSVG using stroke-dashoffset/array since 
// DrawSVG is a premium GreenSock plugin and we are using open-source GSAP here.
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function LinhaViva() {
    const pathRef = useRef<SVGPathElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        // Calculate total length of the SVG path
        const length = path.getTotalLength();

        // Set up the starting positions for drawing
        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        // Animate the stroke as the user scrolls down the page
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5, // 1.5s smoothing effect
            },
        });

        tl.to(path, {
            strokeDashoffset: 0,
            ease: "none",
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="pointer-events-none fixed inset-0 z-0 flex justify-center opacity-30 mix-blend-screen md:opacity-40"
        >
            {/* 
        This is a placeholder long meandering path. 
        In a real scenario, this would be the exact asset from the designer.
        We make it very tall so it covers the whole scrolling experience.
      */}
            <svg
                width="150"
                height="5000"
                viewBox="0 0 150 5000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[5000px] w-auto max-w-full"
            >
                <path
                    ref={pathRef}
                    d="M75,0 
             C75,200 130,300 130,500 
             C130,700 20,800 20,1000
             C20,1200 130,1300 130,1500
             C130,1700 75,1800 75,2000
             C75,2200 20,2300 20,2500
             C20,2700 130,2800 130,3000
             C130,3200 75,3300 75,3500
             C75,3700 20,3800 20,4000
             C20,4200 130,4300 130,4500
             C130,4700 75,4800 75,5000"
                    stroke="var(--color-accent-coral)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-[0_0_8px_rgba(242,140,129,0.6)]"
                />
            </svg>
        </div>
    );
}
