import { createElement } from 'react'
import { NavLink } from 'react-router'
import { profileByRole } from '../data/mockData'
import { roleConfig } from './roleConfig'

export default function Sidebar({ role }) {
  const activeRoleConfig = roleConfig[role] || roleConfig.user
  const profile = profileByRole[role]

  return (
    <aside className="w-full border-r border-slate-200 bg-white md:w-72">
      <div className="border-b border-slate-200 px-5 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-700">Department of Agriculture</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-900">{activeRoleConfig.appTitle}</h2>
        <p className="mt-1 text-xs text-slate-500">{profile.implementingUnit}</p>
      </div>

      <nav className="space-y-1 p-3">
        {activeRoleConfig.navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
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
