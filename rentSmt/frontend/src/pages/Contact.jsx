import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    setFeedback("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setFeedback(
      "Your form passed validation. This demonstration does not send messages to a server."
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-16 text-center text-white">
        <p className="font-bold uppercase tracking-widest text-teal-400">
          Get in touch
        </p>
        <h1 className="mt-4 text-4xl font-extrabold">Contact SmartRent</h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
          Have a question about the project? Use the contact form below.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-5">
        <div className="space-y-6 md:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <Mail className="text-teal-700" size={28} />
            <h2 className="mt-4 font-bold text-slate-900">Contact Form</h2>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              Send a message using the form. Backend delivery can be integrated later.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <MapPin className="text-teal-700" size={28} />
            <h2 className="mt-4 font-bold text-slate-900">Project Location</h2>
            <p className="mt-2 text-sm text-slate-500">
              Chattogram, Bangladesh
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 md:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              Name
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-teal-600"
                placeholder="Your name"
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Email
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-teal-600"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="block text-sm font-semibold text-slate-700">
            Subject
            <input
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-teal-600"
              placeholder="What is your message about?"
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            Message
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-teal-600"
              placeholder="Write your message..."
            />
          </label>

          {feedback && (
            <p role="status" className="rounded-xl bg-teal-50 p-4 text-sm text-teal-900">
              {feedback}
            </p>
          )}

          <button className="flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 font-bold text-white hover:bg-teal-800">
            <Send size={17} /> Validate Form
          </button>
        </form>
      </section>
    </main>
  );
}