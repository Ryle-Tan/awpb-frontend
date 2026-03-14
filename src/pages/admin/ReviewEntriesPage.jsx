import { useMemo, useState } from 'react'
import Card from '../../components/Card'
import DataTable from '../../components/DataTable'
import PageHeader from '../../components/PageHeader'
import StatusBadge from '../../components/StatusBadge'
import { reviewQueue, sampleEntry } from '../../data/mockData'
import { formatPeso } from '../../utils/currency'

const queueColumns = [
  { key: 'id', header: 'Entry ID', render: (value) => <span className="font-semibold">{value}</span> },
  { key: 'activityTitle', header: 'Activity Title' },
  { key: 'submittedBy', header: 'Submitted By' },
  { key: 'submissionDate', header: 'Submission Date' },
  { key: 'totalBudget', header: 'Total Budget', cellClassName: 'text-right font-medium', render: (value) => formatPeso(value) },
  { key: 'status', header: 'Status', render: (value) => <StatusBadge status={value} /> },
]

export default function ReviewEntriesPage() {
  const [selectedId, setSelectedId] = useState(reviewQueue[0].id)
  const selectedEntry = useMemo(() => reviewQueue.find((entry) => entry.id === selectedId) || reviewQueue[0], [selectedId])

  return (
    <div>
      <PageHeader title="Review Entries" subtitle="Review submitted AWPB entries, inspect planning details, and record approval decisions." />

      <div className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
        <Card>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Submitted Entries Queue</h2>
          <div className="space-y-2">
            {reviewQueue.map((entry) => (
              <button
                key={entry.id}
                onClick={() => setSelectedId(entry.id)}
                className={`w-full rounded-xl border px-3 py-3 text-left ${selectedId === entry.id ? 'border-primary-200 bg-primary-50' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{entry.id}</p>
                    <p className="text-xs text-slate-500">{entry.activityTitle}</p>
                  </div>
                  <StatusBadge status={entry.status} />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4">
            <DataTable columns={queueColumns} rows={reviewQueue} rowKey="id" />
          </div>
        </Card>

        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Review Details</h2>
            <StatusBadge status={selectedEntry.status} />
          </div>

          <div className="space-y-3 text-sm text-slate-600">
            <p><span className="font-semibold text-slate-800">Entry ID:</span> {selectedEntry.id}</p>
            <p><span className="font-semibold text-slate-800">Submitted By:</span> {selectedEntry.submittedBy}</p>
            <p><span className="font-semibold text-slate-800">Implementing Unit:</span> {selectedEntry.implementingUnit}</p>
            <p><span className="font-semibold text-slate-800">Activity:</span> {selectedEntry.activityTitle}</p>
            <p><span className="font-semibold text-slate-800">Fund Source:</span> {selectedEntry.fundSource}</p>
            <p><span className="font-semibold text-slate-800">Total Budget:</span> {formatPeso(selectedEntry.totalBudget)}</p>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 p-3">
            <h3 className="mb-2 font-semibold text-slate-900">Context and Activity Summary</h3>
            <p className="text-sm text-slate-600">{sampleEntry.mainGoal} / {sampleEntry.component}</p>
            <p className="text-sm text-slate-600">{sampleEntry.keyActivity}</p>
            <p className="mt-2 text-sm text-slate-600">Expected Output: {sampleEntry.output}</p>
          </div>

          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-full text-xs">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-2 py-2 text-left font-semibold text-slate-600">Month</th>
                  <th className="px-2 py-2 text-right font-semibold text-slate-600">Target</th>
                  <th className="px-2 py-2 text-right font-semibold text-slate-600">Budget</th>
                </tr>
              </thead>
              <tbody>
                {sampleEntry.monthlyPlan.slice(0, 6).map((month) => (
                  <tr key={month.month} className="border-t border-slate-100">
                    <td className="px-2 py-1.5 text-slate-700">{month.month}</td>
                    <td className="px-2 py-1.5 text-right">{month.target.toLocaleString('en-PH')}</td>
                    <td className="px-2 py-1.5 text-right">{formatPeso(month.budget)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-slate-900">Remarks History</h3>
            <ul className="mt-2 space-y-2">
              {selectedEntry.remarksHistory.map((remark) => (
                <li key={`${remark.date}-${remark.author}`} className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-xs text-slate-600">
                  <p className="font-semibold text-slate-700">{remark.author} • {remark.date}</p>
                  <p className="mt-1">{remark.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button className="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white">Approve</button>
            <button className="rounded-xl bg-amber-500 px-3 py-2 text-xs font-semibold text-white">Return for Revision</button>
            <button className="rounded-xl bg-rose-600 px-3 py-2 text-xs font-semibold text-white">Reject</button>
          </div>
        </Card>
      </div>
    </div>
  )
}
