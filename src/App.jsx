export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Bright Path Foundation</span>
        <a href="#cta" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Donate
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-indigo-600 font-semibold mb-4">Community Nonprofit</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Every donation builds a classroom</h1>
        <p className="text-lg text-slate-600 mb-10">We fund schools and teacher training in underserved communities around the world.</p>
        <a href="#cta" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
          Donate Today
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Verified Impact</h3>
          <p className="text-slate-600">Annual reports show exactly where funds go.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Monthly Giving</h3>
          <p className="text-slate-600">Sustain a classroom year-round with recurring gifts.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Volunteer Trips</h3>
          <p className="text-slate-600">Join a build trip and meet the communities we serve.</p>
        </div>
      </section>

      <section id="cta" className="bg-indigo-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Your gift changes a child’s future</h2>
        <p className="mb-8 text-indigo-100">92% of every donation goes directly to programs.</p>
        <a href="#" className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Donate Today
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Bright Path Foundation. All rights reserved.
      </footer>
    </div>
  )
}
