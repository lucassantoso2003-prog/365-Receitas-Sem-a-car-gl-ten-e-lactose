export function CTAButton({
  children,
  large = false,
  href = "https://pay.wiapy.com/Ci6of1B5M1ll",
}: {
  children: React.ReactNode;
  large?: boolean;
  href?: string;
}) {
  const className = `animate-pulse-cta inline-flex items-center justify-center whitespace-nowrap max-w-full rounded-xl font-extrabold text-white uppercase tracking-tight bg-[#16A34A] hover:bg-[#15803D] transition-all hover:-translate-y-1 hover:shadow-2xl ${
    large
      ? "text-[17px] sm:text-xl md:text-[27px] px-6 sm:px-9 md:px-14 py-[18px] sm:py-[22px] md:py-7"
      : "text-[15px] sm:text-lg md:text-xl px-5 sm:px-7 md:px-12 py-4 sm:py-[18px] md:py-[22px]"
  }`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
