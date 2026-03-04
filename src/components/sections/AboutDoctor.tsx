import { Heading, Text } from "@/components/ui/Typography";

export function AboutDoctor() {
    return (
        <section className="relative py-24 md:py-32 bg-accent-pearl text-night-base z-10 overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">

            {/* Decorative botanical element behind */}
            <div className="absolute top-10 right-0 w-64 h-64 bg-accent-champagne/30 rounded-full blur-[60px]" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-sage/20 rounded-full blur-[80px]" />

            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Organic Photo Mask */}
                <div className="relative mx-auto md:mx-0 w-full max-w-md aspect-[4/5]">
                    <div
                        className="absolute inset-0 bg-night-dark rounded-tl-[8rem] rounded-br-[8rem] rounded-tr-[2rem] rounded-bl-[2rem] overflow-hidden shadow-2xl"
                    >
                        {/* Placeholder Image container */}
                        <div className="w-full h-full bg-accent-champagne grayscale mix-blend-multiply opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-night-base/60 to-transparent" />
                    </div>

                    {/* Credential Badges */}
                    <div className="absolute -bottom-6 -right-6 md:right-auto md:-left-12 bg-white px-5 py-3 rounded-3xl shadow-xl border border-accent-pearl rotate-2">
                        <Text variant="caption" className="font-bold text-night-base mb-1">CRM ativo</Text>
                        <Text variant="caption" className="text-night-base/70 -mt-1 text-xs">Pediatria — SBP</Text>
                    </div>
                </div>

                {/* Text Content */}
                <div>
                    <Text className="text-accent-coral font-semibold tracking-wider uppercase text-sm mb-3">
                        A ciência por trás da Aline Cuida
                    </Text>
                    <Heading as="h2" className="mb-4 !text-night-dark text-4xl">
                        Dra. Aline <span className="text-accent-coral italic font-cormorant font-normal">Rodrigues</span>
                    </Heading>

                    <Text variant="body" className="!text-night-base/80 mb-6 font-medium">
                        Pediatra com mais de 8 anos de experiência e gestora de UTI pediátrica. Mãe. A Dra. Aline é a especialista que construiu, validou e supervisiona todo o conhecimento por trás da Aline Cuida.
                    </Text>

                    <Text variant="body" className="!text-night-base/80 mb-8">
                        Como mãe e pediatra, ela sabe que as maiores angústias não respeitam horário comercial. Criou a Aline Cuida porque viu muitas famílias perdidas em fóruns e grupos de WhatsApp de madrugada — e quis oferecer algo melhor: orientação confiável, disponível a qualquer hora, com a mesma base científica que usa no consultório.
                    </Text>

                    <div className="flex flex-col gap-4 border-l-[3px] border-accent-sage pl-6 italic font-cormorant text-2xl text-night-dark/90 leading-snug">
                        &quot;Eu sempre quis estar disponível para as mães que me procuram desesperadas de madrugada. A Aline Cuida é meu conhecimento, minha abordagem e minha dedicação — disponíveis 24 horas por dia, para não deixar nenhuma mãe sem resposta na hora que o mundo dorme.&quot;
                    </div>
                </div>

            </div>
        </section>
    );
}
