import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [type, setType] = useState(searchParams.get("type") || "All");
  const [budget, setBudget] = useState(searchParams.get("budget") || "50000");

  useEffect(() => {
    setLocation(searchParams.get("location") || "");
    setType(searchParams.get("type") || "All");
    setBudget(searchParams.get("budget") || "50000");
  }, [searchParams]);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesLocation = property.location
        .toLowerCase()
        .includes(location.trim().toLowerCase());

      const matchesType = type === "All" || property.type === type;

      const matchesBudget =
        budget === "" || property.rent <= Number(budget);

      return matchesLocation && matchesType && matchesBudget;
    });
  }, [location, type, budget]);

  function handleSearch(event) {
    event.preventDefault();

    const params = new URLSearchParams();

    if (location.trim()) params.set("location", location.trim());
    if (type !== "All") params.set("type", type);
    if (budget !== "") params.set("budget", budget);

    setSearchParams(params);
  }

  function clearFilters() {
    setLocation("");
    setType("All");
    setBudget("");
    setSearchParams({});
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-400">
            Find your next home
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Explore Properties
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Search demonstration rental listings using your preferred location,
            property type, and monthly budget.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <form
          onSubmit={handleSearch}
          className="mb-10 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 lg:grid-cols-4"
        >
          <label className="text-sm font-semibold text-slate-700">
            Location
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search location"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-teal-600"
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
            Maximum Monthly Rent (৳)
            <input
              type="number"
              min="0"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="No maximum"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-teal-600"
            />
          </label>

          <div className="flex items-end gap-2">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-3.5 font-bold text-white hover:bg-teal-800">
              <Search size={17} /> Search
            </button>
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-xl border border-slate-200 px-4 py-3.5 text-slate-700 hover:bg-slate-50"
              aria-label="Clear filters"
              title="Clear filters"
            >
              <SlidersHorizontal size={18} />
            </button>
          </div>
        </form>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-slate-900">
            Available Demonstration Listings
          </h2>
          <p className="text-sm text-slate-500">
            {filteredProperties.length} properties found
          </p>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h3 className="text-xl font-bold text-slate-900">
              No matching properties
            </h3>
            <p className="mt-2 text-slate-500">
              Try another location or increase your maximum budget.
            </p>
            <button
              onClick={clearFilters}
              className="mt-5 rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white hover:bg-teal-800"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}