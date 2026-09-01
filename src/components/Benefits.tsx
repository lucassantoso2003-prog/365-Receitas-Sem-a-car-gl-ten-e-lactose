import { useState, useEffect } from "react";

const BENEFITS = [
  { icon: "🍰", text: "365 receitas doces e salgadas para variar o cardápio" },
  { icon: "🌿", text: "Sem açúcar, glúten e lactose" },
  { icon: "📖", text: "Passo a passo simples e ilustrado" },
  { icon: "🍽️", text: "Opções para café, almoço, jantar e sobremesa" },
  { icon: "🪶", text: "Mais leveza e sabor no dia a dia" },
  { icon: "👩‍🍳", text: "Mesmo para quem não tem experiência na cozinha" },
  { icon: "✨", text: "Diga adeus à mesmice e às receitas sem graça" },
  { icon: "📱", text: "Tenha tudo no celular ou impresso" },
];

const CAROUSEL_IMAGES = [
  "54fZgju.png",
  "JCYrYsk.png",
  "BWTdeN8.png",
  "8zjkqxs.png",
];

const TESTIMONIALS = [
  "c9fOqG0.png",
  "1KLUKCZ.png",
  "ag5ojSh.png",
  "FHc94su.png",
];

export function Benefits() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-6 pb-10 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
            <span className="bg-gradient-to-r from-[#15803d] to-[#1d4ed8] bg-clip-text text-transparent">
              TRANSFORME SUA ALIMENTAÇÃO SEM PERDER O SABOR
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-2 border border-stone-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center text-lg">
                  {benefit.icon}
                </span>
                <span className="font-medium text-[13px] md:text-sm text-stone-700 leading-snug">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            {CAROUSEL_IMAGES.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Receita ${i + 1}`}
                className={`${
                  i === 0 ? "relative" : "absolute inset-0"
                } w-full h-auto transition-opacity duration-700 ${
                  i === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mb-10">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? "bg-[var(--brand-orange)] w-8" : "bg-foreground/20"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-[var(--brand-green)] mb-2">
            DESCUBRA POR QUE TANTA GENTE AMA ESSAS RECEITAS
          </h2>
          <p className="text-foreground/70 text-lg">
            Veja o que dizem:
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
          <div className="overflow-hidden">
            <div className="flex -ml-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
              {TESTIMONIALS.map((img, i) => (
                <div key={i} className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/3 snap-center">
                  <img src={img} alt={`Depoimento ${i + 1}`} className="w-full rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center gap-2 text-[var(--brand-green)] font-semibold text-sm md:text-base animate-pulse">
            <span aria-hidden="true">👈</span>
            <span>Arraste para ver mais depoimentos</span>
            <span aria-hidden="true">👉</span>
          </div>
        </div>
      </div>
    </section>
  );
}
