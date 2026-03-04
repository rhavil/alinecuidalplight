"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heading, Text } from "@/components/ui/Typography";
import {
    MessageSquare,
    Camera,
    Milestone,
    ShieldAlert,
    History,
    Bell,
    LayoutDashboard,
    SlidersHorizontal,
    LucideIcon
} from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const constellationNodes = [
    { id: 1, title: "Disponível 24h", subtitle: "Inclusive de madrugada, feriados e finais de semana.", x: 20, y: 15 },
    { id: 2, title: "Baseada em evidência", subtitle: "Orientações atualizadas conforme a ciência mais recente.", x: 75, y: 25 },
    { id: 3, title: "Histórico completo", subtitle: "Tudo fica registrado para acompanhamento do desenvovimento do seu bebê.", x: 40, y: 45 },
    { id: 4, title: "Sem julgamento", subtitle: "Toda dúvida é válida. Toda mãe merece acolhimento.", x: 10, y: 70 },
    { id: 5, title: "Resposta rápida", subtitle: "Minutos, não dias. Quando a ansiedade não pode esperar.", x: 60, y: 80 },
    { id: 6, title: "Acompanhamento real", subtitle: "Não é um simples robô. É uma IA pediatra que conhece sua família.", x: 85, y: 60 },
];

export function Benefits() {
    const container = useRef<HTMLDivElement>(null);
    const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeNode, setActiveNode] = useState<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            nodesRef.current.forEach((node, idx) => {
                if (!node) return;

                // Staggered node illumination on scroll
                gsap.fromTo(node,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: container.current,
                            start: "top 70%",
                            toggleActions: "play reverse play reverse",
                        },
                        delay: idx * 0.15,
                    }
                );
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative py-32 overflow-hidden bg-night-base z-10">

            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="mb-16 md:w-3/4 max-w-2xl">
                    <Text className="text-accent-champagne font-semibold tracking-wider uppercase text-sm mb-3">
                        Muito mais que um tira-dúvidas
                    </Text>
                    <Heading as="h2" className="mb-4 text-4xl">
                        Uma <span className="text-accent-champagne italic font-cormorant font-normal">constelação</span> de cuidados no seu bolso.
                    </Heading>
                    <Text className="text-accent-pearl/80">
                        Cada ponto de luz é um motivo para confiar.
                    </Text>
                </div>

                {/* Abstract Map Area */}
                <div className="relative w-full h-[500px] border border-white/5 bg-night-dark/30 rounded-3xl overflow-hidden mt-12 bg-cover bg-center" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23120A1E\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>

                    {/* Faint connective lines background */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
                        <path d="M 20% 15% L 75% 25% L 40% 45% L 10% 70% L 60% 80% L 85% 60% Z" fill="none" stroke="var(--color-accent-champagne)" strokeWidth="1" strokeDasharray="4 4" />
                    </svg>

                    {constellationNodes.map((node, i) => (
                        <div
                            key={node.id}
                            ref={(el) => { if (el) nodesRef.current[i] = el; }}
                            className="absolute group transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            style={{ left: `${node.x}%`, top: `${node.y}%` }}
                            onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                            onMouseEnter={() => setActiveNode(node.id)}
                            onMouseLeave={() => setActiveNode(null)}
                        >
                            {/* Glowing Dot */}
                            <div className={`w-4 h-4 rounded-full bg-accent-champagne shadow-[0_0_15px_rgba(247,225,215,0.8)] relative z-10 transition-transform duration-300 ${activeNode === node.id ? 'scale-150' : 'group-hover:scale-150'}`} />

                            {/* Expanding Label Info - Now Always Visible */}
                            <div className={`absolute top-6 left-1/2 -translate-x-1/2 w-max max-w-[200px] md:max-w-xs px-4 py-3 bg-night-deep/80 backdrop-blur-md border rounded-xl transition-all duration-300 shadow-xl pointer-events-none z-20 text-center ${activeNode === node.id ? 'scale-110 border-accent-champagne/60' : 'border-accent-champagne/20 group-hover:scale-110 group-hover:border-accent-champagne/60'}`}>
                                <span className="block text-sm font-semibold font-nunito text-accent-champagne mb-1">{node.title}</span>
                                <span className="block text-xs font-nunito text-accent-pearl/80 leading-snug">{node.subtitle}</span>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Implemented the features grid with Premium Copy & Icons */}
                <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
                    {/* Disponível Agora */}
                    <div>
                        <Heading as="h3" className="text-2xl mb-8 text-accent-pearl border-b border-white/10 pb-4">
                            Disponível Agora
                        </Heading>
                        <div className="space-y-8">
                            <FeatureItem
                                icon={MessageSquare}
                                title="Diálogo Pediátrico 24/7"
                                desc="Orientação imediata para febre, alimentação, sono e desenvolvimento. Respostas embasadas e precisas, independentemente do dia ou da hora."
                            />
                            <FeatureItem
                                icon={Camera}
                                title="Análise Visual Avançada"
                                desc="Tecnologia de ponta para analisar fotos de lesões na pele, alterações corporais ou fezes, sugerindo orientações e próximos passos clínicos."
                            />
                            <FeatureItem
                                icon={Milestone}
                                title="Mapeamento de Desenvolvimento"
                                desc="Acompanhamento ativo dos marcos motores, cognitivos e sociais da criança, oferecendo expectativas alinhadas aos manuais da SBP."
                            />
                            <FeatureItem
                                icon={ShieldAlert}
                                title="Triagem Inteligente de Riscos"
                                desc="Sistema altamente capacitado para identificar sinais de alerta crítico, direcionando imediatamente para o atendimento presencial quando necessário."
                            />
                            <FeatureItem
                                icon={History}
                                title="Memória Contextual Contínua"
                                desc="A inteligência não apenas responde, ela recorda. Todo o histórico e as particularidades do seu filho são considerados em cada nova interação."
                            />
                        </div>
                    </div>

                    {/* Chegando em Breve */}
                    <div>
                        <Heading as="h3" className="text-2xl mb-8 text-accent-pearl/60 border-b border-white/5 pb-4">
                            Chegando em Breve
                        </Heading>
                        <div className="space-y-8 opacity-80">
                            <FeatureItem
                                icon={Bell}
                                title="Notificações Preditivas"
                                desc="Lembretes proativos sobre vacinação, janelas de saltos de desenvolvimento e consultas de rotina, antecipando as necessidades de cada fase."
                                tag="Em breve"
                            />
                            <FeatureItem
                                icon={LayoutDashboard}
                                title="Painel de Evolução Infantil"
                                desc="Um dashboard visual elegante e intuitivo para o acompanhamento consolidado de peso, curvas de crescimento e histórico de saúde detalhado."
                                tag="Em breve"
                            />
                            <FeatureItem
                                icon={SlidersHorizontal}
                                title="Gestão de Rotinas Personalizada"
                                desc="Controle refinado sobre quais alertas receber e quando, adaptando o auxílio da inteligência cibernética perfeitamente ao ritmo da sua família."
                                tag="Em breve"
                            />
                        </div>
                        <div className="mt-10 p-5 bg-accent-sage/10 rounded-2xl border border-accent-sage/20 text-sm text-accent-pearl/80">
                            <span className="text-accent-sage italic font-cormorant text-xl mr-2">*</span>
                            O ecossistema está em constante evolução. Assinantes premium garantem acesso antecipado a todas as inovações.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function FeatureItem({ icon: Icon, title, desc, tag }: { icon: LucideIcon, title: string, desc: string, tag?: string }) {
    return (
        <div className="flex gap-5 group/feature">
            <div className="mt-1 flex-shrink-0 text-accent-champagne bg-accent-champagne/5 p-3 rounded-2xl border border-accent-champagne/10 group-hover/feature:bg-accent-champagne/10 group-hover/feature:border-accent-champagne/30 transition-colors h-fit">
                <Icon className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
                <h4 className="text-lg font-medium text-accent-pearl mb-2 flex items-center gap-3">
                    {title}
                    {tag && <span className="text-[9px] font-bold uppercase tracking-wider bg-white/10 text-white/70 px-2 py-1 rounded-full">{tag}</span>}
                </h4>
                <p className="text-[15px] text-accent-pearl/70 leading-relaxed font-nunito">{desc}</p>
            </div>
        </div>
    );
}
