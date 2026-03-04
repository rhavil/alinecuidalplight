# Briefing para DEV — Landing Page **Aline Cuida**

## Conceito v2.5 (intermediário) — **“Aurora da Madrugada”**

**Foco:** experiência imersiva, viva e suave com scroll cinematográfico + conexões gráficas entre seções.
**Obs.:** copy fina será refinada depois. Aqui o foco é **sistema visual + motion + arquitetura da página**.

---

## 1) Contexto rápido: o que é Aline Cuida (para guiar decisões de UX)

**Aline Cuida** é um serviço de orientação pediátrica via **WhatsApp**, com a presença digital da **Dra. Aline Rodrigues**. A proposta central é reduzir a ansiedade do cuidado infantil, especialmente nos horários em que “o mundo fecha” e a dúvida bate forte. O grande concorrente é o combo “Google + grupos de WhatsApp + silêncio da madrugada”. 

A mensagem-mãe que sustenta tudo: **“Você não está sozinha nisso.”** 

Pilares que devem influenciar layout, microinterações e ritmo do site (mesmo com copy placeholder):

* **Presença:** “Sempre aqui” (ênfase emocional, não só técnica). 
* **Confiança:** “Ciência com rosto humano” (pediatra real por trás). 
* **Acompanhamento:** jornada longa, histórico, constância. 
* **Comunidade:** pertencimento e normalização da experiência. 

Diretriz de público: mães/pais cansados, muitas vezes com bebê no colo; o site precisa “andar bonito” sem virar um parque de diversões pesado. 

---

## 2) Objetivo do projeto (em termos práticos)

1. **Prender atenção** nos primeiros segundos com atmosfera e identidade (madrugada/aurora).
2. **Aumentar confiança** com presença humana (Dra. Aline) e sinais de ciência/evidência.
3. **Fazer a pessoa entender em 10–20s** como funciona (WhatsApp, sem fricção).
4. **Converter para WhatsApp** (CTA principal) com tracking de eventos.

---

## 3) Direção criativa: “Aurora da Madrugada” (entre 2 conceitos)

Temos 2 referências internas:

* um conceito “madrugada cinematográfica” com azul profundo + coral + partículas/efeitos;
* um conceito “editorial orgânico” com creme/sage + line-art botânico + leveza.

A v2.5 une os dois:

* **tons e atmosfera** do “madrugada”, só que **mais claros** (aurora constante, sem virar dia)
* **texturas orgânicas/editoriais** e botânica line-art do “jardim”
* páginas conectadas por um elemento visual contínuo (ver “Linha Viva”)

---

## 4) Metáfora visual central (obrigatória): **A Linha Viva**

Um único elemento gráfico conecta a página inteira.

**Começo:** traço tipo “pulso/linha EKG” (assinatura da madrugada). 
**Evolução:** esse traço **morfologicamente vira ramo/caule**, depois ramifica, depois vira “coroa” no CTA final.

Funções da Linha Viva:

* guia de leitura e “fio narrativo”
* separador de seções (sem cortes bruscos)
* progress bar (topo)
* conector de cards/nodes (benefícios e etapas)
* moldura orgânica do mockup WhatsApp e da foto da Dra. Aline

**Regra:** toda seção grande precisa “tocar” a Linha Viva. Nada fica solto sem motivo.

---

## 5) Tokens visuais (paleta, tipografia, textura)

### 5.1 Paleta (base madrugada + aurora clareando)

Use uma base próxima a esta (ajustável):

* **Night base:** #060D1F / #0D1B3E / #120A1E
* **Acentos:** coral rosé / champagne / pearl / lavender / sage
* **Aurora glow:** gradientes com opacidade baixa (coral + lavanda + champagne)

Textura global:

* grain muito leve (opacidade baixa, uniforme) 
* toque “papel” sutil (editorial) nas áreas claras

### 5.2 Tipografia (intermediária, consistente)

Proposta:

* **Headlines:** Fraunces (premium + identidade)
* **Ênfase/quotes:** Cormorant Garamond Italic
* **Texto/UI:** Nunito (acolhedor e legível)

