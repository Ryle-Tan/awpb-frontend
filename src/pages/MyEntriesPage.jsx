import { FilePenLine, Eye, Search } from 'lucide-react'
import Card from '../components/Card'
import DataTable from '../components/DataTable'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import { userRecentEntries } from '../data/mockData'
import { formatPeso } from '../utils/currency'

const columns = [
  { key: 'id', header: 'Entry ID', render: (value) => <span className="font-semibold">{value}</span> },
  { key: 'activityTitle', header: 'Activity Title' },
  { key: 'component', header: 'Component' },
  { key: 'fundSource', header: 'Fund Source' },
  { key: 'totalBudget', header: 'Total Budget', cellClassName: 'text-right font-medium', render: (value) => formatPeso(value) },
  { key: 'status', header: 'Status', render: (value) => <StatusBadge status={value} /> },
  { key: 'lastUpdated', header: 'Last Updated' },
  {
    key: 'actions',
    header: 'Actions',
    render: (_, row) => (
      <div className="flex items-center gap-2">
        <button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
          <Eye size={13} /> View
        </button>
        <button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50" disabled={row.status === 'Approved'}>
          <FilePenLine size={13} /> Edit
        </button>
      </div>
    ),
  },
]

export default function MyEntriesPage() {
  return (
    <div>
      <PageHeader title="My Entries" subtitle="Manage your encoded AWPB entries and monitor review outcomes." />

      <Card className="mb-4">
        <div className="grid gap-3 md:grid-cols-5">
          <label className="relative md:col-span-2">
            <Search size={14} className="pointer-events-none absolute left-3 top-3 text-slate-400" />
            <input className="w-full rounded-xl border border-slate-200 py-2 pl-9 pr-3 text-sm" placeholder="Search by entry ID or activity title" />
          </label>
          {['Status', 'Fiscal Year', 'Implementing Unit', 'Fund Source'].map((filter) => (
            <select key={filter} className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700">
              <option>{filter}: All</option>
            </select>
          ))}
        </div>
      </Card>

      <Card>
        <DataTable columns={columns} rows={userRecentEntries} rowKey="id" />
      </Card>
    </div>
  )
}
