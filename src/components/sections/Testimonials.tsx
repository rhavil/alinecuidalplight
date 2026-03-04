"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heading, Text } from "@/components/ui/Typography";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
    { name: "Mariana S.", quote: "No meio de uma crise de choro às 4h da manhã, mandei mensagem e a resposta veio na hora. Me deu o chão que eu precisava. O menino dormiu em meia hora." },
    { name: "Fernanda C.", quote: "Chega de Google. Eu vivia assustada com qualquer sintoma. Ter orientação de confiança na hora foi um divisor de águas na minha maternidade." },
    { name: "Juliana M.", quote: "Mandei uma foto de uma manchinha às 3h da manhã e recebi uma orientação detalhada que me acalmou completamente. Na consulta, o pediatra confirmou tudo." },
    { name: "Carla P.", quote: "O que mais gosto é que lembra do contexto. Não preciso repetir a história inteira toda vez. E tá sempre disponível, sem fila, sem espera." },
];

export function Testimonials() {
    const container = useRef<HTMLDivElement>(null);
    const track = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            if (!track.current || !container.current) return;

            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top top",
                        end: () => `+=${track.current?.scrollWidth}`,
                        pin: true,
                        scrub: 1,
                    }
                });

                tl.to(track.current, {
                    x: () => -(track.current!.scrollWidth - window.innerWidth + 100),
                    ease: "none"
                });
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative h-screen bg-night-base flex items-center overflow-hidden z-10 w-full">

            <div className="absolute top-20 left-4 md:left-12 z-20 pointer-events-none">
                <Heading as="h2" className="text-4xl md:text-6xl">
                    Quem já <br />
                    <span className="text-accent-coral italic font-cormorant font-normal">respirou aliviada</span>
                </Heading>
            </div>

            <div ref={track} className="flex gap-8 pl-4 pr-12 md:pl-20 mt-40 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="w-[300px] md:w-[450px] flex-shrink-0 bg-night-dark/60 border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-xl backdrop-blur-sm relative group snap-center md:snap-align-none"
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />

                        <svg className="w-10 h-10 text-accent-lavender/30 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>

                        <Text variant="body" className="text-accent-pearl/90 italic font-cormorant text-xl md:text-2xl mb-8 leading-relaxed">
                            &quot;{t.quote}&quot;
                        </Text>

                        <Text variant="caption" className="font-bold text-accent-coral tracking-widest uppercase">
                            {t.name}
                        </Text>
                    </div>
                ))}
            </div>

            {/* Edge gradient to fade out left edge text */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-night-base to-transparent z-10 pointer-events-none" />

        </section>
    );
}
