import { useEffect, useState } from 'react'
import LoadingPulse from '../components/LoadingPulse'
import { getDashboard } from '../services/api'

function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getDashboard()
        setStats(data?.stats ?? [])
      } catch {
        setStats([
          { label: 'Ocean Health Index', value: '84%' },
          { label: 'Anomalies This Week', value: '12' },
          { label: 'Active Missions', value: '4' },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section>
      <h2 className="mb-2 text-3xl font-bold text-cyan-100">Dashboard</h2>
      <p className="mb-6 text-cyan-50/80">
        Real-time overview of marine activity and AI insights.
      </p>
      {loading ? (
        <LoadingPulse label="Collecting ocean telemetry..." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <article key={item.label} className="glass-card">
              <p className="text-sm text-cyan-100/70">{item.label}</p>
              <p className="mt-2 text-3xl font-bold text-cyan-100">{item.value}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default DashboardPage
