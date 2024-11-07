import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPokemonDetail } from "../redux/Reducer"; 

export default function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { detail: pokemon, loading, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (!pokemon || pokemon.id !== parseInt(id)) {
      dispatch(fetchPokemonDetail(id));
    }
  }, [id, dispatch, pokemon]);

  // Loading state ini
  if (loading) return <div className="text-center text-xl">Loading...</div>;

  // Error state ini
  if (error) return <div className="text-red-500 text-center text-xl">Error: {error}</div>;

  if (!pokemon) return <div>No Pokémon found!</div>;

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <div className="w-full max-w-md rounded-lg overflow-hidden shadow-xl">
        <div className="bg-red-500 flex justify-center items-center p-6 relative">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-32 h-32 object-contain"
          />
          <h2 className="absolute bottom-0 bg-white text-center w-full text-2xl font-bold text-red-500 p-2 rounded-t-lg">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
        </div>

        <div className="h-2 bg-black"></div>

        <div className="p-6 bg-white text-center text-red-700">
          <p className="text-lg font-semibold text-gray-800 mb-2"><strong>Number:</strong> {pokemon.id}</p>
          <p className="text-lg font-semibold text-gray-800 mb-4"><strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(", ")}</p>

          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-800 mb-2">Stats</p>
            <ul className="space-y-2">
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name} className="text-sm">
                  {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-1">
            <button
              onClick={() => navigate(-1)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
