"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heading, Text } from "@/components/ui/Typography";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { MessageCircle, Clock, HeartHandshake } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    {
        title: "1. Salve o número",
        desc: "Adicione a Aline Cuida aos seus contatos do WhatsApp. Sem downloads, sem logins, sem senhas para lembrar na hora do desespero.",
        icon: MessageCircle,
    },
    {
        title: "2. Mande sua dúvida",
        desc: "A qualquer momento. Texto, foto ou áudio — como for mais fácil. Foto do termômetro, da manchinha, da assadura. A Aline Cuida analisa tudo e responde com orientação baseada em evidência.",
        icon: Clock,
    },
    {
        title: "3. Respire aliviada",
        desc: "Com a orientação certa, você sabe exatamente o que fazer — e quando procurar atendimento presencial. Sem pânico, sem 14 abas abertas.",
        icon: HeartHandshake,
    },
];

export function HowItWorks() {
    const container = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            cardsRef.current.forEach((card, idx) => {
                if (!card) return;

                gsap.fromTo(card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section id="como-funciona" ref={container} className="relative py-24 px-4 md:px-8 bg-night-base z-10">

            <div className="max-w-4xl mx-auto text-center mb-20 relative">
                {/* Subtle decorative aurora blob */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent-lavender/10 blur-[80px] rounded-full" />

                <Text className="relative z-10 text-accent-lavender font-semibold tracking-wider uppercase text-sm mb-3">
                    Uma linha direta de cuidado
                </Text>
                <Heading as="h2" className="mb-4 relative z-10 text-4xl">
                    Três passos. <span className="text-accent-lavender italic font-cormorant font-normal">Uma presença.</span>
                </Heading>
                <Text className="relative z-10 text-accent-pearl/80 max-w-2xl mx-auto">
                    Pensada para não adicionar fricção à sua rotina exausta.
                </Text>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">

                {/* Connection Line (Desktop only) */}
                <div className="hidden md:block absolute top-[28%] left-[15%] right-[15%] border-t-[2px] border-dashed border-accent-pearl/10 z-0"></div>

                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        ref={(el) => { if (el) cardsRef.current[idx] = el; }}
                        className="relative z-10 group"
                    >
                        {/* Step Node indicator */}
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-night-dark border border-accent-pearl/20 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:bg-accent-lavender/20 group-hover:border-accent-lavender/40 group-hover:scale-110">
                            <step.icon className="w-6 h-6 text-accent-champagne" />
                            {/* Internal glow pulse */}
                            <div className="absolute inset-0 bg-accent-lavender/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <Card glass className="h-full pt-8 text-center transition-transform duration-300 hover:border-accent-pearl/20 hover:bg-night-dark/40">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-xl text-accent-lavender">{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Text variant="body" className="text-sm md:text-base leading-relaxed">
                                    {step.desc}
                                </Text>
                            </CardContent>
                        </Card>
                    </div>
                ))}

            </div>

        </section>
    );
}
