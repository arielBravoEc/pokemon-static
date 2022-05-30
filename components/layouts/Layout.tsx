import Head from "next/head";
import { ReactNode, FC } from "react";
import { NavBar } from "../ui";

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout: FC<Props> = ({ children, title = "Pokemon App" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Ariel Bravo" />
        <meta
          name="description"
          content={`Información sobre el pokemón  ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon. pokedex`} />
      </Head>
      <NavBar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
