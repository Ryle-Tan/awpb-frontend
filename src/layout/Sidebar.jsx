import { createElement } from 'react'
import { LayoutDashboard, FilePlus2, ListChecks, Sheet } from 'lucide-react'
import { NavLink } from 'react-router'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/new-entry', label: 'New Entry', icon: FilePlus2 },
  { to: '/my-entries', label: 'My Entries', icon: ListChecks },
  { to: '/preview', label: 'Preview', icon: Sheet },
]

export default function Sidebar() {
  return (
    <aside className="w-full border-r border-slate-200 bg-white md:w-64">
      <div className="border-b border-slate-200 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">AWPB</p>
        <h2 className="mt-1 text-lg font-semibold text-slate-900">User Entry System</h2>
      </div>

      <nav className="space-y-1 p-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`
            }
          >
            {createElement(item.icon, { size: 18 })}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
