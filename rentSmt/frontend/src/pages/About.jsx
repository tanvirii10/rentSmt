import { Link } from "react-router-dom";
import { Target, Users, Lightbulb, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <main>
      <section className="bg-slate-950 px-5 py-20 text-center text-white">
        <p className="font-bold uppercase tracking-widest text-teal-400">
          About the project
        </p>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
          About SmartRent
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
          A Smart Rental Management System designed to make property discovery
          and rental information management more convenient.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Goal",
              text: "Simplify the organization and discovery of rental properties.",
            },
            {
              icon: Users,
              title: "Our Users",
              text: "Design a clear experience for tenants and property owners.",
            },
            {
              icon: Lightbulb,
              title: "Our Approach",
              text: "Use modern web technologies to create a responsive interface.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-slate-200 p-7">
              <Icon size={30} className="text-teal-700" />
              <h2 className="mt-5 text-xl font-bold text-slate-900">{title}</h2>
              <p className="mt-3 leading-7 text-slate-500">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-teal-50 p-8 sm:p-10">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Project Objectives
          </h2>
          <ul className="mt-5 list-inside list-disc space-y-3 leading-7 text-slate-600">
            <li>Provide a user-friendly property browsing interface.</li>
            <li>Enable filtering by location, property type, and rental budget.</li>
            <li>Organize property and rental information clearly.</li>
            <li>Demonstrate reusable React components, routing, and Hooks.</li>
            <li>Deliver a responsive experience across screen sizes.</li>
          </ul>

          <Link
            to="/properties"
            className="mt-7 inline-flex items-center gap-2 font-bold text-teal-800"
          >
            Explore Properties <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}