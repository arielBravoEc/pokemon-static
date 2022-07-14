import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";

export const NavBar = () => {
  const router = useRouter();
  const goHome = () => {
    router.push(`/`);
  };
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        onClick={goHome}
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        alt="Icono de la App"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text h2>P</Text>
          <Text h3>okemon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }}></Spacer>
      <NextLink href="/favorites" passHref>
        <Text style={{ cursor: "pointer" }}>Favoritos</Text>
      </NextLink>
    </div>
  );
};
