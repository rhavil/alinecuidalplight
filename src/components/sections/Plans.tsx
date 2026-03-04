"use client";

import { useState } from "react";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const plans = [
    {
        title: "Gratuito — Para Sempre",
        price: "R$ 0",
        period: "/mês",
        description: "Para quem quer começar a cuidar com ciência agora mesmo.",
        features: [
            "Chat pediátrico 24h via WhatsApp",
            "Orientações baseadas em evidência científica",
            "Triagem inteligente de urgências",
            "Análise de fotos",
            "Limite de interações mensais",
        ],
        buttonText: "Começar agora — é grátis",
        recommended: false,
    },
    {
        title: "Premium — Acompanhamento Completo",
        price: "R$ [X]",
        period: "/mês",
        description: "Para quem quer acompanhamento de verdade em cada fase do filho.",
        features: [
            "Tudo do plano gratuito",
            "Chat ilimitado — sem limite de mensagens",
            "Acompanhamento de desenvolvimento",
            "Histórico completo salvo e acessível",
            "Acesso antecipado a novas funcionalidades",
            "Respostas e suporte prioritário",
        ],
        buttonText: "Quero acompanhamento completo",
        recommended: true,
    }
];

export function Plans() {
    return (
        <section id="planos" className="relative py-32 px-4 md:px-8 bg-night-base z-10 w-full overflow-hidden">

            {/* Aurora glow specific for plans */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-accent-sage/10 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-4xl mx-auto text-center mb-16">
                <Heading as="h2" className="mb-4">
                    Escolha o seu <span className="text-accent-sage italic font-cormorant font-normal">plano de paz.</span>
                </Heading>
                <Text>Comece hoje o acompanhamento pediátrico que cabe na palma da sua mão.</Text>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
                {plans.map((plan, idx) => {
                    // Determine if we should show based on toggle for Monthly vs Annual pricing logic
                    // Note: In a real scenario, the toggle might just change the price numbers, but here we show two distinct cards for layout robustness
                    const isHighlighted = plan.recommended;

                    return (
                        <Card
                            key={idx}
                            className={`relative overflow-hidden transition-all duration-500 h-full flex flex-col ${isHighlighted
                                ? 'border-accent-sage/50 bg-night-dark/80 scale-100 md:scale-105 shadow-[0_0_50px_rgba(168,188,161,0.15)] z-20'
                                : 'border-white/10 bg-night-dark/40 scale-100 z-10 hover:border-white/20'
                                }`}
                        >
                            {isHighlighted && (
                                <div className="absolute top-0 inset-x-0 bg-accent-sage/20 py-1.5 text-center text-xs font-bold text-accent-sage uppercase tracking-widest border-b border-accent-sage/30">
                                    Mais escolhido
                                </div>
                            )}

                            <div className={`p-8 md:p-10 flex-1 flex flex-col ${isHighlighted ? 'mt-4' : ''}`}>
                                <h3 className="text-2xl font-fraunces font-medium text-accent-pearl mb-2">{plan.title}</h3>
                                <Text variant="caption" className="mb-6 min-h-[48px]">{plan.description}</Text>

                                <div className="mb-8 flex items-baseline gap-1">
                                    <span className="text-5xl font-nunito font-light tracking-tighter text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-accent-pearl/50">{plan.period}</span>
                                </div>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex font-nunito text-accent-pearl/90 text-sm">
                                            <svg className="w-5 h-5 text-accent-sage mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={isHighlighted ? 'primary' : 'outline'}
                                    className={`w-full ${isHighlighted && 'bg-accent-sage text-night-base hover:bg-[#b5c7ae]'}`}
                                >
                                    {plan.buttonText}
                                </Button>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}
