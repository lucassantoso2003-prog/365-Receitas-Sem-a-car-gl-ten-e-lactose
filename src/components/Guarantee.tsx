export function Guarantee() {
  return (
    <section className="py-8 px-4 bg-[var(--brand-cream)]">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100">
        <div className="flex flex-col md:flex-row items-center gap-5 p-5 md:p-7">
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-[var(--brand-orange)]/10 blur-2xl rounded-full"></div>
            <img src="JkRnpY1.png" alt="Selo de garantia" className="relative w-24 h-24 md:w-28 md:h-28" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-[var(--brand-green)]/10 text-[var(--brand-green)] text-[11px] font-bold px-2.5 py-1 rounded-full mb-2 uppercase tracking-wide">
              <span>🛡️</span> Risco Zero
            </div>
            <h2 className="text-xl md:text-2xl font-black mb-1.5 text-[var(--brand-green)]">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="text-sm md:text-[15px] text-foreground/75 leading-relaxed mb-3">
              Teste as receitas por 7 dias. Se não ficar 100% satisfeito(a), devolvemos{" "}
              <span className="font-bold text-[var(--brand-orange)]">todo o seu dinheiro</span>, sem perguntas.
            </p>
            <button
              onClick={() => document.getElementById("super-offer")?.scrollIntoView({ behavior: "smooth" })}
              className="animate-pulse-cta inline-flex items-center justify-center whitespace-nowrap max-w-full rounded-xl font-extrabold text-white uppercase tracking-tight bg-[#16A34A] hover:bg-[#15803D] transition-all hover:-translate-y-1 hover:shadow-2xl text-[15px] sm:text-lg md:text-xl px-5 sm:px-7 md:px-12 py-4 sm:py-[18px] md:py-[22px]"
            >
              Quero comprar com segurança
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
