import { Card } from "@nextui-org/react";
import React, { FC } from "react";
import { useRouter } from "next/router";

type props = {
  id: number;
};

const FavoriteCard: FC<props> = ({ id }) => {
  const router = useRouter();
  const onFavoriteClick = (): void => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Card hoverable clickable css={{ padding: 10 }} onClick={onFavoriteClick}>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={"100%"}
        height={140}
      />
    </Card>
  );
};

export default FavoriteCard;
