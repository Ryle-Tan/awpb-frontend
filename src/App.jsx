import { useMemo, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import AppLayout from './layout/AppLayout'
import DashboardPage from './pages/DashboardPage'
import MyEntriesPage from './pages/MyEntriesPage'
import NewEntryPage from './pages/NewEntryPage'
import PreviewPage from './pages/PreviewPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import AllEntriesPage from './pages/admin/AllEntriesPage'
import ReviewEntriesPage from './pages/admin/ReviewEntriesPage'

export default function App() {
  const [role, setRole] = useState('user')
  const homeElement = useMemo(() => (role === 'admin' ? <AdminDashboardPage /> : <DashboardPage />), [role])

  return (
    <Routes>
      <Route element={<AppLayout role={role} onRoleChange={setRole} />}>
        <Route path="/" element={homeElement} />
        <Route path="/new-entry" element={<NewEntryPage />} />
        <Route path="/my-entries" element={<MyEntriesPage />} />
        <Route path="/all-entries" element={<AllEntriesPage />} />
        <Route path="/review-entries" element={<ReviewEntriesPage />} />
        <Route path="/preview" element={<PreviewPage role={role} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
