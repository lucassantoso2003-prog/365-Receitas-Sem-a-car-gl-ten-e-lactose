const RECIPES = [
  {
    title: "BOLO DE CENOURA COM COBERTURA CREMOSA",
    img: "9XqdBay.png",
    desc: "Fofinho, doce na medida e sem açúcar refinado",
  },
  {
    title: "PÃO CASEIRO SEM GLÚTEN",
    img: "1yPajyN.png",
    desc: "Macio, simples e perfeito para o café da manhã",
  },
  {
    title: "PANQUECA LEVE DE BANANA",
    img: "cY8OF7l.png",
    desc: "Rápida, nutritiva e sem lactose",
  },
  {
    title: "LASANHA CREMOSA SEM GLÚTEN",
    img: "Lasanha-vegan-Made-by-Choices.webp",
    desc: "Confortável, saborosa e perfeita para a família",
  },
  {
    title: "BRIGADEIRO SEM AÇÚCAR",
    img: "wS19SoM.png",
    desc: "Cremoso, chocolatudo e sem culpa",
  },
  {
    title: "TORTA SALGADA DE FRANGO",
    img: "tql5cat.png",
    desc: "Prática, leve e ótima para qualquer refeição",
  },
  {
    title: "BROWNIE FIT DE CHOCOLATE",
    img: "Small-Batch-Brownies-Eats-Delightful.webp",
    desc: "Úmido, intenso e sem farinha de trigo",
  },
  {
    title: "COOKIE CROCANTE SEM GLÚTEN",
    img: "Cookies-Veganos-com-peda-os-de-Chocolate-Cozinha-Roman.webp",
    desc: "Crocante por fora, macio por dentro",
  },
];

export function RecipeCards() {
  return (
    <section className="pt-6 pb-8 px-3 bg-[#D9E8DC]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-black text-center mb-6 md:mb-12 text-[var(--brand-green)]">
          VEJA O QUE VOCÊ VAI PREPARAR:
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {RECIPES.map((recipe, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform flex flex-col"
            >
              <img src={recipe.img} alt={recipe.title} className="w-full aspect-square object-cover" />
              <div className="p-2.5 md:p-4 flex flex-col items-center text-center flex-1">
                <h3 className="font-black text-[var(--brand-green)] text-xs md:text-base mb-1.5 md:mb-2 leading-tight">
                  {recipe.title}
                </h3>
                <p className="text-[11px] md:text-sm text-muted-foreground leading-snug mb-2 md:mb-3">
                  {recipe.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
