"use client";

import { useEffect, useState } from "react";
import { Header } from "@/app/components/Header";

export default function ProdutoPage({ params }) {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarProduto() {
      try {
        const resolvedParams = await params;

        const response = await fetch(`/api/produtos/${resolvedParams.id}`);

        const data = await response.json();

        setProduto(data);
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarProduto();
  }, [params]);

  if (loading) {
    return (
      <div className="bg-[#efede1] min-h-screen font-poppins">
        <Header />

        <main className="pt-[180px] flex justify-center">
          <p className="text-[#213131] tracking-[3px] uppercase text-sm">
            Carregando produto...
          </p>
        </main>
      </div>
    );
  }

  if (!produto) {
    return (
      <div className="bg-[#efede1] min-h-screen font-poppins">
        <Header />

        <main className="pt-[180px] flex justify-center">
          <p className="text-red-500 tracking-[2px] uppercase text-sm">
            Produto não encontrado
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-[#efede1] min-h-screen font-poppins">
      <Header />

      <main className="pt-[140px] px-6 pb-24 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="overflow-hidden bg-[#e5e1d3]">
            <a href="/produtos" className="inline-block mb-10 uppercase tracking-[3px] text-[0.75rem] border border-[#213131] px-6 py-3 text-[#213131] hover:bg-[#213131] hover:text-[#efede1] transition-all">
            ← Voltar para produtos</a>
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="
                w-full
                h-[700px]
                object-cover
                hover:scale-[1.02]
                transition-transform
                duration-500
              "
            />
          </div>

          <div className="pt-4">
            <p
              className="
                uppercase
                tracking-[4px]
                text-[0.75rem]
                text-[#213131]/50
                mb-4
              "
            >
              MOM Ateliê
            </p>

            <h1
              className="
                text-[3rem]
                leading-tight
                text-[#213131]
                font-light
                mb-6
              "
            >
              {produto.nome}
            </h1>

            <p
              className="
                text-[#d6988e]
                text-[1.8rem]
                mb-8
                font-light
              "
            >
              {produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <div
              className="
                w-full
                h-[1px]
                bg-[#213131]/10
                mb-8
              "
            />

            <p
              className="
                text-[#213131]/75
                leading-8
                text-[1rem]
                mb-10
              "
            >
              {produto.descricao}
            </p>

            <a
              href={`https://wa.me/558192282553?text=${encodeURIComponent(
                `Olá! Tenho interesse no produto: ${produto.nome}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="

              inline-block
              uppercase
              tracking-[3px]
              text-[0.75rem]
              border
              border-[#213131]
              px-8
              py-4
              text-[#213131]
              hover:bg-[#213131]
              hover:text-[#efede1]
              transition-all
              "
            >
              Entrar em contato
            </a>
            
          </div>
        </div>
      </main>
    </div>
  );
}
