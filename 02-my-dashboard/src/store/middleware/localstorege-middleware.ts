import { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  const result = next(action);

  const state = storeAPI.getState();
  const favorites = state.pokemons;

  // Guardar en localStorage
  localStorage.setItem('favorite-pokemons', JSON.stringify(favorites));

  return result;
};
