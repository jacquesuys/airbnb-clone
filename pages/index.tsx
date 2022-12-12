import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { HomepageType } from "../types";

const Home = ({ exploreData, cardsData }: HomepageType) => {
  return (
    <div className="">
      <Head>
        <title>Fairways App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(
              ({ img, distance, location }: any, key: number) => (
                <SmallCard
                  key={key}
                  location={location}
                  img={img}
                  distance={distance}
                />
              )
            )}
          </div>
        </section>

        <section className="pt-6 p-3 -ml-3">
          <h2 className="text-4xl font-semibold pb-5">Live anywhere</h2>
          <div className="flex space-x-3 p-3 -ml-3 overflow-scroll scrollbar-hide">
            {cardsData?.map(({ img, title }: any, key: number) => (
              <MediumCard key={key} title={title} img={img} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoors"
          description="A wishlist curated by AirBnB"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
