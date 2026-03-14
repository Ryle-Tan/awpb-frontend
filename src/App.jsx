import { Navigate, Route, Routes } from 'react-router'
import AppLayout from './layout/AppLayout'
import DashboardPage from './pages/DashboardPage'
import MyEntriesPage from './pages/MyEntriesPage'
import NewEntryPage from './pages/NewEntryPage'
import PreviewPage from './pages/PreviewPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/new-entry" element={<NewEntryPage />} />
        <Route path="/my-entries" element={<MyEntriesPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
