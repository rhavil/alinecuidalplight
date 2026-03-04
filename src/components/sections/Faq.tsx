"use client";

import { useState, useEffect } from "react";
import { Heading, Text } from "@/components/ui/Typography";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
    {
        q: "É uma médica de verdade respondendo?",
        a: "Não. A Aline Cuida é uma assistente inteligente treinada com o conhecimento pediátrico da Dra. Aline Rodrigues. Todas as orientações são baseadas em fontes científicas (SBP, PubMed, UpToDate) e validadas pela Dra. Aline. Isso é o que permite que o serviço funcione 24 horas por dia, 7 dias por semana — algo impossível com uma pessoa sozinha."
    },
    {
        q: "Isso substitui uma consulta com pediatra?",
        a: "Não, e nem queremos que substitua. A Aline Cuida é orientação para o dia a dia — a dúvida das 3h da manhã, a mancha que apareceu, o comportamento novo. Para diagnósticos, prescrições e emergências, o atendimento presencial continua essencial. E a Aline Cuida te ajuda a saber quando é hora de procurar um."
    },
    {
        q: "Como funciona a comunicação? Texto, áudio ou foto?",
        a: "Tudo! Você pode mandar texto, áudio ou foto. Fotos são especialmente úteis para manchas na pele, assaduras e cocô diferente — a Aline Cuida analisa a imagem e te orienta. Áudios também são aceitos para quando é mais fácil falar."
    },
    {
        q: "É seguro confiar nas respostas?",
        a: "As orientações são baseadas exclusivamente em fontes médicas reconhecidas e no conhecimento clínico da Dra. Aline. O sistema é projetado para ser conservador: na dúvida, recomenda avaliação presencial. Nunca prescreve medicamentos e nunca faz diagnósticos."
    },
    {
        q: "Funciona de madrugada mesmo?",
        a: "Sim, 24 horas por dia, 7 dias por semana. Inclusive feriados, finais de semana e madrugadas. É justamente essa a grande vantagem: a Aline Cuida está disponível nos momentos em que mais ninguém está."
    },
    {
        q: "Para qual faixa etária funciona?",
        a: "Do recém-nascido até os 16 anos. O sistema tem protocolos especiais para bebês com menos de 3 meses, onde qualquer sinal merece atenção redobrada."
    },
    {
        q: "Posso cancelar quando quiser?",
        a: "Sim. Sem fidelidade, sem multa, sem burocracia. E o plano gratuito continua sempre disponível."
    },
    {
        q: "Meus dados estão seguros?",
        a: "Seguimos a LGPD com protocolos especiais para dados de menores de idade. Suas conversas são sigilosas e usadas estritamente para o cuidado do seu filho. Nenhuma informação é compartilhada com terceiros."
    }
];

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative py-32 px-4 md:px-8 bg-night-base z-10 w-full overflow-hidden">

            <div className="max-w-3xl mx-auto">
                <Heading as="h2" className="mb-12 text-center md:text-left">
                    Dúvidas <span className="text-accent-lavender italic font-cormorant font-normal">frequentes.</span>
                </Heading>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border-b border-white/10 pb-4"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between text-left py-4 group"
                            >
                                <span className="text-lg md:text-xl font-nunito font-medium text-accent-pearl group-hover:text-accent-lavender transition-colors">
                                    {faq.q}
                                </span>
                                <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-45 text-accent-lavender' : 'text-accent-pearl/50'}`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        onUpdate={() => ScrollTrigger.refresh()}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-4 pr-12">
                                            <Text variant="body" className="text-accent-pearl/70 leading-relaxed">
                                                {faq.a}
                                            </Text>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
