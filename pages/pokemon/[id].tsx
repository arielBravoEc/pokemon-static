import { useState } from "react";

import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Pokemon } from "../../interfaces";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import {
  existPokemonInFavorites,
  getPokemonInfo,
  toggleFavorite,
} from "../../utils";

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter();
  //console.log(router.query);
  //console.log(pokemon);

  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);

  const onToggleFavorite = () => {
    toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };
  //executes in the backend
  //localStorage.getItem("favorites");

  //executes in the frontend
  useEffect(() => {
    //solution for error hydration
    setIsInFavorites(existPokemonInFavorites(pokemon.id));
  }, [pokemon.id]);

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {isInFavorites ? "En favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //create array from 1 yo 151
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: "blocking",
    // fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonInfo(id);
  if (!pokemon) {
    //if dosent exists
    return {
      redirect: {
        destination: "/",
        permanent: false, // porque puede ser que ahora ya exista un pokemon en ese id
      },
    };
  }
  return {
    props: { pokemon },
    revalidate: 86400, // in seconds
  };
};

export default PokemonPage;
