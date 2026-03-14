import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import { previewColumns, previewRows } from '../data/mockData'

export default function PreviewPage() {
  return (
    <div>
      <PageHeader
        title="Preview"
        subtitle="Read-only spreadsheet view of prepared values"
      />

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
                  <td className="border border-slate-200 px-4 py-2">{row.jan.toLocaleString()}</td>
                  <td className="border border-slate-200 px-4 py-2">{row.feb.toLocaleString()}</td>
                  <td className="border border-slate-200 px-4 py-2">{row.mar.toLocaleString()}</td>
                  <td className="border border-slate-200 px-4 py-2">{row.apr.toLocaleString()}</td>
                  <td className="border border-slate-200 px-4 py-2 font-semibold text-slate-900">{row.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
