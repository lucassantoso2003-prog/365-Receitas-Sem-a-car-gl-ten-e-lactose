const AUDIENCE = [
  "Quer comer melhor sem viver de comida sem graça",
  "Sente que açúcar, glúten ou lactose pesam na sua rotina",
  "Quer preparar receitas leves, bonitas e saborosas em casa",
  "Cansou de procurar opções diferentes e nunca saber o que fazer",
  "Precisa de ideias rápidas para o café, almoço, jantar e sobremesa",
  "Quer agradar a família mesmo fazendo receitas mais equilibradas",
];

export function TargetAudience() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-7 text-[var(--brand-green)]">
          Este cardápio é perfeito para você que:
        </h2>
        <div className="grid md:grid-cols-2 gap-2.5">
          {AUDIENCE.map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 bg-gradient-to-r from-[var(--brand-cream)] to-white rounded-xl px-3.5 py-2.5 border border-stone-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 hover:shadow-md transition-all"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-orange)]/15 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 text-[var(--brand-orange)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="font-medium text-[13px] md:text-sm text-stone-700 leading-snug">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
