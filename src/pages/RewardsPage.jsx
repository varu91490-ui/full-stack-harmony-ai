import { useEffect, useState } from 'react'
import LoadingPulse from '../components/LoadingPulse'
import { getPoints } from '../services/api'

function RewardsPage() {
  const [loading, setLoading] = useState(true)
  const [rewards, setRewards] = useState([])
  const [totalPoints, setTotalPoints] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const data = await getPoints()
        setTotalPoints(data?.total_points ?? 0)
        setProgress(data?.progress ?? 0)
        setRewards(data?.rewards ?? [])
      } catch (error) {
        if (typeof window !== 'undefined') {
          window.alert(
            error?.response?.data?.detail ?? 'Could not load points and rewards.',
          )
        }
        setTotalPoints(3200)
        setProgress(64)
        setRewards([
          { id: 1, name: 'Blue Guardian Badge', points: 1500, status: 'Unlocked' },
          { id: 2, name: 'Marine Research Credits', points: 2400, status: 'Unlocked' },
          { id: 3, name: 'Ocean Hero NFT', points: 4000, status: 'In Progress' },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchRewards()
  }, [])

  return (
    <section>
      <h2 className="mb-2 text-3xl font-bold text-cyan-100">Rewards</h2>
      <p className="mb-6 text-cyan-50/80">
        Redeem mission points and unlock ecosystem impact rewards.
      </p>
      {!loading && (
        <article className="glass-card mb-4">
          <p className="text-sm text-cyan-100/70">Total points</p>
          <p className="mt-1 text-2xl font-bold text-cyan-100">{totalPoints}</p>
          <div className="mt-3 h-2 rounded-full bg-cyan-100/20">
            <div
              className="h-2 rounded-full bg-cyan-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </article>
      )}
      {loading ? (
        <LoadingPulse label="Loading rewards..." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rewards.map((reward) => (
            <article key={reward.id} className="glass-card">
              <h3 className="text-lg font-semibold text-cyan-100">{reward.name}</h3>
              <p className="mt-2 text-cyan-100/80">{reward.points} points</p>
              <p className="mt-1 text-xs text-cyan-100/70">
                Status: {reward.status ?? 'Available'}
              </p>
              <button
                type="button"
                className="mt-4 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Redeem
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default RewardsPage
