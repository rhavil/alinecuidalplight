"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heading, Text } from "@/components/ui/Typography";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const doubts = [
    "Mamou pouco... será que tá desidratando?",
    "Choro não para, é cólica ou dor de ouvido?",
    "A febre voltou depois de 3h, posso dar remédio de novo?",
    "Google disse que pode ser grave...",
    "Ligo pro PS agora ou espero amanhecer?",
];

export function Scene0317() {
    const container = useRef<HTMLDivElement>(null);
    const lockscreen = useRef<HTMLDivElement>(null);
    const cardsContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the section and animate cards orbiting/appearing
            if (!container.current || !lockscreen.current || !cardsContainer.current) return;

            const cards = gsap.utils.toArray<HTMLElement>(".doubt-card");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=150%", // Short pin as requested
                    pin: true,
                    scrub: 1,
                },
            });

            // Initial state: cards hidden and scattered
            gsap.set(cards, {
                opacity: 0,
                scale: 0.8,
                filter: "blur(10px)",
            });

            // Animation sequence
            // 1. Lockscreen fades in slightly
            tl.to(lockscreen.current, { scale: 0.95, opacity: 0.8, duration: 1 })

                // 2. Cards fly in randomly but orbit the center
                .to(cards, {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 3,
                    stagger: 0.4,
                    ease: "power2.out",
                    // Randomly scatter them around the lockscreen
                    x: () => gsap.utils.random(-300, 300),
                    y: () => gsap.utils.random(-250, 250),
                    rotation: () => gsap.utils.random(-25, 25),
                }, "<0.5")

                // 3. Dissolve effect as the user leaves the pin
                .to([lockscreen.current, cardsContainer.current], {
                    opacity: 0,
                    y: -100,
                    duration: 1.5,
                    ease: "power1.inOut",
                }, "+=1");

        }, container);

        return () => ctx.revert();
    }, []);
    return (
        <div ref={container} className="relative w-full">
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-night-base/50">

                {/* Background Overlay to dark the scene */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night-base to-transparent pointer-events-none z-0" />

                {/* Center Lockscreen */}
                <div
                    ref={lockscreen}
                    className="relative z-10 flex flex-col items-center justify-center p-8 rounded-3xl"
                >
                    <div className="text-8xl md:text-9xl font-nunito font-light tracking-tighter text-accent-pearl/90 drop-shadow-2xl">
                        03:17
                    </div>
                    <Text variant="caption" className="mt-2 text-accent-pearl/50 uppercase tracking-widest">
                        Sexta-feira, Madrugada
                    </Text>

                    {/* Fake Lockscreen Notification */}
                    <div className="mt-12 w-80 p-4 rounded-[20px] bg-night-dark/60 backdrop-blur-md border border-white/5 shadow-2xl">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-accent-coral/20 flex items-center justify-center">
                                <span className="text-xs text-accent-coral font-bold">A</span>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-accent-pearl">Aline Cuida</div>
                                <div className="text-xs text-accent-pearl/70 line-clamp-2">Você tem uma nova mensagem de orientação.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Doubt Cards Container */}
                <div ref={cardsContainer} className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                    {doubts.map((doubt, index) => (
                        <div
                            key={index}
                            className="doubt-card absolute p-4 w-60 bg-night-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
                        >
                            <p className="text-sm font-nunito text-accent-champagne leading-relaxed">
                                &quot;{doubt}&quot;
                            </p>
                        </div>
                    ))}
                </div>

                {/* Transition Headline */}
                <div className="absolute bottom-12 inset-x-0 w-full z-30 flex justify-center text-center px-4 pointer-events-none">
                    <Heading as="h2" className="text-2xl md:text-3xl lg:text-4xl text-accent-pearl/90 max-w-4xl drop-shadow-2xl font-medium">
                        E se você pudesse mandar uma mensagem e receber orientação de confiança agora?
                    </Heading>
                </div>

            </section>
        </div>
    );
}
