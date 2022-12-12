import { useRouter } from "next/router";
import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { SearchResultsType } from "../types";

function Search({ searchResults }: SearchResultsType) {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;
  const formatDate = (date: any) => format(new Date(date), "dd MMM yy");
  const range = `${formatDate(startDate)} - ${formatDate(endDate)}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main className="flex pt-14 pl-6">
        <section>
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex py-2 space-x-3 text-gray-800 whitespace-nowrap">
            <button className="button">Cancellation Flexibility</button>
            <button className="button">Type of Price</button>
            <button className="button">Price</button>
            <button className="button">Rooms and Beds</button>
            <button className="button">More Filters</button>
          </div>

          {searchResults &&
            searchResults.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
              }: any) => (
                <InfoCard
                  key={title}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
        </section>

        <section className="hidden lg:inline-flex flex-grow xl:min-w[600px] relative">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  // should use context for the props if building more advanced version
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
