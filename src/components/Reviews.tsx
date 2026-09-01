import { useState } from "react";

const REVIEWS = [
  {
    initials: "AM",
    name: "Ana M.",
    date: "12 de março de 2025",
    text: "Eu achava que receita sem açúcar ficava sem graça, mas o bolo de cenoura me surpreendeu. Ficou fofinho e todo mundo aqui em casa comeu sem perceber diferença.",
    img: "UY37i9U.png",
    likes: 34,
    avatarColor: "#ef4444",
  },
  {
    initials: "JS",
    name: "Juliana S.",
    date: "3 de abril de 2025",
    text: "Comprei por causa das sobremesas e já fiz brownie, brigadeiro e panqueca. Tudo simples e gostoso. Agora tenho opção quando bate vontade de doce.",
    img: "review-brownie-kvuvOXFY.jpg",
    likes: 28,
    avatarColor: "#10b981",
  },
  {
    initials: "CF",
    name: "Camila F.",
    date: "28 de março de 2025",
    text: "Eu sempre ficava meio pesada depois de comer pão e massa. As versões sem glúten do livro me ajudaram muito a variar o café da manhã e os lanches.",
    img: "3xXF7tP.png",
    likes: 51,
    avatarColor: "#a855f7",
  },
  {
    initials: "PR",
    name: "Patricia R.",
    date: "18 de fevereiro de 2025",
    text: "Minha filha tem restrição com lactose e eu vivia sem ideia do que fazer. Agora consigo preparar bolo, torta e até receitas cremosas que ela ama.",
    img: "z8Xaea1.png",
    likes: 62,
    avatarColor: "#f97316",
  },
  {
    initials: "RB",
    name: "Renata B.",
    date: "5 de abril de 2025",
    text: "As receitas são bem explicadas e não pedem ingredientes impossíveis. Fiz a torta salgada e virou receita fixa aqui em casa.",
    img: "Hfbl72C.png",
    likes: 47,
    avatarColor: "#0ea5e9",
  },
  {
    initials: "LC",
    name: "Larissa C.",
    date: "21 de março de 2025",
    text: "Os cookies sem glúten ficaram perfeitos. Crocantes por fora, macios por dentro. Meu marido nem acreditou que eram sem açúcar refinado.",
    img: "zGqQ3BH.png",
    likes: 39,
    avatarColor: "#db2777",
  },
];

export function Reviews() {
  const [likes, setLikes] = useState<{ [key: number]: boolean }>({});
  const [likeCounts, setLikeCounts] = useState(REVIEWS.map((r) => r.likes));
  const [commenting, setCommenting] = useState<number | null>(null);
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});
  const [comments, setComments] = useState<{ [key: number]: string[] }>({});

  const handleLike = (index: number) => {
    const isLiked = likes[index];
    setLikes({ ...likes, [index]: !isLiked });
    setLikeCounts(likeCounts.map((count, i) => (i === index ? count + (isLiked ? -1 : 1) : count)));
  };

  const submitComment = (index: number) => {
    const txt = (commentInputs[index] || "").trim();
    if (txt) {
      setComments({ ...comments, [index]: [...(comments[index] || []), txt] });
      setCommentInputs({ ...commentInputs, [index]: "" });
    }
  };

  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-3xl mx-auto px-4 mt-14">
        <h3 className="text-center text-2xl md:text-3xl font-black text-[var(--brand-green)]">
          3.500+ PESSOAS JÁ <span className="text-[var(--brand-orange)]">TRANSFORMARAM</span> SUA ROTINA NA COZINHA
        </h3>
        <p className="text-center text-foreground/70 mt-2 mb-6">Veja o que quem já comprou está falando.</p>
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex items-center gap-6">
          <div className="text-center shrink-0">
            <div className="text-5xl md:text-6xl font-black text-[var(--brand-green)]">4.9</div>
            <div className="text-[var(--brand-orange)] text-lg">★★★★★</div>
            <div className="text-xs text-foreground/60 mt-1">3.541 avaliações</div>
          </div>
          <div className="flex-1 space-y-1.5">
            {[
              { star: 5, pct: 96 },
              { star: 4, pct: 28 },
              { star: 3, pct: 8 },
              { star: 2, pct: 4 },
              { star: 1, pct: 2 },
            ].map((s) => (
              <div key={s.star} className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground/70 w-3">{s.star}</span>
                <div className="flex-1 h-2.5 bg-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--brand-orange)]" style={{ width: `${s.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 mt-10 grid md:grid-cols-2 gap-5">
        {REVIEWS.map((review, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md p-5 border border-foreground/5">
            <div className="text-[var(--brand-orange)] text-sm mb-2">★★★★★</div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ backgroundColor: review.avatarColor }}
              >
                {review.initials}
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">{review.name}</div>
                <div className="text-xs text-foreground/60">{review.date}</div>
              </div>
            </div>
            <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{review.text}</p>
            <img src={review.img} alt="Receita" className="w-28 h-28 object-cover rounded-xl mb-4" />
            <div className="flex gap-2">
              <button
                onClick={() => handleLike(i)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition ${
                  likes[i]
                    ? "bg-red-50 border-red-200 text-red-600"
                    : "bg-white border-foreground/15 text-foreground/70 hover:bg-foreground/5"
                }`}
              >
                <span>{likes[i] ? "❤️" : "🤍"}</span> Curtir {likeCounts[i]}
              </button>
              <button
                onClick={() => setCommenting(commenting === i ? null : i)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-foreground/15 text-foreground/70 text-xs font-semibold hover:bg-foreground/5"
              >
                💬 Comentar
              </button>
            </div>
            {(comments[i]?.length ?? 0) > 0 && (
              <div className="mt-3 space-y-1.5">
                {comments[i].map((c, j) => (
                  <div key={j} className="text-xs bg-foreground/5 rounded-lg px-3 py-2 text-foreground/80">
                    <span className="font-semibold">Você: </span>
                    {c}
                  </div>
                ))}
              </div>
            )}
            {commenting === i && (
              <div className="mt-3 flex gap-2">
                <input
                  value={commentInputs[i] || ""}
                  onChange={(e) => setCommentInputs({ ...commentInputs, [i]: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && submitComment(i)}
                  placeholder="Escreva um comentário..."
                  className="flex-1 text-xs px-3 py-2 rounded-full border border-foreground/15 focus:outline-none focus:border-[var(--brand-orange)]"
                />
                <button
                  onClick={() => submitComment(i)}
                  className="px-3 py-2 rounded-full bg-[var(--brand-orange)] text-white text-xs font-semibold hover:bg-[var(--brand-orange-hover)]"
                >
                  Enviar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
