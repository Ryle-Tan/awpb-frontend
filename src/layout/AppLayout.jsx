import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import TopHeader from './TopHeader'

export default function AppLayout({ role }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 md:flex">
      <Sidebar role={role} />
      <div className="flex min-h-screen flex-1 flex-col">
        <TopHeader role={role} />
        <main className="flex-1 p-5 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
