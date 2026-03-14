const statusColors = {
  Draft: 'bg-slate-100 text-slate-700',
  Submitted: 'bg-blue-100 text-blue-700',
  Approved: 'bg-emerald-100 text-emerald-700',
  'Requires Revision': 'bg-amber-100 text-amber-700',
  'Pending Review': 'bg-violet-100 text-violet-700',
}

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[status] || 'bg-slate-100 text-slate-700'}`}
    >
      {status}
    </span>
  )
}
