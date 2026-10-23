import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-teal-700" : "text-slate-600 hover:text-teal-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white">
            <Home size={22} />
          </span>

          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            Smart<span className="text-teal-700">Rent</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/login"
            className="text-sm font-semibold text-slate-700 hover:text-teal-700"
          >
            Log in
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Get Started <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-teal-700 px-5 py-3 text-center font-semibold text-white"
            >
              Login / Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}