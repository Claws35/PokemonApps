import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const BuscadorPokemon = ({ levantarInformacionBuscador }) => {
  return (
    <div>
      <label
        htmlFor="Buscar"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Buscar
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm pr-[20px]">
            <HiOutlineMagnifyingGlass />
          </span>
        </div>
        <input
          type="text"
          name="Buscar"
          id="Buscar"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Busca tu pokemon favorito"
          onChange={levantarInformacionBuscador}
        />
      </div>
    </div>
  );
};

export default BuscadorPokemon;
