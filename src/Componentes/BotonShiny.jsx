import React from "react";
import { IoSparklesSharp } from "react-icons/io5";

const BotonShiny = ({ changeShiny, imagenPokemonIndicador }) => {
  return (
    <button
      onClick={changeShiny}
      className={
        imagenPokemonIndicador === false
          ? "bg-yellow-400 p-4 rounded-full transition ease-in-out"
          : "bg-gray-50 p-4 rounded-full transition ease-in-out"
      }
    >
      <IoSparklesSharp
        className={
          imagenPokemonIndicador === false
            ? "text-[36px] text-neutral-50 transition ease-in-out"
            : "text-[36px] text-neutral-600 transition ease-in-out"
        }
      />
    </button>
  );
};
export default BotonShiny;
