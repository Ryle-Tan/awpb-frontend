import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import { myEntries } from '../data/mockData'

export default function MyEntriesPage() {
  return (
    <div>
      <PageHeader
        title="My Entries"
        subtitle="Track the status of all entries assigned to your account"
      />

      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-3 py-2 font-medium">Entry ID</th>
                <th className="px-3 py-2 font-medium">Intervention</th>
                <th className="px-3 py-2 font-medium">Period</th>
                <th className="px-3 py-2 font-medium">Responsible Officer</th>
                <th className="px-3 py-2 font-medium">Amount</th>
                <th className="px-3 py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {myEntries.map((entry) => (
                <tr key={entry.id} className="border-t border-slate-100">
                  <td className="px-3 py-3 font-medium text-slate-700">{entry.id}</td>
                  <td className="px-3 py-3">{entry.intervention}</td>
                  <td className="px-3 py-3">{entry.period}</td>
                  <td className="px-3 py-3">{entry.officer}</td>
                  <td className="px-3 py-3">{entry.amount}</td>
                  <td className="px-3 py-3">
                    <StatusBadge status={entry.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
