const MovieDetailsModal = ({ movie, closeModal }) => {
  if (!movie) return null;

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://placehold.co/500x700/0f172a/e2e8f0?text=No+Image";

  const title = movie.name || "Unknown Title";
  const rating = movie.rating?.average || "N/A";
  const releaseDate = movie.premiered || "Unknown";
  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No description available.";
  const genres = movie.genres?.length ? movie.genres : ["Unknown"];

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:p-5"
      role="presentation"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative my-4 max-h-[92vh] w-full max-w-5xl animate-[fadeIn_0.2s_ease-out] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50 sm:my-8 sm:rounded-3xl"
        role="dialog"
        aria-modal="true"
        aria-label={`${title} details`}
      >
        <button
          onClick={closeModal}
          aria-label="Close movie details"
          className="cursor-pointer absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl leading-none text-white backdrop-blur-md transition hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 sm:right-5 sm:top-5"
        >
          ×
        </button>

        <div className="grid md:grid-cols-[340px_1fr]">
          {/* Image section */}
          <div className="relative h-72 w-full overflow-hidden bg-slate-950 sm:h-96 md:h-full md:min-h-[600px]">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/500x700/0f172a/e2e8f0?text=No+Image";
              }}
            />
           
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-slate-900/40" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
          </div>

          {/* Content section */}
          <div className="p-5 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-400 sm:text-sm">
              Movie Details
            </p>

            <h2 className="mt-3 pr-10 text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
              {title}
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1.5 text-sm font-semibold text-yellow-400">
                ★ {rating}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-gray-300">
                {releaseDate}
              </span>
              {movie.status && (
                <span className="rounded-full bg-green-500/10 px-3 py-1.5 text-sm text-green-400">
                  {movie.status}
                </span>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <h3 className="text-lg font-bold text-white">Overview</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                {summary}
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-5 border-t border-white/10 pt-6 sm:grid-cols-4">
              {movie.language && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Language
                  </p>
                  <p className="mt-1 text-sm text-gray-200">{movie.language}</p>
                </div>
              )}

              {movie.type && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Type
                  </p>
                  <p className="mt-1 text-sm text-gray-200">{movie.type}</p>
                </div>
              )}

              {movie.runtime && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Runtime
                  </p>
                  <p className="mt-1 text-sm text-gray-200">
                    {movie.runtime} min
                  </p>
                </div>
              )}

              {movie.network?.name && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Network
                  </p>
                  <p className="mt-1 text-sm text-gray-200">
                    {movie.network.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsModal;