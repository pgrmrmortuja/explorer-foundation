const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-center sm:flex-row sm:px-8 sm:text-left lg:px-10">
        <div>
          <p className="text-lg font-bold text-white">
            Movie<span className="text-green-500">X</span>
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Discover something worth watching.
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 MovieX. Powered by TVMaze.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
