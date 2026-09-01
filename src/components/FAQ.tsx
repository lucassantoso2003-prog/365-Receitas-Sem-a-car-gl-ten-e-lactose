import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "As receitas ficam gostosas de verdade?",
    a: "Sim. As receitas foram pensadas para manter sabor, textura e aparência de comida comum, mas em versões sem açúcar, sem glúten e sem lactose. A ideia é comer melhor sem sentir que está em uma dieta sem graça.",
  },
  {
    q: "São receitas saudáveis de verdade?",
    a: "São receitas mais leves e equilibradas, feitas para quem quer reduzir açúcar, glúten e lactose no dia a dia. Ainda assim, o foco é praticidade e sabor, com opções para diferentes momentos da rotina.",
  },
  {
    q: "Preciso comprar ingredientes caros ou difíceis?",
    a: "Não. A maior parte das receitas usa ingredientes acessíveis e fáceis de encontrar em mercados comuns. O objetivo é facilitar sua vida, não complicar.",
  },
  {
    q: "As receitas servem para a família toda?",
    a: "Sim. As receitas foram criadas para agradar adultos, crianças e pessoas que querem comer de forma mais leve, mesmo sem ter restrições alimentares.",
  },
  {
    q: "São receitas simples de fazer?",
    a: "Sim. O material foi feito para a cozinha do dia a dia, com passo a passo direto, ingredientes organizados e preparos fáceis de acompanhar.",
  },
  {
    q: "Preciso saber cozinhar para aproveitar?",
    a: "Não. Mesmo quem tem pouca prática consegue acompanhar as receitas, porque o conteúdo é simples, didático e pensado para iniciantes.",
  },
  {
    q: "Como vou receber o produto?",
    a: "Após a compra, você recebe o acesso imediatamente no seu e-mail. Pode abrir pelo celular, computador, tablet ou imprimir se preferir.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeito(a), basta solicitar o reembolso dentro do prazo e seu dinheiro será devolvido.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "O acesso é vitalício. Você compra uma vez e pode consultar as receitas sempre que quiser.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToOffer = () => {
    document.getElementById("super-offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-8 px-4 bg-[var(--brand-cream)]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-7">
          <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[var(--brand-orange)] mb-1.5">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[var(--brand-green)]">Dúvidas Frequentes</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 divide-y divide-stone-100 overflow-hidden">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-4 md:px-5 py-3.5 gap-3 hover:bg-stone-50/60 transition-colors"
                >
                  <span
                    className={`font-semibold text-sm md:text-[15px] leading-snug ${
                      isOpen ? "text-[var(--brand-orange)]" : "text-[var(--brand-green)]"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full bg-[var(--brand-cream)] flex items-center justify-center text-[var(--brand-green)] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[var(--brand-orange)] text-white" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 md:px-5 pb-4 text-sm text-foreground/75 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-7">
          <button
            onClick={scrollToOffer}
            className="animate-pulse-cta inline-flex items-center justify-center rounded-xl font-extrabold text-white uppercase tracking-wide bg-[#314677] hover:bg-[#26375e] transition-all hover:-translate-y-1 hover:shadow-2xl text-base md:text-lg px-8 py-5"
          >
            Ver Oferta
          </button>
        </div>
      </div>
    </section>
  );
}
