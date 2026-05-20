import Link from "next/link";

export function ProductCard({ produto }) {
  const preco = Number(produto?.preco ?? 0);

  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="group">
      <div className="overflow-hidden mb-5 bg-[#e5e1d3]">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="text-center">
        <h2 className="text-[0.85rem] uppercase tracking-[2px] text-[#213131] mb-2">
          {produto.nome}
        </h2>

        <p className="text-[#d6988e] text-[0.85rem] mb-5">{precoFormatado}</p>

        <Link
          href={`/produtos/${produto.id ?? produto.objectId}`}
          className="
            uppercase
            tracking-[2px]
            text-[0.7rem]
            border
            border-[#213131]
            px-5
            py-3
            text-[#213131]
            hover:bg-[#213131]
            hover:text-[#efede1]
            transition-all
          "
        >
          Ver produto
        </Link>
      </div>
    </div>
  );
}
