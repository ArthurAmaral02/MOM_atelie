"use client";

import { FilterButton } from "../components/FilterButton";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { useEffect, useState } from "react";

export default function Produtos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [ordenacao, setOrdenacao] = useState("recentes");
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const response = await fetch("/api/produtos");
        const data = await response.json();
        setProdutos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    carregarProdutos();
  }, []);

  function normalizar(texto) {
    return (texto || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  const produtosFiltrados = produtos
    .filter((produto) => {
      if (categoriaSelecionada === "Todos") return true;

      return normalizar(produto.categoria) === normalizar(categoriaSelecionada);
    })
    .sort((a, b) => {
      const pa = Number(a.preco ?? 0);
      const pb = Number(b.preco ?? 0);

      if (ordenacao === "menor-preco") return pa - pb;
      if (ordenacao === "maior-preco") return pb - pa;

      return 0;
    });

  return (
    <div className="bg-[#efede1] min-h-screen font-poppins">
      <Header />

      <main className="pt-[140px] px-6 pb-20">
        {/* HEADER */}
        <section className="text-center mb-20">
          <h1 className="text-[2.5rem] tracking-[6px] uppercase text-[#213131] font-light mb-5">
            Produtos
          </h1>

          <p className="text-[#213131] opacity-70 max-w-[650px] mx-auto text-[1rem] leading-7 font-light">
            Peças feitas à mão com delicadeza, exclusividade e afeto para
            transformar o cotidiano em algo único.
          </p>
        </section>

        {/* FILTROS */}
        <section className="flex flex-wrap justify-between items-center gap-5 mb-14 max-w-[1300px] mx-auto">
          <div className="flex gap-3 flex-wrap">
            <FilterButton
              active={categoriaSelecionada === "Todos"}
              onClick={() => setCategoriaSelecionada("Todos")}
            >
              Todos
            </FilterButton>

            <FilterButton
              active={categoriaSelecionada === "Bonecos"}
              onClick={() => setCategoriaSelecionada("boneco")}
            >
              Bonecos
            </FilterButton>

            <FilterButton
              active={categoriaSelecionada === "Toalhas"}
              onClick={() => setCategoriaSelecionada("toalha")}
            >
              Toalhas
            </FilterButton>
          </div>

          {/* SELECT CORRIGIDO */}
          <select
            value={ordenacao}
            onChange={(e) => setOrdenacao(e.target.value)}
            className="bg-transparent border border-[#213131]/30 px-4 py-2 text-[0.75rem] uppercase tracking-[2px] outline-none text-[#213131]"
          >
            <option value="recentes">Mais recentes</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
          </select>
        </section>

        {/* GRID */}
        <section className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {produtosFiltrados.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </section>
      </main>
    </div>
  );
}
