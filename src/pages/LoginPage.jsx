import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingPulse from '../components/LoadingPulse'
import { loginUser } from '../services/api'

function LoginPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const data = await loginUser(form)
      localStorage.setItem('harmoni_user_session', JSON.stringify(data))
      setMessage('Login successful. Diving into your dashboard...')
      navigate('/dashboard')
    } catch (error) {
      const backendMessage =
        error?.response?.data?.detail ?? error?.response?.data?.message
      setMessage(backendMessage ?? 'Unable to login right now.')
      if (typeof window !== 'undefined') {
        window.alert(backendMessage ?? 'Login failed')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-ocean-gradient px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-3xl border border-cyan-200/20 bg-slate-950/45 p-7 shadow-wave backdrop-blur-xl"
      >
        <h2 className="mb-1 text-3xl font-bold text-cyan-100">Welcome back</h2>
        <p className="mb-6 text-sm text-cyan-50/70">
          Sign in to continue with HarmoniOcean AI.
        </p>
        <div className="mb-4">
          <label className="mb-2 block text-sm text-cyan-50">Email</label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            className="w-full rounded-xl border border-cyan-200/30 bg-slate-900/70 px-3 py-2 text-cyan-50 outline-none ring-cyan-300 placeholder:text-cyan-100/40 focus:ring-2"
            placeholder="ocean@harmoni.ai"
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 block text-sm text-cyan-50">Password</label>
          <input
            required
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            className="w-full rounded-xl border border-cyan-200/30 bg-slate-900/70 px-3 py-2 text-cyan-50 outline-none ring-cyan-300 placeholder:text-cyan-100/40 focus:ring-2"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-70"
        >
          {loading ? 'Signing in...' : 'Login'}
        </button>
        <div className="mt-4">{loading && <LoadingPulse label="Authenticating" />}</div>
        {message && <p className="mt-4 text-sm text-cyan-100">{message}</p>}
      </form>
    </div>
  )
}

export default LoginPage
