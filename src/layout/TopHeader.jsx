import { Bell, CalendarDays, Search } from 'lucide-react'
import { profileByRole, roles, submissionPeriod } from '../data/mockData'

export default function TopHeader({ role, onRoleChange }) {
  const profile = profileByRole[role]

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-5 py-3 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="flex w-full max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
          <Search size={16} />
          <input type="text" placeholder="Search entries, activities, or units" className="w-full border-none bg-transparent text-slate-700 outline-none" />
        </label>

        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500">
            <p className="font-semibold text-slate-700">{submissionPeriod.activeFiscalYear}</p>
            <p className="mt-0.5 flex items-center gap-1"><CalendarDays size={12} /> Submission Deadline: {submissionPeriod.deadline}</p>
          </div>

          <select
            value={role}
            onChange={(event) => onRoleChange(event.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
          >
            {roles.map((roleOption) => (
              <option key={roleOption} value={roleOption}>
                {roleOption === 'admin' ? 'Admin / Reviewer View' : 'Encoder / User View'}
              </option>
            ))}
          </select>

          <button className="rounded-xl border border-slate-200 bg-white p-2 text-slate-500 hover:bg-slate-50">
            <Bell size={16} />
          </button>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-800">{profile.name}</p>
            <p className="text-xs text-slate-500">{profile.roleLabel}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
