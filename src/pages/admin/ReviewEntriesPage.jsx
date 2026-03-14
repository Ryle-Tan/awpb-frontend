import Card from '../../components/Card'
import DataTable from '../../components/DataTable'
import PageHeader from '../../components/PageHeader'
import StatusBadge from '../../components/StatusBadge'
import { reviewEntries } from '../../data/mockData'
import { formatPeso } from '../../utils/currency'

const columns = [
  { key: 'id', header: 'Entry ID', render: (value) => <span className="font-medium">{value}</span> },
  { key: 'intervention', header: 'Intervention' },
  { key: 'submittedBy', header: 'Submitted By' },
  { key: 'submittedOn', header: 'Submitted On' },
  { key: 'amount', header: 'Requested Budget', render: (value) => formatPeso(value) },
  { key: 'status', header: 'Status', render: (value) => <StatusBadge status={value} /> },
]

export default function ReviewEntriesPage() {
  return (
    <div>
      <PageHeader
        title="Review Entries"
        subtitle="Focus queue for entries requiring approval decision or revision feedback"
      />
      <Card>
        <DataTable columns={columns} rows={reviewEntries} rowKey="id" />
      </Card>
    </div>
  )
}
