"use client";

import { useState } from "react";
import Parse from "../../lib/parse";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormInput } from "../components/FormInput";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const router = useRouter();

  const handleCadastro = async (e) => {
    e.preventDefault();
    setCarregando(true);

    const user = new Parse.User();
    user.set("username", email);
    user.set("email", email);
    user.set("password", senha);
    user.set("nomeCompleto", nome);

    try {
      await user.signUp();
      alert("Conta criada com sucesso!");
      router.push("/");
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <main className="bg-[#efede1] min-h-screen flex items-center justify-center font-Poppins relative px-4">
      <Link
        href="/"
        className="absolute top-6 left-6 text-[#213131] text-[0.75rem] font-bold hover:underline"
      >
        ← VOLTAR PARA O INÍCIO
      </Link>

      <div style={{ width: "100%", maxWidth: "360px", textAlign: "center" }}>
        <img
          src="/sublogo.png"
          alt="MOM"
          style={{
            width: "200px",
            height: "auto",
            display: "block",
            margin: "0 auto 10px",
          }}
        />

        <h2
          style={{
            fontFamily: "Poppins",
            color: "#d6988e",
            letterSpacing: "4px",
            fontSize: "0.8rem",
            marginBottom: "30px",
            fontWeight: "400",
          }}
        >
          CRIAR NOVA CONTA
        </h2>

        <form
          onSubmit={handleCadastro}
          style={{ width: "100%", textAlign: "left" }}
        >
          <FormInput
            label="NOME COMPLETO"
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder={"Digite seu nome completo"}
          />

          <FormInput
            label="E-MAIL"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Digite seu e-mail"}
          />

          <FormInput
            label="SENHA"
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder={"Digite uma senha"}
          />

          <FormInput
            label="CONFIRMAR SENHA"
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder={"Digite novamente a senha"}
          />

          <button
            type="submit"
            disabled={carregando}
            style={{
              ...buttonStyle,
              backgroundColor: carregando ? "#ccc" : "#213131",
            }}
          >
            {carregando ? "CADASTRANDO..." : "FINALIZAR CADASTRO"}
          </button>
        </form>

        <Link
          href="/login"
          style={{
            marginTop: "30px",
            display: "block",
            color: "#213131",
            fontSize: "0.75rem",
            textDecoration: "none",
            fontFamily: "Poppins",
          }}
        >
          Já possui conta? <strong>Entrar</strong>
        </Link>
      </div>
    </main>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "16px",
  color: "#efede1",
  border: "none",
  cursor: "pointer",
  fontFamily: "Poppins",
  letterSpacing: "2px",
  fontSize: "0.75rem",
  fontWeight: "bold",
};
