"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heading, Text } from "@/components/ui/Typography";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const chatScript = [
    { sender: "user", text: "Ele tá com 38.5 de febre.", time: "03:17" },
    { sender: "bot", text: "Calma, mãe. Vamos checar o estado geral dele.", time: "03:17" },
    { sender: "user", text: "Ele tá molinho, mas chorando alto.", time: "03:18" },
    { sender: "bot", text: "Choro forte é bom sinal de vitalidade. Dá o antitérmico e vamos monitorar em 30 min.", time: "03:19" },
];

export function Solution() {
    const container = useRef<HTMLDivElement>(null);
    const mockupRef = useRef<HTMLDivElement>(null);
    const messagesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mockupRef.current,
                    start: "top 80%", // Triggers when the top of the mockup hits 80% of viewport
                    end: "+=50%",
                    scrub: false, // We want it to play naturally, not scrubbed
                    toggleActions: "play reverse play reverse"
                },
            });

            // Show mockup
            tl.from(mockupRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Animate messages sequentially
            messagesRef.current.forEach((msg, idx) => {
                if (!msg) return;
                tl.fromTo(msg,
                    {
                        y: 20,
                        opacity: 0,
                        scale: 0.9,
                        transformOrigin: chatScript[idx].sender === 'user' ? "100% 100%" : "0% 0%"
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.4,
                        ease: "back.out(1.7)"
                    },
                    idx > 0 ? "+=0.4" : "-=0.2" // Delay between messages simulating typing
                );
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative py-32 px-4 md:px-8 bg-night-base z-10 flex flex-col items-center">

            <div className="max-w-3xl text-center mb-16">
                <Heading as="h2" className="mb-6">
                    Conhecimento de pediatra. <br className="hidden md:block" /> Disponibilidade que pediatra não tem.
                </Heading>
                <Text variant="lead">
                    A Aline Cuida é uma assistente inteligente treinada exclusivamente com conhecimento pediátrico validado pela Dra. Aline Rodrigues. Não é o Google. Não é um chatbot genérico. É orientação especializada disponível 24 horas por dia, 7 dias por semana — inclusive na madrugada de domingo.
                </Text>
            </div>

            <div className="relative w-full max-w-sm mx-auto">
                {/* Glow Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-sage/10 blur-[120px] rounded-full pointer-events-none -z-10" />

                {/* Mockup WhatsApp */}
                <div
                    ref={mockupRef}
                    className="relative rounded-[40px] border-[12px] border-night-dark bg-white shadow-2xl overflow-hidden flex flex-col h-[600px]"
                >
                    {/* Header */}
                    <div className="bg-[#075E54] pt-8 pb-3 px-4 flex items-center text-white z-10 shadow-md">
                        <div className="w-10 h-10 rounded-full border-2 border-white/20 mr-3 flex items-center justify-center overflow-hidden">
                            <span className="font-semibold text-lg">AC</span>
                        </div>
                        <div>
                            <div className="text-sm font-semibold">Aline Cuida</div>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 p-4 flex flex-col space-y-4 bg-[#EAE6DF] overflow-y-auto pb-8"
                        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}>

                        <div className="w-full text-center my-2">
                            <span className="bg-[#E1F3F5] text-xs px-3 py-1 rounded-lg text-gray-500 shadow-sm border border-gray-200">
                                Hoje
                            </span>
                        </div>

                        {chatScript.map((msg, idx) => (
                            <div
                                key={idx}
                                ref={(el) => {
                                    if (el) messagesRef.current[idx] = el;
                                }}
                                className={`max-w-[80%] p-3 text-sm shadow-sm relative ${msg.sender === "user"
                                    ? "self-end bg-[#DCF8C6] text-[#303030] rounded-2xl rounded-tr-sm"
                                    : "self-start bg-white text-[#303030] rounded-2xl rounded-tl-sm border border-gray-100"
                                    }`}
                            >
                                {msg.text}
                                <div className={`text-[10px] mt-1 text-right ${msg.sender === "user" ? "text-gray-500" : "text-gray-400"}`}>
                                    {msg.time}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Frame */}
                    <div className="bg-[#f0f2f5] p-3 flex items-center gap-2 border-t border-gray-300">
                        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                        <div className="flex-1 bg-white rounded-full h-10 border border-gray-200"></div>
                        <div className="w-10 h-10 rounded-full bg-[#075E54]"></div>
                    </div>

                </div>

                {/* Editorial Elements (Absolute positioned outside mockup) */}
                <div className="hidden lg:block absolute -left-56 top-32 p-4 w-72 rotate-[-4deg] opacity-80 mix-blend-plus-lighter pointer-events-none">
                    <Text variant="caption" className="font-cormorant italic text-accent-lavender text-xl border-b border-accent-lavender/30 pb-2 mb-2">
                        ✦ Direto no WhatsApp
                    </Text>
                    <p className="text-xs text-accent-pearl/70 font-nunito">Sem baixar apps, sem login.</p>
                </div>

                <div className="hidden lg:block absolute -right-52 top-48 p-4 w-64 rotate-[2deg] opacity-80 mix-blend-plus-lighter pointer-events-none">
                    <Text variant="caption" className="font-cormorant italic text-accent-champagne text-xl border-b border-accent-champagne/30 pb-2 mb-2">
                        ✦ Analisa fotos
                    </Text>
                    <p className="text-xs text-accent-pearl/70 font-nunito">Mande a foto e receba orientação.</p>
                </div>

                <div className="hidden md:block absolute -right-32 bottom-20 p-4 w-64 rotate-[4deg] opacity-80 mix-blend-plus-lighter pointer-events-none">
                    <Text variant="caption" className="font-cormorant italic text-accent-sage text-xl border-b border-accent-sage/30 pb-2 mb-2">
                        ✦ Histórico salvo
                    </Text>
                    <p className="text-xs text-accent-pearl/70 font-nunito">Lembra do contexto do seu filho.</p>
                </div>
            </div>
        </section>
    );
}
