import { Header } from "../components/Header";
import Link from "next/link";

export default function Sobre() {
  return (
    <div className="bg-[#efede1] min-h-screen font-poppins text-[#213131] selection:bg-[#d6988e] selection:text-[#efede1]">
      <Header />

      <main className="pt-[140px] px-6 pb-24">
        <div className="max-w-[900px] mx-auto mb-10">
          <Link
            href="/"
            className="
              inline-flex items-center gap-2
              text-[0.75rem] uppercase tracking-[3px]
              text-[#213131] opacity-60 hover:opacity-100
              transition-all duration-300
            "
          >
            <span>←</span> Voltar
          </Link>
        </div>

        <section className="max-w-[900px] mx-auto text-center mb-16">
          <p className="uppercase tracking-[5px] text-[0.75rem] text-[#d6988e] mb-4 font-medium">
            Nossa Essência
          </p>
          <h1 className="text-[2.5rem] md:text-[3.5rem] tracking-[6px] uppercase font-light text-[#213131]">
            Sobre a MOM
          </h1>
        </section>

        <article className="max-w-[900px] mx-auto bg-[#ffffff]/40 backdrop-blur-sm border border-[#213131]/10 rounded-[40px] overflow-hidden shadow-[0_10px_40px_-15px_rgba(33,49,49,0.05)]">
          {/* Logo Centralizada */}
          <div className="pt-16 pb-8 flex justify-center">
            <img
              src="/Logo_principal.png"
              alt="MOM Ateliê"
              className="w-auto h-[100px] md:h-[140px] object-contain opacity-90"
            />
          </div>

          <div className="px-8 md:px-20 pb-20 space-y-8 text-[1.05rem] leading-[2.2rem] font-light text-[#213131]/80">
            {/* Introdução com Letra Capitular (Estilo Editorial) */}
            <p className="first-letter:text-[4.5rem] first-letter:font-light first-letter:text-[#d6988e] first-letter:mr-3 first-letter:float-left first-line:uppercase first-line:tracking-[2px] first-line:text-[#213131]">
              A MOM Ateliê nasceu após uma linda trajetória de 32 anos dedicados
              à educação, marcada pelo cuidado, pela dedicação e pelo amor em
              ensinar. Com a chegada da aposentadoria, um novo capítulo começou
              a ser escrito — agora guiado pela arte, pela criatividade e pela
              delicadeza do trabalho artesanal.
            </p>

            <p>
              O que antes era um talento cultivado com carinho transformou-se em
              uma verdadeira forma de expressão. Entre pontos delicados, tintas,
              pincéis e detalhes feitos à mão, cada criação passou a carregar
              sentimentos, memórias e inspiração. Assim surgiu a MOM Ateliê: um
              espaço onde a imaginação ganha vida e onde cada peça é produzida
              com amor, paciência e sensibilidade.
            </p>

            {/* Caixa de Destaque - A História do Nome */}
            <div className="my-16 bg-[#213131] text-[#efede1] rounded-[30px] p-10 md:p-14 relative shadow-lg overflow-hidden">
              {/* Aspas decorativas de fundo */}
              <span className="absolute top-2 right-6 text-[8rem] text-[#d6988e] opacity-10 font-serif leading-none select-none">
                "
              </span>

              <p className="uppercase tracking-[4px] text-[0.75rem] text-[#d6988e] mb-8 font-medium">
                O Significado do Nome
              </p>

              <div className="space-y-6 text-[1rem] leading-[2rem] md:leading-[2.2rem] opacity-90 relative z-10 font-light">
                <p>
                  A escolha do nome{" "}
                  <strong className="text-[#d6988e] font-normal">MOM</strong>{" "}
                  nasceu de uma memória afetiva muito especial. Quando criança,
                  eu era chamada carinhosamente por esse apelido, principalmente
                  pelo meu saudoso pai, Bento, que deixou marcas eternas de amor
                  e carinho em minha vida.
                </p>
                <p>
                  Com o passar do tempo, o nome ganhou um significado ainda mais
                  profundo e especial. Hoje, as letras{" "}
                  <strong className="text-[#d6988e] font-normal">“M M”</strong>{" "}
                  representam os maiores amores da minha vida: Mariana e
                  Manuela, minhas filhas, minhas inspirações diárias e a razão
                  de tanto amor dedicado em cada criação do MOM Ateliê.
                </p>
              </div>
            </div>

            <p>
              Mais do que um ateliê, a MOM Ateliê representa a realização de um
              sonho e a continuidade de uma história construída com afeto,
              dedicação e memórias especiais. Cada trabalho é único, pensado
              cuidadosamente para transmitir encanto, aconchego e beleza
              artesanal em cada detalhe.
            </p>

            {/* Fechamento Poético */}
            <div className="pt-12 mt-12 border-t border-[#213131]/10 text-center">
              <p className="text-[1.2rem] md:text-[1.4rem] leading-relaxed text-[#d6988e] font-light italic">
                "São peças feitas à mão, com carinho e personalidade, levando
                emoção, delicadeza e amor para cada ambiente e para cada pessoa
                que recebe um pedacinho desse sonho chamado MOM Ateliê."
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
