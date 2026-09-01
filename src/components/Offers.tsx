import { useState } from "react";
import { CTAButton } from "./CTAButton";

function CheckIcon() {
  return (
    <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#16A34A" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
    </svg>
  );
}

export function Offers() {
  const [showPopup, setShowPopup] = useState(false);
  const basicCheckoutUrl = "https://pay.wiapy.com/Ci6of1B5M1ll";
  const superCheckoutUrl = "https://pay.wiapy.com/3IdUSNfye7KS";

  const endDate = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <section id="offer" className="py-10 px-4 bg-[var(--brand-green)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-3 uppercase">Escolha seu plano</h2>
          <p className="text-center text-white/90 text-base md:text-lg font-semibold mb-10">
            Oferta especial por tempo limitado · Acesso imediato
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-8 items-stretch">
            
            <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden flex flex-col border-t-[6px] md:border-t-[10px] border-[var(--brand-orange)] pt-4 px-3 pb-4 md:pt-8 md:px-8 md:pb-8">
              <div className="flex justify-center mb-3 md:mb-6">
                <span className="inline-flex items-center gap-1 md:gap-2 bg-orange-100 text-[var(--brand-orange)] font-black uppercase text-[9px] md:text-sm px-2.5 md:px-5 py-1 md:py-2 rounded-full">
                  ⚡ Oferta Básica
                </span>
              </div>
              <h3 className="text-base md:text-3xl font-black text-center text-[var(--brand-orange)] mb-3 md:mb-6 leading-tight">
                +365 Receitas Completas
              </h3>
              <ul className="space-y-1.5 md:space-y-3 mb-4 md:mb-6 text-left">
                {[
                  "365 Receitas Sem Açúcar, Glúten e Lactose",
                  "Acesso Vitalício",
                  "Entrega Imediata por E-mail",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-1.5 md:gap-2">
                    <CheckIcon />
                    <span className="font-semibold text-[11px] md:text-base leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto text-center pt-3 md:pt-6">
                <p className="text-red-600 line-through font-bold text-[11px] md:text-base">De R$ 97,00 por apenas</p>
                <p className="text-[2.16rem] md:text-[4.3rem] font-black text-[var(--brand-green)] my-1 md:my-2 leading-none">
                  R$ 10
                </p>
                <div className="flex justify-center mt-2 md:mt-4">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="animate-pulse-cta inline-flex items-center justify-center whitespace-nowrap max-w-full rounded-xl font-extrabold text-white uppercase tracking-tight bg-[#16A34A] hover:bg-[#15803D] transition-all hover:-translate-y-1 hover:shadow-2xl text-[15px] sm:text-lg md:text-xl px-5 sm:px-7 md:px-12 py-4 sm:py-[18px] md:py-[22px]"
                  >
                    Comprar Agora
                  </button>
                </div>
              </div>
            </div>

            <div
              id="super-offer"
              className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col border-t-[6px] md:border-t-[10px] border-[var(--brand-green)] pt-4 px-3 pb-4 md:pt-6 md:px-8 md:pb-8 scroll-mt-4 md:-mt-2"
            >
              <span className="absolute top-2 right-2 bg-red-600 text-white font-black uppercase text-[9px] md:text-xs px-2.5 md:px-3 py-0.5 md:py-1 rounded-full shadow-lg whitespace-nowrap z-10">
                Mais Vendida
              </span>
              <div className="flex justify-center mb-3 md:mb-6">
                <span className="inline-flex items-center gap-1 md:gap-2 bg-[var(--brand-orange)] text-white font-black uppercase text-[9px] md:text-sm px-2.5 md:px-5 py-1 md:py-2 rounded-full shadow">
                  🔥 Super Oferta
                </span>
              </div>
              <h3 className="text-base md:text-3xl font-black text-center text-[var(--brand-orange)] mb-3 md:mb-6 leading-tight">
                +500 Receitas Premium
              </h3>
              <ul className="space-y-1.5 md:space-y-3 mb-3 md:mb-4 text-left">
                {[
                  "500 Receitas Sem Açúcar, Glúten e Lactose",
                  "Sobremesas, Pães, Bolos e Massas",
                  "Receitas Cremosas Sem Lactose",
                  "Acesso Vitalício",
                  "Entrega Imediata por E-mail",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-1.5 md:gap-2">
                    <CheckIcon />
                    <span className="font-semibold text-[11px] md:text-base leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center text-[var(--brand-orange)] font-black uppercase text-[11px] md:text-base mt-1 md:mt-2 mb-2 md:mb-3">
                Bônus Exclusivos!
              </p>
              <ul className="space-y-1.5 md:space-y-2.5 mb-4 md:mb-6 text-left">
                {[
                  "Cardápio de 30 Dias com Refeições Leves",
                  "Guia de Substituições Inteligentes",
                  "Lista de Compras Essenciais",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-1.5 md:gap-2">
                    <span className="text-sm md:text-xl leading-none flex-shrink-0">🎁</span>
                    <span className="font-semibold text-[11px] md:text-base leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto text-center pt-2">
                <p className="text-red-600 line-through font-bold text-[11px] md:text-base">De R$ 197,00 por apenas</p>
                <p className="text-[2.16rem] md:text-[4.3rem] font-black text-[var(--brand-green)] my-1 md:my-2 leading-none">
                  R$ 18
                </p>
                <div id="super-cta" className="flex justify-center mt-2 md:mt-4 scroll-mt-24">
                  <CTAButton href={superCheckoutUrl}>Comprar Agora</CTAButton>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-white/90 text-sm mt-8">
            📲 Acesso imediato após a compra · Oferta válida até {endDate}
          </p>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 md:p-10 max-w-lg w-full text-center shadow-2xl relative animate-in zoom-in-95 duration-300">
            <h3 className="text-2xl md:text-3xl font-black text-[var(--brand-green)] mb-2">ESPERE!</h3>
            <p className="text-foreground/80 mb-6 font-medium text-sm md:text-base">
              Que tal levar a <span className="font-bold text-[var(--brand-orange)]">Super Oferta</span> com +500 receitas e todos os bônus exclusivos por apenas <span className="font-black text-xl text-[var(--brand-green)]">R$ 14,99</span>?
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={superCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowPopup(false)}
                className="w-full inline-flex items-center justify-center rounded-xl font-extrabold text-white uppercase tracking-wide bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-hover)] transition-all text-base md:text-lg px-6 py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Sim, quero a Super Oferta por R$ 14,99!
              </a>
              <a
                href={basicCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowPopup(false)}
                className="w-full inline-flex items-center justify-center rounded-xl font-bold text-stone-500 uppercase tracking-wide bg-stone-100 hover:bg-stone-200 transition-all text-xs md:text-sm px-6 py-3"
              >
                Não, obrigado. Quero apenas a oferta básica.
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
