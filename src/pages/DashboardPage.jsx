import { Plus } from 'lucide-react'
import { Link } from 'react-router'
import Card from '../components/Card'
import DataTable from '../components/DataTable'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import { profileByRole, submissionPeriod, userRecentEntries, userSummaryCards } from '../data/mockData'
import { formatPeso } from '../utils/currency'

const columns = [
  { key: 'id', header: 'Entry ID', render: (value) => <span className="font-semibold">{value}</span> },
  { key: 'activityTitle', header: 'Activity Title' },
  { key: 'implementingUnit', header: 'Implementing Unit' },
  { key: 'totalBudget', header: 'Total Budget', cellClassName: 'text-right font-medium', render: (value) => formatPeso(value) },
  { key: 'status', header: 'Status', render: (value) => <StatusBadge status={value} /> },
  { key: 'lastUpdated', header: 'Last Updated' },
]

export default function DashboardPage() {
  const profile = profileByRole.user

  return (
    <div>
      <PageHeader
        title="User Dashboard"
        subtitle="Encode, monitor, and finalize your assigned AWPB entries for the active fiscal cycle."
        action={
          <Link to="/new-entry" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700">
            <Plus size={16} /> Create New Entry
          </Link>
        }
      />

      <div className="mb-6 grid gap-4 lg:grid-cols-2">
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Welcome</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">{profile.name}</h2>
          <p className="mt-1 text-sm text-slate-600">Role: {profile.roleLabel}</p>
          <p className="mt-1 text-sm text-slate-600">Assigned Implementing Unit: {profile.implementingUnit}</p>
        </Card>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Submission Period</p>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-slate-600">{submissionPeriod.cycle}</p>
              <StatusBadge status={submissionPeriod.status} />
            </div>
            <p className="mt-2 text-sm text-slate-500">{submissionPeriod.timeline}</p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Deadline</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">{submissionPeriod.deadline}</p>
            <p className="mt-1 text-sm text-slate-500">Please complete submissions before the deadline.</p>
          </Card>
        </div>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {userSummaryCards.map((item) => (
          <Card key={item.label}>
            <p className="text-sm font-medium text-slate-600">{item.label}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{item.value}</p>
          </Card>
        ))}
      </div>

      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Recent Entries</h2>
          <span className="text-sm text-slate-500">Latest updates from your encoded activities</span>
        </div>
        <DataTable columns={columns} rows={userRecentEntries} rowKey="id" />
      </Card>
    </div>
  )
}
