"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Parse from "@/lib/parse";
import Link from "next/link";

export default function ProdutoPage() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function carregar() {
      const Produto = Parse.Object.extend("Produtos");
      const query = new Parse.Query(Produto);

      query.equalTo("objectId", id);

      const result = await query.first();

      if (result) {
        setProduto({
          nome: result.get("nome"),
          preco: Number(result.get("preco") ?? 0),
          descricao: result.get("descricao"),
          imagem: result.get("imagem")?.url?.(),
        });
      }
    }

    if (id) carregar();
  }, [id]);

  if (!produto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#efede1] text-[#213131] font-poppins">
        Carregando produto...
      </div>
    );
  }

  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="min-h-screen bg-[#efede1] text-[#213131] font-poppins">
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        <Link
          href="/produtos"
          className="text-xs uppercase tracking-[3px] opacity-60 hover:opacity-100 transition"
        >
          ← Voltar
        </Link>

        <div className="grid md:grid-cols-2 gap-16 mt-10 items-center">
          {/* IMAGEM */}
          <div className="bg-white/40 border border-[#213131]/10 rounded-[25px] p-6 flex items-center justify-center">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full max-h-[500px] object-contain"
            />
          </div>

          {/* INFO */}
          <div>
            <h1 className="text-3xl md:text-4xl uppercase tracking-[4px] font-light mb-6">
              {produto.nome}
            </h1>

            <p className="text-[#d6988e] text-2xl mb-8">{precoFormatado}</p>

            <p className="leading-8 opacity-70 mb-10 whitespace-pre-line">
              {produto.descricao}
            </p>

            <button
              className="
              w-full
              border
              border-[#213131]
              py-4
              uppercase
              tracking-[3px]
              text-[0.75rem]
              hover:bg-[#213131]
              hover:text-[#efede1]
              transition
            "
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
