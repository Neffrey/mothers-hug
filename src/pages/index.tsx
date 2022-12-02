// LIBRARIES
import { type NextPage } from "next";
import Head from "next/head";

// COMPONENTS
import HomeHero from "components/templates/homepage/hero";
import HomeAbout from "components/templates/homepage/about";
import HomeContact from "components/templates/homepage/contact";
import HomeServices from "components/templates/homepage/services";
import HomePersonal from "components/templates/homepage/art";
import HomeArt from "components/templates/homepage/personal";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Mothers Hug Medicine"}</title>
        <meta name="description" content="Oh hai <3 Neffrey" />
        <link rel="icon" href="" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center">
        <HomeHero />
        <HomeAbout />
        <HomeServices />
        <HomeContact />
        <HomePersonal />
        <HomeArt />
      </main>
    </>
  );
};

export default Home;
