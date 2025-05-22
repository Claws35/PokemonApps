import React from "react";
//import { useStoreCarrito } from "../store/useStoreCarrito";

const CardPokemonDetalle = ({ pokemon }) => {
  /* const { sumarUno, cambiarContador, contador } = useStoreCarrito();
  console.log(contador); */
  return (
    <div className="bg-slate-100 flex justify-center flex-col text-center my-2 rounded-md">
      <h2 className="py-1">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="w-[200px] h-[200px] my-[2em] "
      />
      {/* <button onClick={() => sumarUno({ name: pokemon })}>hola</button> */}
    </div>
  );
};

export default CardPokemonDetalle;
