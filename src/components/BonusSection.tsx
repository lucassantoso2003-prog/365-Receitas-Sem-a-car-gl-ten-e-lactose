import { CTAButton } from "./CTAButton";

const EXTRA_RECIPES = [
  "Café da Manhã Leve (50 receitas)",
  "Pães, Bolos e Massas Sem Glúten (55 receitas)",
  "Almoços e Jantares Práticos (70 receitas)",
  "Lanches e Salgados Saudáveis (50 receitas)",
  "Sobremesas Sem Açúcar (65 receitas)",
  "Receitas Sem Lactose Cremosas (35 receitas)",
  "Molhos, Cremes e Acompanhamentos (25 receitas)",
  "Bebidas, Vitaminas e Extras (15 receitas)",
];

export function BonusSection() {
  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[var(--brand-green)] text-white rounded-3xl p-8 md:p-14 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-3">
            + 365 receitas incríveis da Chef e nutricionista vanessa
          </h2>
          <div className="flex justify-center my-6 md:my-8">
            <img
              src="recipes-showcase-BTlQkkvt.png"
              alt="Mosaico com prévia das 357 receitas extras da Chef Luana"
              loading="lazy"
              className="w-full max-w-2xl h-auto drop-shadow-2xl"
            />
          </div>
          <p className="text-center text-white/80 mb-8 text-base md:text-lg">
            Divididas em categorias completas:
          </p>
          <div className="flex flex-col items-center gap-2 md:gap-3 mb-10">
            {EXTRA_RECIPES.map((recipe, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 md:px-5 py-2 md:py-2.5 text-[11px] md:text-base font-semibold text-center whitespace-nowrap"
              >
                {recipe}
              </span>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => document.getElementById("gifts")?.scrollIntoView({ behavior: "smooth" })}
              className="animate-pulse-cta inline-flex items-center justify-center whitespace-nowrap max-w-full rounded-xl font-extrabold text-white uppercase tracking-tight bg-[#16A34A] hover:bg-[#15803D] transition-all hover:-translate-y-1 hover:shadow-2xl text-[15px] sm:text-lg md:text-xl px-5 sm:px-7 md:px-12 py-4 sm:py-[18px] md:py-[22px]"
            >
              ver bonus exclusivos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
