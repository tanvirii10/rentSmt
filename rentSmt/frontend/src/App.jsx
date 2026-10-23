import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { properties } from "./data/properties";
import { Link, useParams } from "react-router-dom";
import { MapPin, BedDouble, Bath, ArrowLeft } from "lucide-react";

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <main className="px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Property Not Found
        </h1>
        <Link to="/properties" className="mt-5 inline-block font-semibold text-teal-700">
          Return to Properties
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
      <Link to="/properties" className="mb-6 inline-flex items-center gap-2 font-semibold text-teal-700">
        <ArrowLeft size={18} /> Back to Properties
      </Link>

      <img
        src={property.image}
        alt={property.title}
        className="h-72 w-full rounded-3xl object-cover sm:h-[440px]"
      />

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <span className="rounded-full bg-teal-50 px-3 py-1.5 text-sm font-semibold text-teal-800">
            {property.type}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {property.title}
          </h1>
          <p className="mt-3 flex items-center gap-2 text-slate-500">
            <MapPin size={18} /> {property.location}
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-slate-600">
            <span className="flex items-center gap-2"><BedDouble size={19} /> {property.beds} Bedrooms</span>
            <span className="flex items-center gap-2"><Bath size={19} /> {property.baths} Bathrooms</span>
            <span>{property.area} sqft</span>
          </div>
          <h2 className="mt-8 text-xl font-bold text-slate-900">About This Property</h2>
          <p className="mt-3 leading-7 text-slate-600">
            This is a sample property listing for the SmartRent university
            project demonstration. Availability and property details have not
            been verified.
          </p>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 p-6">
          <p className="text-sm text-slate-500">Monthly Rent</p>
          <p className="mt-2 text-3xl font-extrabold text-teal-800">
            ৳{property.rent.toLocaleString("en-BD")}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Demonstration price only. No real booking is available.
          </p>
          <Link to="/contact" className="mt-6 block rounded-xl bg-teal-700 px-5 py-3 text-center font-bold text-white hover:bg-teal-800">
            Contact Us
          </Link>
        </aside>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="px-5 py-24 text-center">
      <h1 className="text-5xl font-extrabold text-slate-900">404</h1>
      <p className="mt-4 text-slate-500">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white">
        Back to Home
      </Link>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;