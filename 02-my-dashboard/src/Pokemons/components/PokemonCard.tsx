"use client";
import Link from "next/link";
import React from "react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { toggleFavorite } from "@/store/pomeons/pokemons";

interface Props {
  pokemons: SimplePokemon;
}

function PokemonCard({ pokemons }: Props) {
  const { id, name } = pokemons;

  const dispatch = useAppDispatch();

const isFavorite = useAppSelector((state) => !!state.pokemons[id.toString()]);

  const onToggle = () => {
    dispatch(toggleFavorite(pokemons));
    console.log(pokemons);
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            width={100}
            height={100}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 hover:bg-gray-700"
            >
              Más información
            </Link>
          </div>
        </div>

        {/* Botón de favorito */}
        <div onClick={onToggle} className="border-b">
          <button className="w-full px-4 py-2 flex items-center hover:bg-gray-100">
            <div className={`text-red-600`}>
              {isFavorite ? <FaHeart /> : <CiHeart />}
            </div>
            <div className="pl-3 text-left">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Marcado como favorito" : "No es favorito"}
              </p>
              <p className="text-xs text-gray-500">
                Click para {isFavorite ? "quitar" : "agregar"} favorito
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
