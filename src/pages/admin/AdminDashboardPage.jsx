import Card from '../../components/Card'
import DataTable from '../../components/DataTable'
import PageHeader from '../../components/PageHeader'
import StatusBadge from '../../components/StatusBadge'
import { adminSummaryCards, allEntries, statusBreakdown, submissionPeriod } from '../../data/mockData'
import { formatPeso } from '../../utils/currency'

const columns = [
  { key: 'id', header: 'Entry ID', render: (value) => <span className="font-semibold">{value}</span> },
  { key: 'submittedBy', header: 'Submitted By' },
  { key: 'implementingUnit', header: 'Implementing Unit' },
  { key: 'activityTitle', header: 'Activity Title' },
  { key: 'totalBudget', header: 'Total Budget', cellClassName: 'text-right font-medium', render: (value) => formatPeso(value) },
  { key: 'status', header: 'Status', render: (value) => <StatusBadge status={value} /> },
]

export default function AdminDashboardPage() {
  return (
    <div>
      <PageHeader title="Admin Dashboard" subtitle="Monitor overall AWPB submission performance and review workload across implementing units." />

      <div className="mb-6 grid gap-4 md:grid-cols-3 xl:grid-cols-5">
        {adminSummaryCards.map((item) => (
          <Card key={item.label}>
            <p className="text-sm font-medium text-slate-600">{item.label}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{item.value}</p>
          </Card>
        ))}
      </div>

      <div className="mb-6 grid gap-4 lg:grid-cols-3">
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Submission Period Status</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-slate-600">{submissionPeriod.cycle}</p>
            <StatusBadge status={submissionPeriod.status} />
          </div>
          <p className="mt-2 text-sm text-slate-500">Timeline: {submissionPeriod.timeline}</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Active Fiscal Year</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{submissionPeriod.activeFiscalYear}</p>
          <p className="mt-1 text-sm text-slate-500">Deadline: {submissionPeriod.deadline}</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Budget Overview</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{formatPeso(allEntries.reduce((sum, item) => sum + item.totalBudget, 0))}</p>
          <p className="mt-1 text-sm text-slate-500">Combined planned budget across listed entries</p>
        </Card>
      </div>

      <div className="mb-6 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <Card>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Recent Submissions</h2>
          <DataTable columns={columns} rows={allEntries.slice(0, 4)} rowKey="id" />
        </Card>
        <Card>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Entries by Status</h2>
          <div className="space-y-3">
            {statusBreakdown.map((item) => (
              <div key={item.status}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-slate-600">{item.status}</span>
                  <span className="font-semibold text-slate-900">{item.count}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-primary-500" style={{ width: `${item.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
