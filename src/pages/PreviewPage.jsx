import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import { previewColumns, previewRows } from '../data/mockData'
import { formatPeso } from '../utils/currency'

export default function PreviewPage() {
  return (
    <div>
      <PageHeader title="Preview" subtitle="Read-only spreadsheet view of prepared values" />

      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-600">
                {previewColumns.map((column) => (
                  <th key={column} className="border border-slate-200 px-4 py-2 text-left font-medium">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {previewRows.map((row) => (
                <tr key={row.category} className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">{row.category}</td>
                  {['jan', 'feb', 'mar', 'apr', 'total'].map((key) => (
                    <td key={key} className={`border border-slate-200 px-4 py-2 ${key === 'total' ? 'font-semibold text-slate-900' : ''}`}>
                      {row.isCurrency ? formatPeso(row[key]) : row[key].toLocaleString('en-PH')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
