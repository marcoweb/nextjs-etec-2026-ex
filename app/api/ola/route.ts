export async function GET(request: Request) {
    const url = new URL(request.url);
    const nome = url.searchParams.get("nome");

    return Response.json({
        mensagem: `Olá ${nome}! Seja Bem Vindo!!!`
    });
}