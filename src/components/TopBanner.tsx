export function TopBanner() {
  const date = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--brand-green)] text-white text-center py-2.5 px-2 font-bold text-[12px] sm:text-sm md:text-base shadow-md whitespace-nowrap overflow-hidden text-ellipsis">
      ⏰ A promoção dessa página acaba no dia {date}
    </div>
  );
}
