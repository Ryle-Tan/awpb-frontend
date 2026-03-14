import { useState } from 'react'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import { entrySteps } from '../data/mockData'

export default function NewEntryPage() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div>
      <PageHeader
        title="New Entry"
        subtitle="Draft a new Annual Work Plan and Budget entry"
        action={
          <button className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
            Save Draft
          </button>
        }
      />

      <Card className="mb-6">
        <ol className="grid gap-3 md:grid-cols-4">
          {entrySteps.map((step, index) => {
            const isActive = index === activeStep
            const isComplete = index < activeStep
            return (
              <li
                key={step}
                className={`rounded-lg border px-3 py-2 text-sm ${
                  isActive
                    ? 'border-primary-200 bg-primary-50 text-primary-700'
                    : isComplete
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                      : 'border-slate-200 bg-white text-slate-500'
                }`}
              >
                <span className="mr-2 font-semibold">{index + 1}.</span>
                {step}
              </li>
            )
          })}
        </ol>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-slate-900">{entrySteps[activeStep]}</h2>
        <p className="mt-2 text-sm text-slate-500">
          This is a multi-step form shell. Replace placeholder fields with final form controls once requirements are confirmed.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="text-sm text-slate-600">
            Program Area
            <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="e.g. Productivity" />
          </label>
          <label className="text-sm text-slate-600">
            Intervention Title
            <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="e.g. Extension Outreach" />
          </label>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setActiveStep((step) => Math.max(step - 1, 0))}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Previous
          </button>
          <button
            onClick={() => setActiveStep((step) => Math.min(step + 1, entrySteps.length - 1))}
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
          >
            Next Step
          </button>
        </div>
      </Card>
    </div>
  )
}
