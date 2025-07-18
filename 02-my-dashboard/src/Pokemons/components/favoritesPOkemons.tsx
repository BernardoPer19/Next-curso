"use client";
import React, { useState } from "react";
import PokemonGrid from "./PokemonGrid";
import { useAppSelector } from "@/store/hooks/hooks";
import { BiSad } from "react-icons/bi";

const FavoritesPokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );

  const [pokemonsFavs] = useState(favoritePokemons);

  return (
    <>
      {/* <PokemonGrid pokemons={Object.values(favoritePokemons)} /> */}
      {pokemonsFavs.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={pokemonsFavs} />
      )}
    </>
  );
};

export default FavoritesPokemons;

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <BiSad size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
