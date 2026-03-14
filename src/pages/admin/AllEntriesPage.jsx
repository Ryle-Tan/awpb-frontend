import { Eye, Search } from 'lucide-react'
import Card from '../../components/Card'
import DataTable from '../../components/DataTable'
import PageHeader from '../../components/PageHeader'
import StatusBadge from '../../components/StatusBadge'
import { allEntries } from '../../data/mockData'
import { formatPeso } from '../../utils/currency'

const columns = [
  { key: 'id', header: 'Entry ID', render: (value) => <span className="font-semibold">{value}</span> },
  { key: 'submittedBy', header: 'Submitted By' },
  { key: 'implementingUnit', header: 'Implementing Unit' },
  { key: 'activityTitle', header: 'Activity Title' },
  { key: 'fundSource', header: 'Fund Source' },
  { key: 'totalBudget', header: 'Total Budget', cellClassName: 'text-right font-medium', render: (value) => formatPeso(value) },
  { key: 'status', header: 'Status', render: (value) => <StatusBadge status={value} /> },
  { key: 'submissionDate', header: 'Submission Date' },
  {
    key: 'actions',
    header: 'Actions',
    render: () => (
      <button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
        <Eye size={13} /> View
      </button>
    ),
  },
]

export default function AllEntriesPage() {
  return (
    <div>
      <PageHeader title="All Entries" subtitle="Comprehensive management table for all AWPB submissions across units." />

      <Card className="mb-4">
        <div className="grid gap-3 md:grid-cols-5">
          <label className="relative md:col-span-2">
            <Search size={14} className="pointer-events-none absolute left-3 top-3 text-slate-400" />
            <input className="w-full rounded-xl border border-slate-200 py-2 pl-9 pr-3 text-sm" placeholder="Search by entry ID, submitter, or title" />
          </label>
          {['Implementing Unit', 'Fiscal Year', 'Status', 'Fund Source'].map((filter) => (
            <select key={filter} className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700">
              <option>{filter}: All</option>
            </select>
          ))}
        </div>
      </Card>

      <Card>
        <DataTable columns={columns} rows={allEntries} rowKey="id" />
      </Card>
    </div>
  )
}
