import React, { useState, useEffect, PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";
import { IoSparklesSharp, IoArrowBack } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Explosion from "react-explode/Boracay";
import miImagen from "../img/PokemonDetalleFodno.png";
import ElementoTag from "../Componentes/ElementoTag";
import CardPokemonDetalle from "../Componentes/CardPokemonDetalle";
import useStoreCarrito from "../store/useStoreCarrito";
import { FaStar } from "react-icons/fa";
import SeccionFavoritos from "../Componentes/SeccionFavoritos";
import BotonSeccionFavoritos from "../Componentes/BotonSeccionFavoritos";
import BotonStar from "../Componentes/BotonStar";
import BontonIrAtras from "../Componentes/BontonIrAtras";
import BotonShiny from "../Componentes/BotonShiny";
const typeClass = {
  normal: "bg-normal",
  fire: "bg-fire inline-block	p-2 rounded-lg",
  water: "bg-water",
  electric: "bg-electric",
  grass: "bg-grass",
  ice: "bg-ice",
  fighting: "bg-fighting",
  poison: "bg-poison",
  ground: "bg-ground",
  flying: "bg-flying",
  psychic: "bg-psychic",
  bug: "bg-bug",
  rock: "bg-rock",
  ghost: "bg-ghost",
  dragon: "bg-dragon",
  dark: "bg-dark",
  steel: "bg-steel",
  fairy: "bg-fairy",
};
const Detalle = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagenPokemon, setImagenPokemon] = useState(null);
  const [imagenPokemonIndicador, setImagenPokemonIndicador] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [explosionActive, setExplosionActive] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [pokemonEstadisticas, setPokemonEstadisticas] = useState([]);
  const [pokemonEstadisticasChart, setPokemonEstadisticasChart] = useState([]);
  const { addFavorite, removeFavorite, favorites } = useStoreCarrito();
  const [showFavorites, setShowFavorites] = useState(false);

  const { id } = useParams();

  const svgStyle = {
    strokeWidth: 22,
  };

  function mayusculaPrimeraLetra(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  const agregarDatosChart = (stats) => {
    console.log(stats);
    setPokemonEstadisticas(stats);
    const dataPrueba = [
      {
        subject: "HP",
        A: stats[0].base_stat,
        B: 255,
        fullMark: 255,
      },
      {
        subject: "Attack",
        A: stats[1].base_stat,
        B: 255,
        fullMark: 255,
      },
      {
        subject: "Defense",
        A: stats[2].base_stat,
        B: 255,
        fullMark: 255,
      },
      {
        subject: "Special Attack",
        A: stats[3].base_stat,
        B: 255,
        fullMark: 255,
      },
      {
        subject: "Special Defense",
        A: stats[4].base_stat,
        B: 255,
        fullMark: 255,
      },
      {
        subject: "Speed",
        A: stats[5].base_stat,
        B: 255,
        fullMark: 255,
      },
    ];
    setPokemonEstadisticasChart(dataPrueba);
  };

  const changeShiny = () => {
    if (
      pokemon.sprites.other["official-artwork"].front_default === imagenPokemon
    ) {
      setImagenPokemon(pokemon.sprites.other["official-artwork"].front_shiny);
      setImagenPokemonIndicador(false);
    } else {
      setImagenPokemon(pokemon.sprites.other["official-artwork"].front_default);
      setImagenPokemonIndicador(true);
    }

    setExplosionActive(true);

    // Desactivar la explosión después de 1 segundo (1000 milisegundos)
    setTimeout(() => {
      setExplosionActive(false);
    }, 500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (response.ok) {
          const data = await response.json();
          setPokemon(data);
          setImagenPokemon(
            data.sprites.other["official-artwork"].front_default
          );
          agregarDatosChart(data.stats);
        } else {
          throw new Error(`Error al cargar el Pokémon: ${response.statusText}`);
        }
      } catch (error) {
        setError(error.message || "Ocurrió un error al cargar el Pokémon.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();

    const fetchPokemonDetails = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      const data = await response.json();
      const spanishDescription = data.flavor_text_entries.find(
        (entry) => entry.language.name === "es"
      );
      setPokemonDetails(
        spanishDescription ? spanishDescription.flavor_text : ""
      );
    };

    fetchPokemonDetails();

    const fetchRandomPokemons = async () => {
      const randomIds = Array.from(
        { length: 3 },
        () => Math.floor(Math.random() * 800) + 1
      );
      const pokemonData = await Promise.all(
        randomIds.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
            res.json()
          )
        )
      );
      setPokemons(pokemonData);
    };

    fetchRandomPokemons();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pokemon) {
    return <div>No se encontró el Pokémon.</div>;
  }

  const toggleFavorite = () => {
    const isFavorite =
      favorites.filter((fav) => fav.id === pokemon.id).length > 0;
    console.log(isFavorite);
    if (isFavorite) {
      removeFavorite(pokemon);
    } else {
      addFavorite(pokemon);
    }
  };
  const toggleSeccionFavorites = () => {
    setShowFavorites(!showFavorites);
  };
  const isFavorite =
    favorites.filter((fav) => fav.id === pokemon.id).length > 0;

  return (
    <div className="">
      <div className="flex justify-center flex-wrap relative ">
        <div className=" start-0 absolute z-30">
          <BontonIrAtras />
        </div>
        <div className="end-0 absolute z-30">
          <div className="flex justify-end w-auto relative pt-9 pe-5">
            <BotonSeccionFavoritos
              toggleSeccionFavorites={toggleSeccionFavorites}
            />
          </div>
          {showFavorites && <SeccionFavoritos favorites={favorites} />}{" "}
        </div>

        <div className="absolute">
          <img
            className="object-cover object-bottom h-[500px] w-full"
            src={miImagen}
            alt=""
          />
        </div>
        {explosionActive && (
          <div className="absolute z-10 mt-12">
            <Explosion
              size="600"
              delay={0}
              color="#eab308"
              repeatDelay={0}
              repeat={0}
              style={svgStyle}
            />
          </div>
        )}
        {imagenPokemonIndicador === true && explosionActive && (
          <div className="absolute z-10 mt-12">
            <Explosion
              size="600"
              delay={0}
              color="#78716c"
              repeatDelay={0}
              repeat={0}
              style={svgStyle}
            />
          </div>
        )}
        <div className="flex justify-center bg-cover w-full absolute mt-2  ">
          <div className="pt-10 flex flex-col">
            <div className="flex flex-row-reverse transition ease-in-out">
              <BotonShiny
                changeShiny={changeShiny}
                imagenPokemonIndicador={imagenPokemonIndicador}
              />
            </div>
            <div>
              {" "}
              <img src={imagenPokemon} alt={pokemon.name} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-800"></div>

      <div className="flex justify-center">
        <div className=" max-w-[600px]">
          <div className="flex flex-col items-center gap-6 ">
            <h2 className="text-7xl font-bold text-center">
              {mayusculaPrimeraLetra(pokemon.name)}
            </h2>
            <div className="flex gap-2">
              <ElementoTag type={pokemon.types[0]} />
              {pokemon.types.length > 1 && (
                <ElementoTag type={pokemon.types[1]} />
              )}
            </div>
          </div>

          <div className="pt-10">
            <div className=" flex justify-between">
              <div>
                <p>Peso: {pokemon.weight} kg</p>
                <p>Altura: {pokemon.height} m</p>
              </div>
              <div className="flex justify-end w-auto relative">
                <BotonStar
                  isFavorite={isFavorite}
                  toggleFavorite={toggleFavorite}
                />
              </div>
            </div>

            <div className="py-4">
              <h3 className="font-bold">Detalle</h3>
              <p key={id}>{pokemonDetails}</p>
            </div>
            <div className="flex justify-center">
              <RadarChart
                width={550}
                height={400}
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={pokemonEstadisticasChart}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis domain={[0, "dataMax + 10"]} />

                {pokemonEstadisticas.map((entry, index) => (
                  <Radar
                    key={index}
                    name={`Statistic ${index + 1}`}
                    dataKey={`A`}
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.1}
                    label={{ value: entry.A, position: "top" }}
                  />
                ))}
              </RadarChart>
            </div>
          </div>

          <div className="flex gap-5 mb-[30px]">
            {pokemons.map((pokemon, index) => (
              <Link to={`/pokemon/${pokemon.id}`} key={index}>
                <CardPokemonDetalle pokemon={pokemon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
