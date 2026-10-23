import { Link } from "react-router-dom";
import { Home, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2 text-2xl font-extrabold text-white">
            <Home size={24} className="text-teal-400" />
            SmartRent
          </Link>
          <p className="max-w-xs text-sm leading-7 text-slate-400">
            A smart rental management system designed to simplify property
            discovery and rental information management.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-white">Quick Links</h3>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/" className="hover:text-teal-400">Home</Link>
            <Link to="/properties" className="hover:text-teal-400">Properties</Link>
            <Link to="/about" className="hover:text-teal-400">About Us</Link>
            <Link to="/contact" className="hover:text-teal-400">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-white">For Users</h3>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/properties" className="hover:text-teal-400">Find a Property</Link>
            <Link to="/login" className="hover:text-teal-400">Tenant Login</Link>
            <Link to="/login" className="hover:text-teal-400">Owner Login</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-white">Contact</h3>
          <p className="mb-3 flex items-center gap-2 text-sm">
            <MapPin size={17} className="text-teal-400" />
            Chattogram, Bangladesh
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Mail size={17} className="text-teal-400" />
            Contact form available online
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800 px-5 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SmartRent. University project demonstration.
      </div>
    </footer>
  );
}