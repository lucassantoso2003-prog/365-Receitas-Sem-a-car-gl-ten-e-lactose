const GIFTS = [
  {
    title: "Lista de Compras Essenciais",
    price: "R$ 29,90",
    description: "Ingredientes certos para montar sua despensa sem erro.",
    img: "bonus-shopping-list-Dj0IVq6V.webp",
    alt: "Lista de compras para receitas sem açúcar, sem glúten e sem lactose",
  },
  {
    title: "Cardápio de 30 Dias",
    price: "R$ 39,90",
    description: "Ideias prontas para variar suas refeições o mês inteiro.",
    img: "bonus-meal-plan-BV1Ak_t-.webp",
    alt: "Cardápio de 30 dias com refeições leves e práticas",
  },
  {
    title: "Guia de Substituições",
    price: "R$ 24,90",
    description: "Trocas simples para manter sabor, textura e cremosidade.",
    img: "bonus-substitutions-C9BdG-Ul.webp",
    alt: "Guia de substituições para açúcar, glúten e lactose",
  },
];

export function Gifts() {
  return (
    <section id="gifts" className="py-8 px-4 bg-[var(--brand-cream)]">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block bg-[var(--brand-orange)] text-white text-xs md:text-sm font-bold uppercase px-4 py-1.5 rounded-full mb-4">
          🎁 Presente Especial
        </span>
        <h2 className="text-3xl md:text-5xl font-black mb-12 text-[var(--brand-green)]">
          COMPRE AGORA E RECEBA <br className="hidden md:block" />
          <span className="text-[var(--brand-orange)]">+ 3 bônus exclusivos:</span>
        </h2>
        <div className="flex flex-col gap-4 md:gap-5 mb-10 max-w-3xl mx-auto">
          {GIFTS.map((gift, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden flex items-stretch gap-3 md:gap-5 text-left"
            >
              <div className="relative flex-shrink-0">
                <img
                  src={gift.img}
                  alt={gift.alt}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-24 h-full md:w-36 object-cover"
                />
                <span className="absolute top-0 left-0 bg-[var(--brand-orange)] text-white text-[9px] md:text-[11px] font-black uppercase px-2 py-0.5 rounded-br-lg rounded-tl-lg shadow">
                  BÔNUS {i + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0 py-3 pr-3 md:py-4 md:pr-5">
                <h3 className="font-black text-[15px] md:text-xl text-[var(--brand-green)] leading-tight mb-1.5">
                  {gift.title}
                </h3>
                <p className="text-[12px] md:text-sm text-stone-600 leading-snug mb-2.5">
                  {gift.description}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-stone-400 line-through font-bold text-[12px] md:text-sm">
                    {gift.price}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-green-100 text-[var(--brand-green)] text-[11px] md:text-sm font-black uppercase px-3 py-1 rounded-full">
                    ✓ Grátis Hoje
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[var(--brand-green)] text-white font-black uppercase rounded-2xl py-5 px-6 text-lg md:text-2xl shadow-lg mb-8">
          💚 VALOR TOTAL DOS BÔNUS R$ 95 → TUDO GRÁTIS HOJE!
        </div>
        <div className="text-center">
          <button
            onClick={() => document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" })}
            className="animate-pulse-cta inline-flex items-center justify-center rounded-xl font-extrabold text-white uppercase tracking-wide bg-[#314677] hover:bg-[#26375e] transition-all hover:-translate-y-1 hover:shadow-2xl text-base md:text-lg px-8 py-5"
          >
            Quero Todas as 365 Receitas
          </button>
        </div>
      </div>
    </section>
  );
}