(Se já houver stack de fontes do projeto, manter e adaptar.)

---

## 6) Motion System (o “jeito de rolar”)

Base:

* **Lenis** para scroll suave (sensação de seda/folhear). 
* **GSAP + ScrollTrigger** para cenas encadeadas.
* **DrawSVG / stroke animation** para desenhar a Linha Viva e linhas de conexão entre elementos. 

Gramática de transição (usar sempre que possível):

1. **Morph** (blobs e Linha Viva mudam forma)
2. **Draw-on-scroll** (stroke desenhando ramos/linhas)
3. **Depth drift** (parallax leve em 2–3 camadas)
4. **Aurora wash** (gradiente suave varrendo a tela como luz)
5. **Dissolve** (cards/partículas viram “folhas/pó de luz”)

Acessibilidade:

* respeitar `prefers-reduced-motion`: desabilitar pin, parallax e morph; manter layout estático bonito.
* manter targets grandes e legibilidade alta.

Performance (diretriz):

* Desktop: efeitos completos
* Mobile: “lite mode” automático (menos partículas, sem pin longo, menos camadas)

---

## 7) Arquitetura da Página (seções conectadas graficamente)

**Nota:** os textos podem ser placeholders. A prioridade é layout + motion + conexão visual.

### S0 — Entrada (micro-intro leve)

* Sem preloader longo. Entrada com **fade-in escalonado** do conteúdo (0.6–0.9s). 
* Opcional (se performar bem): a Linha Viva desenha em 0.6–0.9s e “brota” 1 folha.

### S1 — HERO “madrugada bonita”

Composição:

* fundo night + aurora glow discreto
* partículas “vaga-lumes” leves (canvas ou three minimal)
* mockup WhatsApp flutuando (float suave)
* Linha Viva nasce no topo e contorna o bloco principal

Entrada:

* headline/sub em easing suave (sem excesso)
* mockup entra com deslocamento curto e blur reduzindo

### S2 — Cena “03:17” (pin curto)

Objetivo: reconhecimento da realidade da madrugada.

* duração de pin **curta** (120–160vh) para manter fluidez
* lockscreen 03:17 + cards de “dúvidas” surgindo e orbitando com blur
* Linha Viva “puxa” e organiza esses cards

Saída:

* cards se dissolvem e viram pequenas folhas/pó de luz
* aurora wash prepara o “alívio”

### S3 — “Alívio / solução no WhatsApp”

* glow radial abre atrás do mockup e reduz tensão
* conversa no WhatsApp anima mensagem por mensagem (stagger) 
* ao redor do mockup: cards/legendas como colagem editorial (linhas hand-drawn apontando) 

### S4 — “Como funciona” (trilha em 3 nós)

* 3 etapas conectadas pela Linha Viva (como trilha)
* cada etapa acende ao entrar em view
* drawSVG desenha o conector entre elas 

### S5 — Benefícios como “Constelação de Cuidados”

Formato assinatura da v2.5:

* grande “mapa” com 6–9 nodes conectados (constelação orgânica)
* ao scroll: node acende → expande → vira card
* ao sair: volta a ser ponto
* micro folhas/pó de luz nos highlights

### S6 — “Dra. Aline” (janela quente dentro da madrugada)

Objetivo: humanização forte.

* fundo blush/creme editorial, estilo revista 
* foto com recorte orgânico (blob/arco), sem estética clínica 
* Linha Viva contorna a foto e “amarra” a seção na narrativa
* badges de credenciais (placeholder ok)

### S7 — Depoimentos (passagem suave)

* carrossel horizontal com cards “quentes”
* animação de entrada escalonada + micro shimmer leve
* decoração hand-drawn discreta (estrelas/folhas) 

### S8 — “Experimente” (mini-simulador)

* campo + exemplos clicáveis (placeholder)
* resposta aparece em card/bolha com animação curta
* ao interação: Linha Viva “cresce” 1 broto (feedback visual)
* microcopy avisando simulação educativa (placeholder) 

### S9 — Planos (spotlights suaves)

