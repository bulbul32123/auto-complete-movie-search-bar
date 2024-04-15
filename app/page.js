import Loading from "./components/Loading";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import { fetchDataFromApi } from "./utils/api";

export default  async function Home() {
 const data =   await fetchDataFromApi(`/movie/popular`)
  
  return (
    <main className="flex justify-center flex-col items-center h-full w-full">
      <div className=" w-full pt-20 sticky top-7">
      <SearchBar />
      </div>

      <section className="flex flex-wrap gap-3 pt-20">
        {data?.results?.map((item, index) => (
          <MovieCard item={item} key={index} />
        ))}
      </section>
    </main>
  );
}
