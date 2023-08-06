import React from 'react';

function App() {
  return (
   <div className="flex w-full h-screen items-center justify-center">

     <form>
      <input
      type="text"
      className="p-2 rounded-lg outline-none"
      placeholder="Busque a cidade..."/>
      <button
      className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold">
        Pesquisar
        </button>
    </form>

   </div>
  )
}

export default App;
