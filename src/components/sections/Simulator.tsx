"use client";

import { useState } from "react";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { MessageCircle, Send } from "lucide-react";

export function Simulator() {
    const [step, setStep] = useState<"idle" | "typing" | "answered">("idle");
    const [selectedCase, setSelectedCase] = useState("");

    const simulateResponse = (caseType: string) => {
        setSelectedCase(caseType);
        setStep("typing");
        setTimeout(() => {
            setStep("answered");
        }, 1000);
    };

    return (
        <section className="relative py-24 md:py-32 bg-night-dark z-10 px-4">

            <div className="max-w-4xl mx-auto text-center mb-16">
                <Heading as="h2" className="mb-4 text-accent-pearl">
                    Testa antes de <span className="text-accent-coral font-cormorant italic font-normal">acreditar.</span>
                </Heading>
                <Text className="text-accent-pearl/80">
                    Simulação interativa baseada em casos reais. Escolha uma dúvida e veja como a Aline Cuida responde.
                </Text>
            </div>

            <div className="max-w-2xl mx-auto">
                <Card className="bg-night-base border-white/10 shadow-2xl relative overflow-visible">

                    {/* Animated decorative sprout from Linha Viva */}
                    {step !== "idle" && (
                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-sage rounded-full flex items-center justify-center animate-[bounce_0.5s_ease-out] shadow-[0_0_20px_rgba(168,188,161,0.5)]">
                            <span className="text-night-base text-xl">🌱</span>
                        </div>
                    )}

                    <div className="flex flex-col space-y-4 mb-8">
                        <Text className="font-semibold text-accent-pearl mb-2">Qual é a sua dúvida agora?</Text>

                        <button
                            onClick={() => simulateResponse("febre")}
                            disabled={step !== "idle"}
                            className="group text-left p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-50"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-accent-pearl/90 group-hover:text-white transition-colors">&quot;38.5 de febre e não quer mamar&quot;</span>
                                <Send className="w-4 h-4 text-accent-coral opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </button>

                        <button
                            onClick={() => simulateResponse("colica")}
                            disabled={step !== "idle"}
                            className="group text-left p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-50"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-accent-pearl/90 group-hover:text-white transition-colors">&quot;Choro inconsolável há 2 horas&quot;</span>
                                <Send className="w-4 h-4 text-accent-coral opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </button>
                    </div>

                    {/* Conditional Response Box */}
                    <div className={`transition-all duration-500 overflow-hidden ${step === 'idle' ? 'h-0 opacity-0' : 'h-auto opacity-100 mt-8 pt-6 border-t border-white/10'}`}>
                        <div className="bg-[#DCF8C6]/10 text-accent-pearl p-4 md:p-6 rounded-2xl border border-accent-sage/30 flex gap-4 relative">

                            <div className="mt-1 flex-shrink-0">
                                <div className="w-8 h-8 rounded-full bg-accent-sage flex items-center justify-center">
                                    <span className="font-bold text-night-base text-xs">AC</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-accent-sage mb-1 mt-1">Aline Cuida</p>
                                {step === "typing" ? (
                                    <div className="flex gap-1 h-6 items-center">
                                        <span className="w-1.5 h-1.5 bg-accent-sage rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-accent-sage rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-accent-sage rounded-full animate-bounce"></span>
                                    </div>
                                ) : (
                                    <Text variant="body" className="text-accent-pearl/90 text-[15px] leading-relaxed">
                                        {selectedCase === "febre"
                                            ? "Calma, mãe. Primeiro, vamos checar o estado geral dele. Ele está muito caidinho ou interage um pouco? O choro é forte? Em bebês dessa idade, 38.5°C merece atenção. Vou te orientar passo a passo com base na idade e nos sintomas."
                                            : "O choro longo assusta, mas na maioria das vezes, nessa idade, é cólica. Vamos tentar algumas manobras de alívio que vou te mandar no vídeo abaixo enquanto conversamos."}
                                    </Text>
                                )}
                            </div>
                        </div>

                        {step === "answered" && (
                            <div className="mt-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <button className="flex items-center mx-auto text-sm text-accent-coral font-medium hover:text-accent-champagne transition-colors group">
                                    <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                    Iniciar atendimento real
                                </button>
                            </div>
                        )}
                    </div>

                </Card>
            </div>
        </section>
    );
}
