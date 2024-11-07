import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import PokemonDetail from "../pages/PokemonDetail";
import LoginPage from "../pages/LoginPage";

export default function AppRoutes() {
    return (
        <Routes>
      {/* Route untuk login page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Main layout dengan sub routing */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="pokemon/:id" element={<PokemonDetail />} />
      </Route>
    </Routes>
    );
}
