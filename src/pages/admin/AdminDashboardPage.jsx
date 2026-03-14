import Card from '../../components/Card'
import DataTable from '../../components/DataTable'
import PageHeader from '../../components/PageHeader'
import StatusBadge from '../../components/StatusBadge'
import { adminStatusSummary, allEntries } from '../../data/mockData'
import { formatPeso } from '../../utils/currency'

const columns = [
  { key: 'id', header: 'Entry ID', render: (value) => <span className="font-medium">{value}</span> },
  { key: 'district', header: 'District' },
  { key: 'owner', header: 'Owner' },
  { key: 'amount', header: 'Planned Amount', render: (value) => formatPeso(value) },
  { key: 'status', header: 'Status', render: (value) => <StatusBadge status={value} /> },
]

export default function AdminDashboardPage() {
  return (
    <div>
      <PageHeader title="Admin Dashboard" subtitle="Monitor organization-wide AWPB progress and pending validations" />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminStatusSummary.map((item) => (
          <Card key={item.label} className={item.tone}>
            <p className="text-sm">{item.label}</p>
            <p className="mt-2 text-3xl font-semibold">{item.value}</p>
          </Card>
        ))}
      </div>

      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Latest Submitted Entries</h2>
          <span className="text-sm text-slate-500">Administrative view</span>
        </div>
        <DataTable columns={columns} rows={allEntries} rowKey="id" />
      </Card>
    </div>
  )
}
