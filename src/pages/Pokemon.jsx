import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "../redux/Reducer"; 
import { Link } from "react-router-dom";

export default function Pokemon() {
  const dispatch = useDispatch();

  const { data: pokemon, loading, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonData());
  }, [dispatch]);

  // Loading state
  if (loading) return <div className="text-center text-xl">Loading...</div>;

  // Error state
  if (error) return <div className="text-red-500 text-center text-xl">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-yellow-400">
        Pokémon List
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemon.map((poke) => (
          <div
            key={poke.id} 
            className="bg-white shadow-xl rounded-lg overflow-hidden"
          >
            <div className="bg-red-500 p-4 flex justify-center items-center">
              <img
                src={poke.sprites.front_default}
                alt={poke.name}
                className="w-24 h-24"
              />
            </div>
            
            <div className="h-2 bg-black"></div>

            <div className="p-4 bg-white text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)} 
              </h2>
              <Link
                to={`/pokemon/${poke.id}`}
                className="bg-yellow-400 text-red-800 font-semibold py-1 px-4 rounded-lg inline-block mt-2"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
