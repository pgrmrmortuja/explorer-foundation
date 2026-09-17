import { useState } from "react";

const MovieCard = ({ movie, openModal }) => {
  const show = movie.show || movie;
  const [loaded, setLoaded] = useState(false);

  const lowResImage = show.image?.medium;
  const highResImage =
    show.image?.original ||
    show.image?.medium ||
    "https://placehold.co/480x720/0f172a/e2e8f0?text=No+Image";

  const fallback = "https://placehold.co/480x720/0f172a/e2e8f0?text=No+Image";

  const title = show.name || "Unknown Title";
  const year = show.premiered ? show.premiered.slice(0, 4) : "Unknown";
  const rating = show.rating?.average || "N/A";

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-green-500/40">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-800">

        {lowResImage && (
          <img
            src={lowResImage}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full scale-105 object-cover object-center blur-md transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"
              }`}
          />
        )}

        <img
          src={highResImage}
          alt={title}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            e.currentTarget.src = fallback;
            setLoaded(true);
          }}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"
            }`}
        />

        {!lowResImage && !loaded && (
          <div className="absolute inset-0 animate-pulse bg-slate-700" />
        )}
      </div>

      <div className="p-4 sm:p-5">
        <h2 className="truncate text-base font-bold text-white sm:text-lg">
          {title}
        </h2>

        <div className="mt-3 flex items-center justify-between gap-2 text-xs sm:text-sm">
          <span className="text-gray-400">{year}</span>
          <span className="rounded-full bg-yellow-500/10 px-2.5 py-1 text-yellow-400">
            ★ {rating}
          </span>
        </div>

        <button
          onClick={() => openModal(show)}
          className="mt-4 w-full rounded-full bg-green-500 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900 sm:text-sm cursor-pointer"
        >
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;