"use client";

import { useEffect, useState } from "react";
import Parse from "../lib/parse";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { CategoryCard } from "./components/CategoryCard";

export default function Home() {
  const [usuario, setUsuario] = useState(undefined);

  useEffect(() => {
    const currentUser = Parse.User.current();
    setUsuario(currentUser);
  }, []);

  if (usuario === undefined) {
    return null;
  }

  return (
    <div className="bg-[#efede1] min-h-screen font-Poppins">
      <Header usuario={usuario} />

      <Hero />

      <section className="py-[80px] px-[50px] text-center">
        <h2
          className="
            text-[1.2rem]
            tracking-[4px]
            text-[#d6988e]
            mb-[50px]
            uppercase
          "
        >
          Nossas Categorias
        </h2>

        <div
          className="
            grid
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-[25px]
          "
        >
          <CategoryCard title="Necessaires" image="/images/necessaire.jpg" />

          <CategoryCard title="Bolsas" image="/images/bolsa.jpg" />

          <CategoryCard title="Mochilas" image="/images/mochila.jpg" />

          <CategoryCard title="Acessórios" image="/images/acessorio.jpg" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
