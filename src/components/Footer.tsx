export function Footer() {
  return (
    <footer className="bg-[var(--brand-green-deep)] text-white/80 py-10 px-4 text-center">
      <p className="font-bold text-white mb-2">365 Receitas Sem Açúcar, Sem Glúten e Sem Lactose</p>
      <p className="text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</p>
      <p className="text-xs mt-3 text-white/60">Checkout será configurado posteriormente.</p>
    </footer>
  );
}
