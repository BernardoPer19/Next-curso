import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter/counterSlice';
import { pokemonsSlice } from './pomeons/pokemons'
import { localStorageMiddleware } from './middleware/localstorege-middleware';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(localStorageMiddleware)
});

// Tipado del state global y dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
