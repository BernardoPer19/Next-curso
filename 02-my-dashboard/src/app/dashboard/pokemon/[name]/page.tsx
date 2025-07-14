import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Pokemones } from "@/Pokemons/interfaces/pokemon";
import { PokemonsResponse } from "@/Pokemons/interfaces/pokemon-response";

export async function generateStaticParams() {
  const data: PokemonsResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.json());

  return data.results.map((pokemon) => ({
    name: pokemon.name,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  try {
    const { id, name } = await getPokemon(params.name);
    return {
      title: `#${id} - ${name}`,
      description: `Información detallada del Pokémon ${name}`,
    };
  } catch {
    return {
      title: "Pokémon no encontrado",
      description: "No se encontró información del Pokémon",
    };
  }
}

const getPokemon = async (name: string): Promise<Pokemones> => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      cache: "force-cache",
    });
    return await res.json();
  } catch {
    notFound(); // Navegación 404 automática
  }
};

// ❌ NO TIPES explícitamente 'params' aquí tampoco
export default async function PokemonPage({ params }: any) {
  const pokemon = await getPokemon(params.name);

  return (
    <main className="flex mt-5 flex-col items-center text-slate-800 px-4">
      <div className="relative flex flex-col items-center rounded-2xl w-full max-w-4xl mx-auto bg-white shadow-lg p-6 space-y-6">
        {/* Nombre e Imagen */}
        <header className="text-center">
          <h1 className="text-4xl font-bold capitalize mb-2">
            #{pokemon.id} - {pokemon.name}
          </h1>
          <Image
            src={
              pokemon.sprites.other?.["official-artwork"].front_default ?? ""
            }
            width={250}
            height={250}
            alt={`Imagen oficial de ${pokemon.name}`}
            className="mx-auto"
          />
        </header>

        {/* Tipos */}
        <section className="flex gap-3">
          {pokemon.types.map(({ type }) => (
            <span
              key={type.name}
              className={`px-4 py-1 rounded-full text-white font-medium capitalize text-sm ${
                typeColors[type.name] || "bg-gray-500"
              }`}
            >
              {type.name}
            </span>
          ))}
        </section>

        {/* Datos básicos */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full text-center text-xl">
          <div>
            <p className="text-gray-500">Altura</p>
            <p>{pokemon.height / 10} m</p>
          </div>
          <div>
            <p className="text-gray-500">Peso</p>
            <p>{pokemon.weight / 10} kg</p>
          </div>
          <div>
            <p className="text-gray-500">Base Experience</p>
            <p>{pokemon.base_experience}</p>
          </div>
          <div>
            <p className="text-gray-500">Orden</p>
            <p>{pokemon.order}</p>
          </div>
        </section>

        {/* Habilidades */}
        <section className="w-full">
          <h2 className="text-xl font-semibold mb-2">Habilidades</h2>
          <ul className="list-disc list-inside capitalize text-gray-700">
            {pokemon.abilities.map(({ ability }) => (
              <li key={ability.name}>{ability.name}</li>
            ))}
          </ul>
        </section>

        {/* Stats */}
        <section className="w-full">
          <h2 className="text-xl font-semibold mb-2">Estadísticas</h2>
          <div className="space-y-3">
            {pokemon.stats.map(({ stat, base_stat }) => (
              <div key={stat.name}>
                <div className="flex justify-between mb-1">
                  <span className="capitalize">{stat.name}</span>
                  <span>{base_stat}</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded">
                  <div
                    className="h-3 rounded bg-green-500"
                    style={{ width: `${Math.min(base_stat, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sprites */}
        <section className="w-full grid grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <h3 className="font-semibold mb-2">Sprites normales</h3>
            <div className="flex justify-center gap-4">
              <Image
                src={pokemon.sprites.front_default}
                alt="front"
                width={80}
                height={80}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt="back"
                width={80}
                height={80}
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <h3 className="font-semibold mb-2">Sprites shiny</h3>
            <div className="flex justify-center gap-4">
              <Image
                src={pokemon.sprites.front_shiny}
                alt="front shiny"
                width={80}
                height={80}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt="back shiny"
                width={80}
                height={80}
              />
            </div>
          </div>
        </section>

        {/* Movimientos (limitados) */}
        <section className="w-full">
          <h2 className="text-xl font-semibold mb-2">Movimientos (Top 10)</h2>
          <div className="flex flex-wrap gap-2">
            {pokemon.moves.slice(0, 10).map(({ move }) => (
              <span
                key={move.name}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm capitalize"
              >
                {move.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

// 🎨 Colores por tipo de Pokémon
const typeColors: Record<string, string> = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400 text-black",
  ice: "bg-cyan-300 text-black",
  fighting: "bg-red-700",
  poison: "bg-purple-600",
  ground: "bg-yellow-700",
  flying: "bg-indigo-300 text-black",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-yellow-800",
  ghost: "bg-purple-800",
  dragon: "bg-indigo-700",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-300 text-black",
};
