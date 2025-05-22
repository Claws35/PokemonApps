import React from "react";
import CardFavoritos from "./CardFavoritos";

const SeccionFavoritos = ({ favorites }) => {
  return (
    <div className="bg-slate-100 w-[350px] absolute z-50 right-4 p-3 rounded-lg h-auto overflow-y-auto max-h-[500px] mt-1">
      <h2>Mis Pokémon favoritos</h2>
      {favorites.length === 0 && <p className="py-5">No hay favoritos</p>}
      {favorites.map((pokemon, index) => (
        <CardFavoritos key={index} pokemon={pokemon} index={index} />
      ))}
    </div>
  );
};

export default SeccionFavoritos;
