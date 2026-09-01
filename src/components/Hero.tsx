export function Hero() {
  return (
    <section className="bg-white text-foreground pt-16 md:pt-20 pb-10 md:pb-14 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-[24px] sm:text-[33px] md:text-[66px] font-black leading-[1.15] md:leading-tight mb-4 tracking-tight">
          <span className="text-[#15803d]">
            365 RECEITAS PARA COMER BEM E COM PRAZER
          </span>
        </h1>
        <p className="text-[17.6px] md:text-[19.8px] font-semibold text-foreground/70 mb-2 max-w-2xl mx-auto">
          Sem açúcar, glúten e lactose. Mais sabor e praticidade todos os dias.
        </p>
        <div className="flex justify-center mb-2 sm:overflow-visible overflow-hidden">
          <img
            src="banner-365-CKMxvwCa.png"
            alt="365 Receitas Sem Açúcar, Sem Glúten e Sem Lactose"
            className="w-[100%] max-w-none sm:w-full sm:max-w-[48.3rem] rounded-3xl shadow-2xl"
          />
        </div>
        <div className="mb-4">
          <p className="text-[13.5px] md:text-[17.6px] font-medium text-foreground/70 max-w-xl mx-auto leading-relaxed">
            Bolos, pães, sobremesas, lanches e refeições em versões leves e deliciosas para transformar sua rotina.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 text-sm text-foreground/60">
          <span>📱 Acesso imediato no e-mail</span>
          <span>🔒 Compra 100% Segura</span>
          <span>🛡️ 7 Dias de Garantia Total</span>
        </div>
      </div>
    </section>
  );
}
