import { Link } from "react-router";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[680px] overflow-hidden sm:min-h-screen">
      <img
        src="/movie.png"
        alt="Cinematic movie scene"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 pb-16 pt-28 sm:min-h-screen sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400 sm:text-base">
            Welcome to MovieX
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Your Next
            <span className="block text-green-500">Favorite Movie</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8 md:text-lg">
            Explore amazing stories, unforgettable characters and exciting
            cinematic experiences. Search for your favorite shows and discover
            something new to watch.
          </p>

          <Link
            to="/movies"
            className="mt-8 inline-flex rounded-full bg-green-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black sm:px-8 sm:py-4 sm:text-base"
          >
            Explore Now <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
