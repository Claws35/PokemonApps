import React from "react";
import useStoreCarrito from "../store/useStoreCarrito";
import { Link } from "react-router-dom";
const CardFavoritos = ({ pokemon, index }) => {
  const { removeFavorite } = useStoreCarrito();
  return (
    <div
      key={index}
      className="flex items-center justify-between bg-slate-50 m-5 rounded-lg"
    >
      <Link
        to={`/pokemon/${pokemon.id}`}
        key={pokemon.id}
        className="atropos-card flex items-center"
      >
        <img
          className="w-[100px] h-[100px]"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <p>{pokemon.name}</p>
      </Link>

      <button
        className="m-2 px-2 py-1 bg-slate-400 rounded-lg text-white"
        onClick={() => removeFavorite(pokemon)}
      >
        Quitar
      </button>
    </div>
  );
};

export default CardFavoritos;
