import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search, ArrowRight, ShieldCheck, Clock, House,
  KeyRound, Building2, Users, CheckCircle2, Wallet,
} from "lucide-react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

const features = [
  {
    icon: Search,
    title: "Smart Property Search",
    description: "Find properties that match your location, budget, and preferences.",
  },
  {
    icon: Building2,
    title: "Listing Management",
    description: "Give property owners a structured way to organize rental listings.",
  },
  {
    icon: Users,
    title: "Tenant Management",
    description: "Keep relevant tenant and property information organized.",
  },
  {
    icon: ShieldCheck,
    title: "Account Management",
    description: "Provide a clear foundation for role-based user access.",
  },
  {
    icon: Wallet,
    title: "Rental Information",
    description: "Make important rental details easier to review and manage.",
  },
  {
    icon: Clock,
    title: "Convenient Experience",
    description: "Access the responsive interface from desktop, tablet, or mobile.",
  },
];

export default function Home() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [type, setType] = useState("All");
  const [budget, setBudget] = useState("50000");

  function handleSearch(event) {
    event.preventDefault();

    const params = new URLSearchParams();

    if (location.trim()) params.set("location", location.trim());
    if (type !== "All") params.set("type", type);
    if (budget) params.set("budget", budget);

    navigate(`/properties?${params.toString()}`);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-teal-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm text-teal-300">
              <CheckCircle2 size={16} />
              A smarter way to rent
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Find Your Perfect Home.
              <span className="mt-2 block text-teal-400">
                Manage Rentals Smarter.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              SmartRent brings tenants, property owners, and rental information
              together in one convenient platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/properties"
                className="flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-teal-400"
              >
                Explore Properties <ArrowRight size={18} />
              </Link>

              <Link
                to="/about"
                className="rounded-xl border border-slate-600 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-teal-400" />
                User-focused design
              </span>
              <span className="flex items-center gap-2">
                <House size={18} className="text-teal-400" />
                Rental management
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
              alt="Modern residential property"
              className="h-72 w-full rounded-3xl object-cover shadow-2xl sm:h-96 lg:h-[490px]"
            />

            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-white p-4 text-slate-900 shadow-xl sm:left-8 sm:right-8 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <KeyRound size={24} />
                </div>
                <div>
                  <p className="font-bold">Your next home starts here</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Explore sample rental listings in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-5 pt-8 lg:px-8">
        <form
          onSubmit={handleSearch}
          className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg sm:grid-cols-2 lg:grid-cols-4 lg:p-6"
        >
          <label className="text-sm font-semibold text-slate-700">
            Location
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Chattogram"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Property Type
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-teal-600"
            >
              <option>All</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Studio</option>
            </select>
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Maximum Rent (৳)
            <input
              type="number"
              min="0"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="50000"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-teal-600"
            />
          </label>

          <div className="flex items-end">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3.5 font-bold text-white transition hover:bg-teal-800"
            >
              <Search size={18} /> Search Properties
            </button>
          </div>
        </form>
      </section>

      {/* Featured Properties */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
              Discover your space
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Featured Properties
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-500">
              Explore example rental properties with essential details in one place.
            </p>
          </div>

          <Link
            to="/properties"
            className="flex items-center gap-2 font-bold text-teal-700 hover:text-teal-900"
          >
            View All Properties <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.filter((p) => p.featured).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
              Built around your needs
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Everything in One Place
            </h2>
            <p className="mt-4 leading-7 text-slate-500">
              A structured approach to property discovery and rental management.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-3 leading-7 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
            Simple process
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            How SmartRent Works
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Discover Properties",
              text: "Search by location, property type, and monthly rental budget.",
            },
            {
              n: "02",
              title: "Explore Details",
              text: "Review sample property descriptions, prices, and facilities.",
            },
            {
              n: "03",
              title: "Manage Rentals",
              text: "Use available rental management features for tenant and owner information.",
            },
          ].map((step) => (
            <div key={step.n} className="rounded-2xl border border-slate-200 p-7">
              <span className="text-4xl font-black text-teal-100">{step.n}</span>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-500">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User Roles */}
      <section className="bg-teal-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          <article className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
              <Users size={27} />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">For Tenants</h3>
            <p className="mt-3 leading-7 text-slate-500">
              Discover rental options, compare property information, and explore
              homes that match your needs.
            </p>
            <Link to="/properties" className="mt-6 inline-flex items-center gap-2 font-bold text-teal-700">
              Explore Properties <ArrowRight size={18} />
            </Link>
          </article>

          <article className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm sm:p-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-teal-300">
              <Building2 size={27} />
            </div>
            <h3 className="text-2xl font-extrabold">For Property Owners</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Organize property listings and manage relevant tenant and rental
              information in a structured system.
            </p>
            <Link to="/login" className="mt-6 inline-flex items-center gap-2 font-bold text-teal-300">
              Get Started <ArrowRight size={18} />
            </Link>
          </article>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 lg:px-8">
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=80"
          alt="Bright modern living room"
          loading="lazy"
          className="h-80 w-full rounded-3xl object-cover sm:h-[420px]"
        />

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
            About SmartRent
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Making Rental Management More Organized
          </h2>
          <p className="mt-5 leading-8 text-slate-500">
            SmartRent is a university CSE project focused on improving the way
            people explore properties and organize rental information. It aims
            to provide a clear, accessible interface for both tenants and
            property owners.
          </p>
          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 font-bold text-white hover:bg-teal-800"
          >
            Learn About the Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-teal-700 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Explore SmartRent?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-teal-50">
            Explore the demonstration property listings and discover a more
            organized approach to rental management.
          </p>
          <Link
            to="/properties"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-teal-800 transition hover:bg-teal-50"
          >
            Explore Properties <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}