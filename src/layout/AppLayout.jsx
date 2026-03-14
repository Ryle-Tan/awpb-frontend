import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import TopHeader from './TopHeader'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 md:flex">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <TopHeader />
        <main className="flex-1 p-5 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
