import { useState } from 'react'
import LoadingPulse from '../components/LoadingPulse'
import { uploadData } from '../services/api'

function UploadPage() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    if (!file) {
      setStatus('Please select a file before uploading.')
      return
    }

    const payload = new FormData()
    payload.append('file', file)

    setLoading(true)
    setStatus('')
    try {
      const data = await uploadData(payload)
      localStorage.setItem('harmoni_last_upload', JSON.stringify(data))
      setStatus('Upload completed successfully.')
      if (typeof window !== 'undefined') {
        window.alert('Image uploaded successfully')
      }
    } catch (error) {
      const backendMessage =
        error?.response?.data?.detail ?? error?.response?.data?.message
      setStatus(backendMessage ?? 'Upload failed. Please try again.')
      if (typeof window !== 'undefined') {
        window.alert(backendMessage ?? 'Upload failed')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="glass-card max-w-2xl">
      <h2 className="mb-2 text-3xl font-bold text-cyan-100">Upload</h2>
      <p className="mb-6 text-cyan-50/80">
        Send sensor files, images, or mission logs for analysis.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="file"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          className="block w-full rounded-xl border border-cyan-200/30 bg-slate-900/60 p-2 text-cyan-50 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-400 file:px-4 file:py-2 file:text-slate-950 file:hover:bg-cyan-300"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-70"
        >
          {loading ? 'Uploading...' : 'Start Upload'}
        </button>
      </form>
      <div className="mt-4">{loading && <LoadingPulse label="Uploading to cloud..." />}</div>
      {status && <p className="mt-4 text-sm text-cyan-100">{status}</p>}
    </section>
  )
}

export default UploadPage
