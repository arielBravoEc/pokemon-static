import React, { useState, useEffect } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import FavoritePokemons from "../../components/ui/Favorites/FavoriteGrid";
import { pokemons } from "../../utils";

const FavoritesList = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(pokemons);
  }, []);
  return (
    <Layout title="Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesList;
