import { Bell, Search } from 'lucide-react'

export default function TopHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-5 py-3">
      <label className="flex w-full max-w-md items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
        <Search size={16} />
        <input
          type="text"
          placeholder="Search entries"
          className="w-full border-none bg-transparent text-slate-700 outline-none"
        />
      </label>
      <div className="flex items-center gap-3">
        <button className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 hover:bg-slate-50">
          <Bell size={16} />
        </button>
        <div className="text-right">
          <p className="text-sm font-semibold text-slate-800">Planning Officer</p>
          <p className="text-xs text-slate-500">awpb.user@example.org</p>
        </div>
      </div>
    </header>
  )
}
