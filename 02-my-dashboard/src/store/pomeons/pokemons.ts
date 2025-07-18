import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/Pokemons/interfaces/simple-pokemon";

export interface PokemonsState {
  [key: string]: SimplePokemon;
}

const loadFromLocalStorage = (): PokemonsState => {
  const data = localStorage.getItem('favorite-pokemons');
  return data ? JSON.parse(data) : {};
};

const initialState: PokemonsState = loadFromLocalStorage();

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload
      const { id } = pokemon

      if (!!state[id]) {
        delete state[id]
        return
      }

      state[id] = pokemon;
    },

  },
});

export const { toggleFavorite } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
