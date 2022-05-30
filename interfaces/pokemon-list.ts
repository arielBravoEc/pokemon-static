export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: SmallPokemon[];
}

//in interfaces, if add another field, this field is not mandatory.

export interface SmallPokemon {
  name: string;
  url: string;
  id: number;
  img: string;
}
