"use client";

import { useState } from "react";

export default function Home() {
  const [mensagem, setMensagem] = useState("");

  async function consultarAPI() {
    const resposta = await fetch("/api/ola");

    const dados = await resposta.json();

    setMensagem(dados.mensagem);
  }

  return (
    <main>
      <h1>Teste de Comunicação</h1>
      <button onClick={consultarAPI}>Consultar API</button>
      <p>{mensagem}</p>
    </main>
  );

}