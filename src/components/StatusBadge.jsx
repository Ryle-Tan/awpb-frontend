const statusColors = {
  Draft: 'bg-slate-100 text-slate-700',
  Submitted: 'bg-blue-100 text-blue-700',
  Approved: 'bg-emerald-100 text-emerald-700',
  'Requires Revision': 'bg-amber-100 text-amber-700',
  'Pending Review': 'bg-violet-100 text-violet-700',
  Rejected: 'bg-rose-100 text-rose-700',
  Open: 'bg-emerald-100 text-emerald-700',
  Closed: 'bg-rose-100 text-rose-700',
}

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusColors[status] || 'bg-slate-100 text-slate-700'}`}
    >
      {status}
    </span>
  )
}
