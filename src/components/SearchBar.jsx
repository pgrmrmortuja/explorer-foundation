function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="mx-auto flex w-full max-w-2xl gap-2 sm:gap-3">
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search movies or shows..."
        aria-label="Search movies or shows"
        className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white outline-none backdrop-blur-sm placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 sm:px-6 sm:py-3.5 sm:text-base"
      />

      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          className="cursor-pointer shrink-0 rounded-full border border-white/10 px-4 py-3 text-green-500 transition hover:bg-white/10"
        >
          ✕
        </button>
      )}

      <button
        type="submit"
        className="cursor-pointer shrink-0 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 sm:px-7 sm:py-3.5 sm:text-base"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
