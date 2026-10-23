import { Link } from "react-router-dom";
import { MapPin, BedDouble, Bath, MoveUpRight } from "lucide-react";

export default function PropertyCard({ property }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {property.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-teal-800 shadow-sm">
            Featured
          </span>
        )}

        <span className="absolute bottom-4 right-4 rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-slate-800">
          {property.type}
        </span>
      </div>

      <div className="p-5">
        <p className="mb-2 text-sm font-medium text-teal-700">
          ৳{property.rent.toLocaleString("en-BD")}
          <span className="font-normal text-slate-500"> / month</span>
        </p>

        <h3 className="text-lg font-bold text-slate-900">
          {property.title}
        </h3>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin size={16} className="shrink-0" />
          {property.location}
        </p>

        <div className="my-5 flex flex-wrap gap-4 border-y border-slate-100 py-4 text-sm text-slate-600">
          <span className="flex items-center gap-1.5">
            <BedDouble size={17} /> {property.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={17} /> {property.baths} Baths
          </span>
          <span>{property.area} sqft</span>
        </div>

        <Link
          to={`/properties/${property.id}`}
          className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-700 hover:text-teal-700"
        >
          View Details <MoveUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}