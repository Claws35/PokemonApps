import { create } from "zustand";
const useStoreCarrito = create((set) => ({
  favorites: [],

  addFavorite: (pokemon) =>
    set((state) => ({ favorites: [...state.favorites, pokemon] })),
  removeFavorite: (pokemon) =>
    set((state) => {
      return {
        favorites: state.favorites.filter((fav) => fav.id !== pokemon.id),
      };
    }),
}));

export default useStoreCarrito;
