const METHODS = [
  { title: "No Celular", desc: "Acesse onde estiver", icon: "📱" },
  { title: "No Computador", desc: "Tela grande pra cozinhar", icon: "💻" },
  { title: "Para Imprimir", desc: "Seu caderno de receitas", icon: "🖨️" },
  { title: "Envio Imediato", desc: "Liberado em segundos", icon: "⚡" },
];

export function DeliveryMethods() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-2 text-[var(--brand-green)]">
          Como você vai <span className="text-[var(--brand-orange)]">RECEBER:</span>
        </h2>
        <p className="text-center text-foreground/60 text-sm mb-7">Acesso liberado na hora, do seu jeitinho ✨</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {METHODS.map((method, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-[var(--brand-cream)] to-white rounded-2xl p-4 text-center shadow-sm border border-stone-100 hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm text-2xl mb-2 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {method.icon}
              </div>
              <h3 className="font-black text-[var(--brand-green)] text-sm md:text-base">{method.title}</h3>
              <p className="text-[11px] md:text-xs text-foreground/55 mt-0.5">{method.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
