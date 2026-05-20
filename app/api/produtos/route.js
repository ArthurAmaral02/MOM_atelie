import Parse from "@/lib/parse";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const Produto = Parse.Object.extend("Produtos");
    const query = new Parse.Query(Produto);

    const results = await query.find();

    const produtosLimpos = results.map((p) => ({
      id: p.id,
      nome: p.get("nome"),
      preco: p.get("preco"),
      descricao: p.get("descricao"),
      imagem: p.get("imagem")?.url(),
      categoria: p.get("categoria"),
      createdAT: p.createdAt,
    }));

    return NextResponse.json(produtosLimpos);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
