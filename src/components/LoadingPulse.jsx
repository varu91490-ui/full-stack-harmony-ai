function LoadingPulse({ label = 'Loading...' }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
      <span className="h-2 w-2 animate-ping rounded-full bg-cyan-300" />
      <span className="h-2 w-2 animate-pulse rounded-full bg-sky-200" />
      <span>{label}</span>
    </div>
  )
}

export default LoadingPulse
