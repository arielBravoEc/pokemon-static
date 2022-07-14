import React, { FC } from "react";
import { Grid } from "@nextui-org/react";
import FavoriteCard from "./FavoriteCard";

interface props {
  favoritePokemons: number[];
}
const FavoriteGrid: FC<props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((id) => (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
          <FavoriteCard id={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default FavoriteGrid;
