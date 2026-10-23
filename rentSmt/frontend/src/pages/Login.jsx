import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Mail, LockKeyhole } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "This is a UI demonstration. Connect your existing authentication backend to sign in."
    );
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-700 text-white">
          <Home size={28} />
        </div>

        <h1 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
          Welcome to SmartRent
        </h1>
        <p className="mt-3 text-center text-sm leading-6 text-slate-500">
          Sign-in interface for the rental management system demonstration.
        </p>

        <label className="mt-8 block text-sm font-semibold text-slate-700">
          Email Address
          <span className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 px-4">
            <Mail size={18} className="text-slate-400" />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="min-w-0 flex-1 py-3.5 outline-none"
            />
          </span>
        </label>

        <label className="mt-5 block text-sm font-semibold text-slate-700">
          Password
          <span className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 px-4">
            <LockKeyhole size={18} className="text-slate-400" />
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="min-w-0 flex-1 py-3.5 outline-none"
            />
          </span>
        </label>

        {message && (
          <p role="status" className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            {message}
          </p>
        )}

        <button className="mt-6 w-full rounded-xl bg-teal-700 px-5 py-3.5 font-bold text-white hover:bg-teal-800">
          Continue
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          Return to <Link to="/" className="font-semibold text-teal-700">Home</Link>
        </p>
      </form>
    </main>
  );
}