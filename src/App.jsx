import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import MissionsPage from './pages/MissionsPage'
import PredictionPage from './pages/PredictionPage'
import RewardsPage from './pages/RewardsPage'
import UploadPage from './pages/UploadPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/prediction" element={<PredictionPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App
