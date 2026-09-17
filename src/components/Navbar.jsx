import { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "rounded-full border border-green-500 bg-green-500 px-4 py-2 text-white"
      : "text-gray-300 hover:text-white";

  return (
    <nav className="absolute left-0 top-0 z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-wide text-white sm:text-3xl"
        >
          Movie<span className="text-green-500">X</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-4 text-sm font-semibold sm:flex sm:gap-7 sm:text-base">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/movies" className={navLinkClass}>
            Movies
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl text-white sm:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mx-5 rounded-xl bg-black/95 p-4 sm:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              onClick={() => setIsMenuOpen(false)}
              className={navLinkClass}
            >
              Movies
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;