import Card from '../../components/Card'
import DataTable from '../../components/DataTable'
import PageHeader from '../../components/PageHeader'
import StatusBadge from '../../components/StatusBadge'
import { allEntries } from '../../data/mockData'
import { formatPeso } from '../../utils/currency'

const columns = [
  { key: 'id', header: 'Entry ID', render: (value) => <span className="font-medium">{value}</span> },
  { key: 'district', header: 'District' },
  { key: 'owner', header: 'Submitted By' },
  { key: 'amount', header: 'Amount', render: (value) => formatPeso(value) },
  { key: 'status', header: 'Status', render: (value) => <StatusBadge status={value} /> },
]

export default function AllEntriesPage() {
  return (
    <div>
      <PageHeader title="All Entries" subtitle="Comprehensive list of submissions across all districts" />
      <Card>
        <DataTable columns={columns} rows={allEntries} rowKey="id" />
      </Card>
    </div>
  )
}