* dois cards principais
* premium com borda conic gradient animada (leve) 
* toggle mensal/anual com flip curto 

### S10 — FAQ (accordion com “traço”)

* abertura desenhando contorno/underline hand-drawn
* animação suave, sem jumps (evitar max-height bugado; preferir height auto via GSAP)

### S11 — CTA final (coroa orgânica)

* Linha Viva vira uma “coroa” de ramos/folhas em volta do CTA final 
* folhas desenham ao entrar em view
* prova social (placeholder) 

Footer:

* incluir links, contato e aviso médico/LGPD (conteúdo base já existe) 

---

## 8) Componentes e padrões (para consistência)

### CTA principal (sempre o mesmo componente)

* botão “Começar no WhatsApp”
* hover com glow suave (sem neon duro)
* ícone WhatsApp integrado
* tracking: `cta_whatsapp_click` com `section_id`

### Mockups

* 1 mockup WhatsApp no hero
* 1 mockup grande na seção de solução
* manter estética editorial (evitar metal pesado no iPhone; preferir “clean/clay” quando fizer sentido)

### Cards

* raio alto (20–28px)
* sombra suave
* borda com opacidade baixa
* textura/grain quase imperceptível

---

## 9) Assets necessários (checklist)

**Obrigatórios**

1. SVG Linha Viva (4 estados):

   * EKG → ramo → ramo ramificado → coroa final
2. 6–9 ícones line-art consistentes (sage/cream)
3. 6 blobs SVG morfáveis (para fundos e recortes)
4. textura grain/papel (bem leve)
5. sprite/partícula (vaga-lume) ou shader simples
6. mockups WhatsApp (imagens ou construção com HTML/CSS)

**Opcional**

* ilustrações botânicas line-art extras para cantos e molduras
* micro “sticker shapes” (colagem editorial)

---

## 10) Implementação técnica (sugestão)

(Adaptar ao stack do projeto. Abaixo é um baseline seguro.)

**Sugestão de libs**

```txt
lenis (scroll)
gsap + ScrollTrigger (+ DrawSVG se disponível)
optional: splitting.js (se for usar animação de letras no hero)
optional: lightweight canvas particles (evitar three pesado no mobile)
```

**Estratégia de performance**

* carregar efeitos por “capability”:

  * desktop: particles + pin curto + morph
  * mobile: sem pin, particles reduzidas, morph limitado
* imagens: `next/image` (se for Next), preload do hero, lazy abaixo
* reduzir repaints: transforms/opacity; evitar filtros pesados grandes em mobile
* `prefers-reduced-motion`: fallback estático com Linha Viva em estado final da seção

**Acessibilidade**

* contraste bom nos textos
* foco visível
* botões e links com área clicável generosa
* evitar cursor custom global (pode existir apenas como efeito leve em desktop; no conceito editorial ele é dispensável) 

---

## 11) Analytics (mínimo necessário)

Eventos recomendados:

* `cta_whatsapp_click` (com `section_id`)
* `scroll_depth_25/50/75/100`
* `plans_toggle` (mensal/anual)
* `simulator_submit`

---

## 12) Critérios de aceite (objetivos verificáveis)

* Scroll suave sem engasgos perceptíveis em desktop médio
* Mobile abre rápido, interações respondem sem delay
* Linha Viva conecta visualmente todas as seções (continuidade real)
* Seções S2 e S5 entregam “uau” com suavidade (sem excesso de ruído visual)
* `prefers-reduced-motion` aplicado corretamente
* CTA para WhatsApp presente no hero + final + 1 ponto intermediário
* Aviso médico/LGPD no footer conforme texto base 

---

## 13) O que fica para depois (deliberadamente)

* copy final (headline, subtítulos, FAQs finais)
* escolha final de fotos reais (mãe/bebê e Dra. Aline)
* definição final de preços/planos (valores)

---

Se você quiser, eu também posso pegar esse briefing e transformar em um **mapa de implementação por etapas** (MVP visual → motion → polish), já com uma ordem de tarefas que reduz retrabalho (principalmente na Linha Viva e na constelação de benefícios).
