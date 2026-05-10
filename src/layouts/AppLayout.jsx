import { Outlet } from 'react-router-dom'
import TopNav from '../components/TopNav'

function AppLayout() {
  return (
    <div className="min-h-screen bg-ocean-gradient text-white">
      <TopNav />
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
