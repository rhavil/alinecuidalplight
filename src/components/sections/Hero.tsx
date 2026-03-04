"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const mockupRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // S0 - Initial staggered fade in
            gsap.fromTo(
                ".hero-fade",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    delay: 0.2,
                }
            );

            // S1 - Floating Mockup
            if (mockupRef.current) {
                gsap.to(mockupRef.current, {
                    y: -25,
                    duration: 5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            }
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={container}
            className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-32 px-4 md:px-8 lg:px-16"
        >
            {/* Background aurora effect built into globals.css via utility or here */}
            <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none aurora-bg z-0" />

            <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Text Column */}
                <div ref={textRef} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="hero-fade inline-flex items-center rounded-full border border-accent-pearl/20 bg-night-dark/50 px-3 py-1 text-sm text-accent-champagne mb-8 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-accent-sage mr-2 animate-pulse"></span>
                        Dra. Aline Rodrigues
                    </div>

                    <Heading as="h1" className="hero-fade mb-6">
                        Você não está <br className="hidden lg:block" />
                        <span className="text-accent-coral italic font-cormorant font-normal">sozinha nisso.</span>
                    </Heading>

                    <Text variant="lead" className="hero-fade mb-10 max-w-xl text-accent-pearl/90">
                        Orientação pediátrica inteligente, direto no seu WhatsApp. Treinada com o conhecimento da Dra. Aline Rodrigues, disponível 24 horas — especialmente naquelas de madrugada em que o Google assusta e a dúvida bate forte.
                    </Text>

                    <div className="hero-fade flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center lg:items-start text-center lg:text-left">
                        <div className="flex flex-col items-center lg:items-start">
                            <Button size="lg" withWhatsapp>
                                Começar no WhatsApp — é gratuito
                            </Button>
                            <span className="text-xs text-accent-pearl/60 mt-3">
                                Sem cadastro · Sem baixar app · Começa em 30 segundos
                            </span>
                        </div>
                    </div>
                </div>

                {/* Mockup Column */}
                <div className="hero-fade relative flex justify-center lg:justify-end">
                    {/* Abstract Phone Mockup for MVP */}
                    <div
                        ref={mockupRef}
                        className="relative w-[280px] h-[580px] rounded-[40px] border-8 border-night-dark bg-[#E4DCD3] shadow-2xl shadow-accent-coral/10 overflow-hidden flex flex-col"
                    >
                        {/* Phone Notch */}
                        <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                            <div className="w-24 h-5 bg-night-dark rounded-b-xl"></div>
                        </div>

                        {/* WhatsApp Header Fake */}
                        <div className="bg-[#075E54] pt-8 pb-3 px-4 flex items-center text-white">
                            <div className="w-8 h-8 rounded-full bg-white/20 mr-3"></div>
                            <div>
                                <div className="text-sm font-semibold">Aline Cuida</div>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 p-4 flex flex-col space-y-3 bg-[#EAE6DF]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')", opacity: 0.9 }}>
                            <div className="self-end bg-[#DCF8C6] text-[#303030] p-3 rounded-lg rounded-tr-none text-xs max-w-[85%] shadow-sm">
                                Ele tá com 38.5 de febre e não quer mamar desde as 2h. O que eu faço?
                                <div className="text-[9px] text-right mt-1 opacity-50">03:17</div>
                            </div>
                            <div className="self-start bg-white text-[#303030] p-3 rounded-lg rounded-tl-none text-xs max-w-[85%] shadow-sm mt-2">
                                Oi! Entendo a preocupação — vamos avaliar juntas. Ele está muito caidinho ou interage um pouco?
                                <div className="text-[9px] text-right mt-1 opacity-50">03:17</div>
                            </div>
                            <div className="self-end bg-[#DCF8C6] text-[#303030] p-3 rounded-lg rounded-tr-none text-xs max-w-[85%] shadow-sm mt-2">
                                Ele tá molinho, mas chorando alto.
                                <div className="text-[9px] text-right mt-1 opacity-50">03:18</div>
                            </div>
                            <div className="self-start bg-white text-[#303030] p-3 rounded-lg rounded-tl-none text-xs max-w-[85%] shadow-sm mt-2">
                                Choro forte é bom sinal de vitalidade. Vou te orientar passo a passo 💛
                                <div className="text-[9px] text-right mt-1 opacity-50">03:18</div>
                            </div>
                        </div>

                        {/* Input Fake */}
                        <div className="bg-[#F0F0F0] p-2 flex items-center gap-2">
                            <div className="flex-1 bg-white rounded-full h-8 px-3 flex items-center">
                                <div className="w-1 h-3 bg-gray-300 animate-pulse"></div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-[#075E54] flex items-center justify-center">
                                <svg className="w-4 h-4 text-white ml-[-2px]" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Subtle Glow behind mockup */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-coral/20 blur-[100px] rounded-full pointer-events-none -z-10" />
                </div>

            </div>
        </section>
    );
}
