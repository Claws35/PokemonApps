import React from "react";
import { Link } from "react-router-dom";
import Atropos from "atropos/react";
import styles from "../styles/Inicio.module.css";
import ElementoTag from "./ElementoTag";
import { FaStar } from "react-icons/fa";
import useStoreCarrito from "../store/useStoreCarrito";
import BotonStar from "./BotonStar";

const Card = ({ pokemon, mayusculaPrimeraLetra }) => {
  const { addFavorite, removeFavorite, favorites } = useStoreCarrito();
  const isFavorite =
    favorites.filter((fav) => fav.id === pokemon.id).length > 0;
  const toggleFavorite = () => {
    console.log(isFavorite);
    if (isFavorite) {
      removeFavorite(pokemon);
    } else {
      addFavorite(pokemon);
    }
    console.log(favorites);
  };
  return (
    <Atropos activeOffset={40} shadowScale={0} key={pokemon.id}>
      <div className={`${styles.card} flex flex-col`}>
        <div className="flex justify-end w-auto">
          <BotonStar isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
        </div>
        <Link
          to={`/pokemon/${pokemon.id}`}
          key={pokemon.id}
          className="atropos-card"
        >
          <div className="flex flex-col items-center justify-center">
            {" "}
            <h2 className="text-lg">{mayusculaPrimeraLetra(pokemon.name)}</h2>
            <img
              className="w-[200px] h-[200px] my-[2em]"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
            <div className="flex gap-2">
              <ElementoTag type={pokemon.types[0]} />
              {pokemon.types.length > 1 && (
                <ElementoTag type={pokemon.types[1]} />
              )}
            </div>
          </div>
        </Link>
      </div>
    </Atropos>
  );
};

export default Card;
