import { NavLink } from 'react-router-dom'

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/upload', label: 'Upload' },
  { to: '/prediction', label: 'AI Prediction' },
  { to: '/missions', label: 'Missions' },
  { to: '/rewards', label: 'Rewards' },
]

function TopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-cyan-200/20 bg-slate-950/60 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <h1 className="text-xl font-bold tracking-wide text-cyan-100">
          HarmoniOcean AI
        </h1>
        <nav className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? 'bg-cyan-300/20 text-cyan-100'
                    : 'text-cyan-50/80 hover:bg-cyan-200/10 hover:text-cyan-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default TopNav
