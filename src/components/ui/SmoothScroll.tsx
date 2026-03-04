"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<any>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    useEffect(() => {
        // Tie Lenis scroll events to ScrollTrigger updates
        if (lenisRef.current?.lenis) {
            lenisRef.current.lenis.on('scroll', ScrollTrigger.update);
        }
    }, [lenisRef.current?.lenis]);


    return (
        <ReactLenis
            ref={lenisRef}
            root
            options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}
            autoRaf={false}
        >
            {children}
        </ReactLenis>
    );
}
