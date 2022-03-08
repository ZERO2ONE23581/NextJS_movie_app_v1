import Seo from "../components/Seo";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const API_KEY = "2807dd1eae5159e09bddd2e2c2c9aa43";

export default function Home() {
  const [movies, setMovies] = useState("");
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      ).json();
      setMovies(results);
    })();
  }, []);
  console.log(movies);
  return (
    <div>
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {movies ? (
        movies.map((movies) => (
          <div key={movies.id}>
            <h4>{movies.original_title}</h4>
          </div>
        ))
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
}
