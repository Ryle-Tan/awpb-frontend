import Card from '../components/Card'
import DataTable from '../components/DataTable'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import { myEntries } from '../data/mockData'
import { formatPeso } from '../utils/currency'

const columns = [
  { key: 'id', header: 'Entry ID', render: (value) => <span className="font-medium">{value}</span> },
  { key: 'intervention', header: 'Intervention' },
  { key: 'period', header: 'Period' },
  { key: 'officer', header: 'Responsible Officer' },
  { key: 'amount', header: 'Amount', render: (value) => formatPeso(value) },
  { key: 'status', header: 'Status', render: (value) => <StatusBadge status={value} /> },
]

export default function MyEntriesPage() {
  return (
    <div>
      <PageHeader title="My Entries" subtitle="Track the status of all entries assigned to your account" />
      <Card>
        <DataTable columns={columns} rows={myEntries} rowKey="id" />
      </Card>
    </div>
  )
}
