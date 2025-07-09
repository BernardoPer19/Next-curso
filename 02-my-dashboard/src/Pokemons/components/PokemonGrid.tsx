import React from "react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

function PokemonGrid({ pokemons }: Props) {
  return (
    <div className="flex flex-wrap gap-20 items-center justify-center">
      {pokemons.map((poke) => (
          <PokemonCard key={poke.id} pokemons={poke}/>
      ))}
    </div>
  );
}

export default PokemonGrid;
