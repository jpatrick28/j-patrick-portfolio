import { ArrowRight } from 'lucide-react'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          AI Automation & Full-Stack Developer
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          J Patrick Magadia
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I build AI-powered systems, web applications and business
          automations that turn manual processes into efficient operations.
        </p>

        <button className="mx-auto mt-8 flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500">
          View My Work
          <ArrowRight size={20} />
        </button>
      </div>
    </main>
  )
}

export default App