"use client";

import { useState } from "react";

export default function Home() {
  const [mensagem, setMensagem] = useState("");
  const [nome, setNome] = useState("");

  async function consultarAPI() {
    const resposta = await fetch(`/api/ola?nome=${encodeURIComponent(nome)}`);

    const dados = await resposta.json();

    setMensagem(dados.mensagem);
  }

  return (
    <main>
      <h1>Teste de Comunicação</h1>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <button onClick={consultarAPI}>Consultar API</button>
      <p>{mensagem}</p>
    </main>
  );

}