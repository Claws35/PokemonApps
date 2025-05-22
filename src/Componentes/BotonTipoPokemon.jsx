import React from "react";

const BotonTipoPokemon = ({
  tipo,
  toggleType,
  selectedTypes,
  mayusculaPrimeraLetra,
}) => {
  return (
    <button
      key={tipo}
      onClick={() => toggleType(tipo)}
      className={`rounded-full px-4 py-2 border ${
        selectedTypes.includes(tipo)
          ? `bg-${tipo} text-white`
          : "bg-white text-gray-800"
      } hover:bg-indigo-100 focus:outline-none focus:ring focus:border-indigo-300`}
    >
      {mayusculaPrimeraLetra(tipo)}
    </button>
  );
};

export default BotonTipoPokemon;
