import PokemonGrid from "@/Pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/Pokemons/interfaces/pokemon-response";
import { SimplePokemon } from "@/Pokemons/interfaces/simple-pokemon";
import React from "react";

const getPokemons = async (limit = 20, ofset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${ofset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: Number(pokemon.url.split("/").at(-2)!),
    name: pokemon.name,
  }));

  return pokemons;
};

async function PokemonPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex  flex-wrap gap-20 w-[60%] m-auto">
      <span className="text-5xl">
        Listado de pokemon <small>static</small>
      </span>

      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}

export default PokemonPage;

