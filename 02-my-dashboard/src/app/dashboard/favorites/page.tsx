import FavoritesPokemons from "@/Pokemons/components/favoritesPOkemons";

export const metadata = {
  title: "favorites",
  descripcion: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
};

async function PokemonPage() {
  return (
    <div className="flex  flex-wrap gap-20 w-[60%] m-auto">
      <span className="text-5xl">
        Listado de pokemon Favoritos
        <small className="text-violet-500">Global State</small>
      </span>

      <FavoritesPokemons />
    </div>
  );
}

export default PokemonPage;
