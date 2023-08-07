import React, { useState } from "react";
import buscarCidade from "./services/weatherApi";
import dadosClima from "./helpers/dadosClima";
import ClimaCard from "./components/ClimaCard/ClimaCard";

function App() {
  const [nomeCidade, setNomeCidade] = useState("");
  const [cidade, setDadosCidade] = useState(dadosClima);

  const pesquisarCidade = async (event) => {
    event.preventDefault();

    await buscarCidade(nomeCidade).then((resposta) => setDadosCidade(resposta));
  };
  return (
    
    <div className="flex flex-col w-full h-screen items-center justify-center min-w-[220px]">
      <form onSubmit={pesquisarCidade} className="flex items-center">
        <input
          type="text"
          className="p-2 rounded-lg outline-none border border-gray-300"
          value={nomeCidade}
          onChange={({ target: { value } }) => setNomeCidade(value)}
          placeholder="Busque a cidade..."
        />
        <button className="bg-blue-600 p-2 rounded-lg ml-3 text-white font-bold" type="submit">
          Pesquisar
        </button>
      </form>
      <ClimaCard cidade={cidade} />
    </div>
  );
}

export default App;
