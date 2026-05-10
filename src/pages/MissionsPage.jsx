import { useEffect, useState } from 'react'
import LoadingPulse from '../components/LoadingPulse'
import { getMissions } from '../services/api'

function MissionsPage() {
  const [loading, setLoading] = useState(true)
  const [missions, setMissions] = useState([])

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const data = await getMissions()
        setMissions(data?.missions ?? [])
      } catch (error) {
        if (typeof window !== 'undefined') {
          window.alert(
            error?.response?.data?.detail ?? 'Could not load live missions data.',
          )
        }
        setMissions([
          { id: 1, title: 'Coral Reef Patrol', progress: 72 },
          { id: 2, title: 'Plastic Drift Mapping', progress: 41 },
          { id: 3, title: 'Whale Song Classification', progress: 88 },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchMissions()
  }, [])

  return (
    <section>
      <h2 className="mb-2 text-3xl font-bold text-cyan-100">Missions</h2>
      <p className="mb-6 text-cyan-50/80">
        Track active ocean-saving missions and their completion progress.
      </p>
      {loading ? (
        <LoadingPulse label="Fetching missions..." />
      ) : (
        <div className="space-y-4">
          {missions.map((mission) => (
            <article key={mission.id} className="glass-card">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-cyan-100">{mission.title}</h3>
                <span className="text-sm text-cyan-100/80">{mission.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-cyan-100/20">
                <div
                  className="h-2 rounded-full bg-cyan-300"
                  style={{ width: `${mission.progress}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default MissionsPage
