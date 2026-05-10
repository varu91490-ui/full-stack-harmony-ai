import { useState } from 'react'
import LoadingPulse from '../components/LoadingPulse'
import { predictWithAI } from '../services/api'

function PredictionPage() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setResult(null)
    setError('')
    try {
      const upload = JSON.parse(localStorage.getItem('harmoni_last_upload') || 'null')
      const data = await predictWithAI({
        prompt: input,
        image_id: upload?.id ?? null,
      })
      setResult(data)
      if (typeof window !== 'undefined') {
        window.alert('Prediction completed')
      }
    } catch (requestError) {
      const backendMessage =
        requestError?.response?.data?.detail ?? requestError?.response?.data?.message
      setError(backendMessage ?? 'Prediction failed. Please verify backend availability.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="glass-card max-w-3xl">
      <h2 className="mb-2 text-3xl font-bold text-cyan-100">AI Prediction</h2>
      <p className="mb-6 text-cyan-50/80">
        Ask HarmoniOcean AI to evaluate risk patterns and ecosystem trends.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <textarea
          required
          rows={5}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Describe the signal pattern or environmental data..."
          className="w-full rounded-xl border border-cyan-200/30 bg-slate-900/60 p-3 text-cyan-50 outline-none ring-cyan-300 placeholder:text-cyan-100/40 focus:ring-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-70"
        >
          {loading ? 'Running AI...' : 'Predict'}
        </button>
      </form>
      <div className="mt-4">{loading && <LoadingPulse label="Calibrating model..." />}</div>
      {error && <p className="mt-4 text-sm text-red-300">{error}</p>}
      {result && (
        <article className="mt-5 rounded-xl border border-cyan-200/20 bg-slate-900/50 p-4 text-cyan-100">
          <p className="text-sm text-cyan-100/80">
            Pollution risk: <span className="font-semibold">{result.pollution_risk}</span>
          </p>
          <p className="mt-2 text-sm text-cyan-100/80">
            Plastic detection:{' '}
            <span className="font-semibold">{result.plastic_detection}</span>
          </p>
          <p className="mt-2 text-sm text-cyan-100/80">
            Fish species:{' '}
            <span className="font-semibold">{(result.fish_species || []).join(', ')}</span>
          </p>
          <p className="mt-2 text-sm text-cyan-100/80">
            Safe fishing suggestion:{' '}
            <span className="font-semibold">{result.safe_fishing_suggestion}</span>
          </p>
          <p className="mt-3 text-xs text-cyan-100/60">
            Raw JSON: {JSON.stringify(result)}
          </p>
        </article>
      )}
    </section>
  )
}

export default PredictionPage
