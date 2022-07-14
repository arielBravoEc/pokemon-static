const toggleFavorite = (id: number) => {
  //console.log("toggle called");

  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existPokemonInFavorites = (id: number): boolean => {
  //if is executing in server side, return false to solve error 500
  if (typeof window === "undefined") return false;
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export { toggleFavorite, existPokemonInFavorites, pokemons };
