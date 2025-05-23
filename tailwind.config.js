/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient-normal": "radial-gradient(circle, #ff6b6b, #48bb78)",
        "imagen-fondo": "url('../src/img/fondoPoke3.png')",
        "imagen-fondo-Inicio": "url('../src/img/PokeonFondoInicio2.jpg')",
        "imagen-fondo-Error": "url('../src/img/Error404.png')",
      },
      colors: {
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
      },
      height: {
        800: "560px",
      },
    },
  },
  plugins: [],

  purge: {
    content: ["/index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    options: {
      safelist: [
        "bg-normal",
        "bg-fire",
        "bg-water",
        "bg-electric",
        "bg-grass",
        "bg-ice",
        "bg-fighting",
        "bg-poison",
        "bg-ground",
        "bg-flying",
        "bg-psychic",
        "bg-bug",
        "bg-rock",
        "bg-ghost",
        "bg-dragon",
        "bg-dark",
        "bg-fairy",
        "bg-steel",
        "rounded-[10px]",
        "px-1",
        "py-0.5",
      ],
    },
  },
};
