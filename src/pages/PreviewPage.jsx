import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import { consolidatedPreviewRows } from '../data/mockData'
import { formatPeso } from '../utils/currency'

const monthHeaders = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function PreviewPage({ role = 'user' }) {
  return (
    <div>
      <PageHeader
        title="AWPB Consolidated Preview"
        subtitle={
          role === 'admin'
            ? 'Read-only consolidated report of all submitted entries for management review.'
            : 'Read-only preview of encoded entries in report format prior to final consolidation.'
        }
      />

      <Card>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Program and Activity Summary Report</h2>
            <p className="text-sm text-slate-500">Targets and budget distribution by activity, component, and fund source</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[1400px] text-xs">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Component / Key Activity</th>
                <th className="px-3 py-2 text-left font-semibold">Activity Title</th>
                <th className="px-3 py-2 text-left font-semibold">Expected Output</th>
                {monthHeaders.map((month) => (
                  <th key={month} className="px-2 py-2 text-right font-semibold">{month}</th>
                ))}
                <th className="px-3 py-2 text-right font-semibold">Total Physical Target</th>
                <th className="px-3 py-2 text-right font-semibold">Total Budget</th>
                <th className="px-3 py-2 text-left font-semibold">Fund Source</th>
              </tr>
            </thead>
            <tbody>
              {consolidatedPreviewRows.map((row) => (
                <tr key={row.activityTitle} className="border-t border-slate-100 hover:bg-slate-50/70">
                  <td className="px-3 py-2 text-slate-700">
                    <p className="font-semibold">{row.component}</p>
                    <p className="text-slate-500">{row.keyActivity}</p>
                  </td>
                  <td className="px-3 py-2 text-slate-700">{row.activityTitle}</td>
                  <td className="px-3 py-2 text-slate-700">{row.expectedOutput}</td>
                  {row.monthly.map((value, index) => (
                    <td key={`${row.activityTitle}-${index}`} className="px-2 py-2 text-right text-slate-700">{value.toLocaleString('en-PH')}</td>
                  ))}
                  <td className="px-3 py-2 text-right font-semibold text-slate-900">{row.totalPhysicalTarget.toLocaleString('en-PH')}</td>
                  <td className="px-3 py-2 text-right font-semibold text-slate-900">{formatPeso(row.totalBudget)}</td>
                  <td className="px-3 py-2 text-slate-700">{row.fundSource}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
