import Parse from "@/lib/parse";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  try {
    const params = await context.params;

    const Produto = Parse.Object.extend("Produtos");
    const query = new Parse.Query(Produto);

    const produto = await query.get(params.id);

    return NextResponse.json({
      id: produto.id,
      nome: produto.get("nome"),
      preco: produto.get("preco"),
      descricao: produto.get("descricao"),
      imagem: produto.get("imagem")?.url(),
      
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
