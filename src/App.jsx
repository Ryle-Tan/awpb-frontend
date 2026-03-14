import { Navigate, Route, Routes } from 'react-router'
import AppLayout from './layout/AppLayout'
import { mockRole } from './data/mockData'
import DashboardPage from './pages/DashboardPage'
import MyEntriesPage from './pages/MyEntriesPage'
import NewEntryPage from './pages/NewEntryPage'
import PreviewPage from './pages/PreviewPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import AllEntriesPage from './pages/admin/AllEntriesPage'
import ReviewEntriesPage from './pages/admin/ReviewEntriesPage'

const role = mockRole
const isAdmin = role === 'admin'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout role={role} />}>
        {isAdmin ? (
          <>
            <Route path="/" element={<AdminDashboardPage />} />
            <Route path="/all-entries" element={<AllEntriesPage />} />
            <Route path="/review-entries" element={<ReviewEntriesPage />} />
            <Route path="/preview" element={<PreviewPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/new-entry" element={<NewEntryPage />} />
            <Route path="/my-entries" element={<MyEntriesPage />} />
            <Route path="/preview" element={<PreviewPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Route>
    </Routes>
  )
}
