import Card from '../components/Card'
import DataTable from '../components/DataTable'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import { recentEntries, userStatusSummary } from '../data/mockData'
import { formatPeso } from '../utils/currency'

const columns = [
  { key: 'id', header: 'Entry ID', render: (value) => <span className="font-medium">{value}</span> },
  { key: 'activity', header: 'Activity' },
  { key: 'month', header: 'Month' },
  { key: 'budget', header: 'Budget', render: (value) => formatPeso(value) },
  { key: 'status', header: 'Status', render: (value) => <StatusBadge status={value} /> },
]

export default function DashboardPage() {
  return (
    <div>
      <PageHeader title="Dashboard" subtitle="Overview of current AWPB user entry progress" />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {userStatusSummary.map((item) => (
          <Card key={item.label} className={item.tone}>
            <p className="text-sm">{item.label}</p>
            <p className="mt-2 text-3xl font-semibold">{item.value}</p>
          </Card>
        ))}
      </div>

      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Recent Entries</h2>
          <span className="text-sm text-slate-500">Last updated today</span>
        </div>
        <DataTable columns={columns} rows={recentEntries} rowKey="id" />
      </Card>
    </div>
  )
}
