import React, { useState, useEffect } from "react";
import Logo from "../img/International_Pokémon_logo.svg";
import CardSkeleton from "../Componentes/CardSkeleton";
import styles from "../styles/Inicio.module.css";
import "atropos/css";
import Card from "../Componentes/Card";
import cloudImage from "../img/nube1.png";
import cloudImage2 from "../img/nube (1).png";
import cloudImage1 from "../img/nube (2).png";
import cloudImage3 from "../img/nube (3).png";
import useStoreCarrito from "../store/useStoreCarrito";
import SeccionFavoritos from "../Componentes/SeccionFavoritos";
import BotonSeccionFavoritos from "../Componentes/BotonSeccionFavoritos";
import BotonTipoPokemon from "../Componentes/BotonTipoPokemon";
import BuscadorPokemon from "../Componentes/BuscadorPokemon";
import fondoPokeInicio2 from "../img/fondoPokeInicio2.png";
const Inicio = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const { favorites } = useStoreCarrito();
  const [cantidadDeFavoritos, setCantidadDeFavoritos] = useState(0);

  const tiposPokemon = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const fetchPokemons = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const pokemonList = data.results;

        const pokemonData = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return await response.json();
          })
        );
        setCantidadDeFavoritos(pokemonData.length);
        setPokemons(pokemonData);
        setLoading(false); // Cuando termina la carga, cambia el estado
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchPokemons();
  }, []);

  function mayusculaPrimeraLetra(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  const levantarInformacionBuscador = (event) => {
    setSearch(event.target.value);
  };
  const toggleType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const filteredData = pokemons.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(search.toLowerCase());
    const typeMatch =
      selectedTypes.length === 0 ||
      item.types.some((type) => selectedTypes.includes(type.type.name));

    return nameMatch && typeMatch;
  });
  //setCantidadDeFavoritos(filteredData.length);

  return (
    <div>
      <div className="bg-imagen-fondo-Inicio h-[700px]">
        <nav className="flex justify-between">
          <img
            className="w-[300px] pt-[2em] ps-[2em]"
            src={Logo}
            alt="Logo"
          ></img>
          <div className="mt-[2em] me-[2em]">
            <BotonSeccionFavoritos toggleSeccionFavorites={toggleFavorites} />
          </div>
        </nav>

        <div className={styles.cloudContainer}>
          {showFavorites && <SeccionFavoritos favorites={favorites} />}
          <img
            src={cloudImage1}
            className={`${styles.cloud} ${styles.cloud1}`}
            alt="Cloud"
          />

          <img
            src={cloudImage2}
            className={`${styles.cloud} ${styles.cloud2}`}
            alt="Cloud"
          />
          <img
            src={cloudImage3}
            className={`${styles.cloud} ${styles.cloud3}`}
            alt="Cloud"
          />
        </div>
      </div>
      <div className="bg-slate-50">
        <div className="max-w-screen-md m-auto py-10">
          {" "}
          <BuscadorPokemon
            levantarInformacionBuscador={levantarInformacionBuscador}
          />
          <div className="max-w-screen-md m-auto py-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {tiposPokemon.map((tipo) => (
                <BotonTipoPokemon
                  key={tipo}
                  tipo={tipo}
                  toggleType={toggleType}
                  selectedTypes={selectedTypes}
                  mayusculaPrimeraLetra={mayusculaPrimeraLetra}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl  m-auto ">
          <div className="">
            <p className="ms-10 mb-3">Se encontraron {filteredData.length}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-around min-h-[800px]  gap-4  m-auto ">
            {loading
              ? Array.from({ length: 8 }, (_, index) => (
                  <CardSkeleton key={index} />
                ))
              : filteredData.map((pokemon) => (
                  <Card
                    key={pokemon.id}
                    pokemon={pokemon}
                    mayusculaPrimeraLetra={mayusculaPrimeraLetra}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
