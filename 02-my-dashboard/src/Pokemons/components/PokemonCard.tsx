import Link from "next/link";
import React from "react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

interface Props {
  pokemons: SimplePokemon;
}

function PokemonCard({ pokemons }: Props) {
  return (
    <div>
      <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemons.id}.svg`}
              alt={pokemons.name}
              width={100}
              height={100}
              priority={false}
            />
            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
              {pokemons.name}
            </p>
            <div className="mt-5">
              <Link
                href={`/dashboard/pokemon/${pokemons.id}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                Más información
              </Link>
            </div>
          </div>
          <div className="border-b">
            <Link
              href="/dashboard/main"
              className="px-4 py-2 flex items-center hover:bg-gray-100 "
            >
              <div className="text-red-600">
                <CiHeart />
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  No es favorito
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
