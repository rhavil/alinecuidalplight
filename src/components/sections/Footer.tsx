"use client";

import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { useLenis } from "@studio-freight/react-lenis";

export function Footer() {
    const lenis = useLenis();

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        if (lenis) {
            // Check if it's a valid selector or just scroll to top if empty target
            lenis.scrollTo(target === '#' ? 0 : target);
        }
    };

    return (
        <footer className="relative bg-night-deep pt-32 pb-12 px-4 md:px-8 z-10 overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] -mt-10">

            {/* Decorative Final "Crown" Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-sage/15 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-4xl mx-auto text-center relative z-10 mb-24">
                <Heading as="h2" className="mb-6 text-4xl md:text-6xl text-accent-pearl">
                    Para não deitar com <span className="text-accent-coral italic font-cormorant font-normal">medo.</span>
                </Heading>

                <div className="flex flex-col items-center">
                    <Text variant="lead" className="mb-6 text-accent-pearl/80">
                        Você não precisa ser especialista em pediatria. Você não precisa ter todas as respostas. Você só precisa ter quem chamar.
                    </Text>

                    <Text variant="lead" className="mb-10 text-accent-pearl/80">
                        A Aline Cuida combina o conhecimento da Dra. Aline Rodrigues com a disponibilidade que toda mãe e todo pai precisam: a qualquer hora, qualquer dia, direto no WhatsApp. Com ciência, com acolhimento, sem julgamento.
                    </Text>

                    <Heading as="h3" className="mb-10 text-3xl md:text-4xl italic font-cormorant text-accent-coral">
                        Você não está sozinha nisso.
                    </Heading>

                    <Button size="lg" withWhatsapp>
                        Começar no WhatsApp — é gratuito
                    </Button>
                    <p className="text-xs text-accent-pearl/60 mt-3 mb-8">
                        Sem cadastro · Sem cartão · Começa em 30 segundos
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-3 bg-white/5 py-2 px-6 rounded-full border border-white/10">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-accent-champagne border-2 border-night-deep shadow-md flex items-center justify-center opacity-90"><span className="text-[10px] text-night-base font-bold">M</span></div>
                            <div className="w-8 h-8 rounded-full bg-accent-lavender border-2 border-night-deep shadow-md flex items-center justify-center opacity-90"><span className="text-[10px] text-night-base font-bold">C</span></div>
                            <div className="w-8 h-8 rounded-full bg-accent-sage border-2 border-night-deep shadow-md flex items-center justify-center opacity-90"><span className="text-[10px] text-night-base font-bold">F</span></div>
                            <div className="w-8 h-8 rounded-full bg-white border-2 border-night-deep shadow-md flex items-center justify-center">
                                <span className="text-night-base text-[9px] font-bold">+100</span>
                            </div>
                        </div>
                        <span className="text-xs text-accent-pearl/70 font-medium">
                            +100 famílias já cuidam com a Aline Cuida · Cancelamento livre
                        </span>
                    </div>
                </div>
            </div>

            {/* Thin Separator */}
            <div className="w-full h-px bg-white/10 max-w-6xl mx-auto mb-12" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-accent-pearl/50 font-nunito text-xs">

                {/* Brand / Copy */}
                <div>
                    <h4 className="text-accent-pearl font-fraunces text-xl mb-4">Aline Cuida</h4>
                    <p className="mb-4 text-accent-pearl/70">Orientação pediátrica inteligente via WhatsApp, do primeiro suspiro aos 16 anos.</p>
                    <p>© {new Date().getFullYear()} Aline Cuida. Todos os direitos reservados.</p>
                    <p className="mt-2 text-white/30">CNPJ: 00.000.000/0001-00</p>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2">
                    <a href="#" className="hover:text-accent-pearl transition-colors w-fit cursor-pointer">Início</a>
                    <a href="#" className="hover:text-accent-pearl transition-colors w-fit cursor-pointer">Como funciona</a>
                    <a href="#" className="hover:text-accent-pearl transition-colors w-fit cursor-pointer">Funcionalidades</a>
                    <a href="#" className="hover:text-accent-pearl transition-colors w-fit cursor-pointer">Dra. Aline</a>
                    <a href="#" className="hover:text-accent-pearl transition-colors w-fit cursor-pointer">Planos</a>
                    <a href="#" className="hover:text-accent-pearl transition-colors w-fit">FAQ</a>
                    <a href="#" className="hover:text-accent-pearl transition-colors w-fit mt-2">Termos de Uso</a>
                    <a href="#" className="hover:text-accent-pearl transition-colors w-fit">Política de Privacidade</a>
                </div>

                {/* Medical / Legal disclaimer */}
                <div className="md:text-right text-[10px] leading-relaxed border-t md:border-t-0 border-white/10 pt-6 md:pt-0">
                    <p>
                        *A Aline Cuida é um serviço de orientação pediátrica baseado em <strong>inteligência artificial</strong>, com conhecimento validado pela Dra. Aline Rodrigues (CRM XXXXX/SP). Não realiza diagnósticos, não prescreve medicamentos e não substitui consulta médica presencial nem atendimento de emergência ou pronto-socorro. Em caso de emergência, procure imediatamente atendimento médico ou ligue para o SAMU (192). As orientações são baseadas em evidências científicas (SBP, PubMed, UpToDate). Respeitamos a LGPD (Lei nº 13.709/2018) com protocolos especiais para dados de menores.*
                    </p>
                </div>

            </div>

        </footer>
    );
}
