import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MovieDetailsModal from "../components/MovieDetailsModal";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [allMovies, setAllMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    setVisibleCount(12);
    const query = search.trim().toLowerCase();

    if (!query) {
      setMovies(allMovies);
      return;
    }

    const filteredMovies = allMovies.filter((movie) => {
      const movieName = (movie.show?.name || movie.name || "").toLowerCase();

      return movieName.startsWith(query);
    });

    setMovies(filteredMovies);
  }, [search, allMovies]);

  async function fetchMovies() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.tvmaze.com/shows");

      if (!response.ok) {
        throw new Error("Failed to load movies");
      }

      const data = await response.json();
      setMovies(data);

      setAllMovies(data);
      setMovies(data);

    } catch {
      setMovies([]);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(event) {
    event.preventDefault();
  }

  function openModal(movie) {
    setSelectedMovie(movie);
  }

  function closeModal() {
    setSelectedMovie(null);
  }

  return (
    <main id="movies" className="min-h-screen bg-slate-950 px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Movie Explorer
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Explore Movies & Shows
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Search for your favorite shows or discover something new.
          </p>
        </div>

        <div className="mt-8">
          <SearchBar
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
        </div>

        {loading && (
          <div className="flex min-h-64 items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-green-500" />
              <p className="mt-4 text-sm text-gray-400">Loading movies...</p>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-green-500/20 bg-green-500/10 p-6 text-center">
            <h2 className="text-lg font-bold text-white">Something went wrong</h2>
            <p className="mt-2 text-sm text-gray-400">{error}</p>
            <button
              onClick={fetchMovies}
              className="mt-5 rounded-full bg-green-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h2 className="text-xl font-bold text-white">No movies found</h2>
            <p className="mt-2 text-sm text-gray-400">
              Try searching with a different movie or show name.
            </p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-7">
            {movies.slice(0, visibleCount).map((movie) => (
              <MovieCard
                key={movie.show?.id || movie.id}
                movie={movie}
                openModal={openModal}
              />
            ))}
          </div>
        )}

        {!loading && !error && movies.length > visibleCount && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="cursor-pointer rounded-full bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-600"
            >
              View More
            </button>
          </div>
        )}
      </div>

      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          closeModal={closeModal}
        />
      )}
    </main>
  );
}

export default Movies;
