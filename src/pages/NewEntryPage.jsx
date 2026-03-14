import { useMemo, useState } from 'react'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import {
  contextOptions,
  entrySteps,
  expenditureCategories,
  quarters,
  sampleEntry,
  unitsOfMeasure,
} from '../data/mockData'
import { formatPeso } from '../utils/currency'

const inputClass = 'mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700'

export default function NewEntryPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState(sampleEntry)

  const selectedGoal = useMemo(
    () => contextOptions.mainGoals.find((goal) => goal.label === formData.mainGoal) || contextOptions.mainGoals[0],
    [formData.mainGoal],
  )
  const componentOptions = selectedGoal.components
  const selectedComponent = componentOptions.find((component) => component.label === formData.component) || componentOptions[0]
  const keyActivityOptions = selectedComponent.keyActivities
  const selectedKeyActivity = keyActivityOptions.find((activity) => activity.label === formData.keyActivity) || keyActivityOptions[0]

  const totals = useMemo(() => {
    const totalPhysicalTarget = formData.monthlyPlan.reduce((sum, item) => sum + Number(item.target || 0), 0)
    const totalBudget = formData.monthlyPlan.reduce((sum, item) => sum + Number(item.budget || 0), 0)
    return { totalPhysicalTarget, totalBudget }
  }, [formData.monthlyPlan])

  const updateField = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }))

  const updateMonthValue = (index, field, value) => {
    const safeValue = Number.isNaN(Number(value)) ? 0 : Number(value)
    setFormData((prev) => ({
      ...prev,
      monthlyPlan: prev.monthlyPlan.map((row, rowIndex) => (rowIndex === index ? { ...row, [field]: safeValue } : row)),
    }))
  }

  return (
    <div>
      <PageHeader title="New AWPB Entry" subtitle="Prepare a complete annual entry using the guided four-step encoding workflow." />

      <Card className="mb-6">
        <ol className="grid gap-3 md:grid-cols-4">
          {entrySteps.map((step, index) => {
            const isActive = index === activeStep
            const isComplete = index < activeStep
            return (
              <li key={step} className={`rounded-xl border px-3 py-3 text-sm ${isActive ? 'border-primary-200 bg-primary-50 text-primary-700' : isComplete ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-white text-slate-500'}`}>
                <span className="mr-2 font-semibold">Step {index + 1}</span>
                {step}
              </li>
            )
          })}
        </ol>
      </Card>

      <Card>
        {activeStep === 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['Implementing Unit', 'implementingUnit', contextOptions.implementingUnits],
              ['Fiscal Year', 'fiscalYear', contextOptions.fiscalYears],
              ['Main Goal', 'mainGoal', contextOptions.mainGoals.map((goal) => goal.label)],
              ['Component', 'component', componentOptions.map((component) => component.label)],
              ['Key Activity', 'keyActivity', keyActivityOptions.map((activity) => activity.label)],
              ['Performance Indicator', 'performanceIndicator', selectedKeyActivity.indicators],
              ['Sub-Activity Group', 'subActivityGroup', contextOptions.subActivityGroups],
              ['Fund Source', 'fundSource', contextOptions.fundSources],
            ].map(([label, field, options]) => (
              <label key={field} className="text-sm text-slate-600">
                {label}
                <select
                  value={formData[field]}
                  onChange={(event) => updateField(field, event.target.value)}
                  className={inputClass}
                >
                  {options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        ) : null}

        {activeStep === 1 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-600 md:col-span-2">
              Title of Activity
              <input value={formData.title} onChange={(event) => updateField('title', event.target.value)} className={inputClass} />
            </label>
            <label className="text-sm text-slate-600 md:col-span-2">
              Expected Activity Output
              <textarea value={formData.output} onChange={(event) => updateField('output', event.target.value)} rows={3} className={inputClass} />
            </label>
            <label className="text-sm text-slate-600">
              Unit of Measure
              <select value={formData.uom} onChange={(event) => updateField('uom', event.target.value)} className={inputClass}>
                {unitsOfMeasure.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label className="text-sm text-slate-600">
              Budget Expenditure Category
              <select value={formData.budgetCategory} onChange={(event) => updateField('budgetCategory', event.target.value)} className={inputClass}>
                {expenditureCategories.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label className="text-sm text-slate-600">
              Quarter
              <select value={formData.quarter} onChange={(event) => updateField('quarter', event.target.value)} className={inputClass}>
                {quarters.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label className="text-sm text-slate-600">
              Remarks
              <input value={formData.remarks} onChange={(event) => updateField('remarks', event.target.value)} className={inputClass} />
            </label>
          </div>
        ) : null}

        {activeStep === 2 ? (
          <div className="grid gap-4 lg:grid-cols-[1.6fr_0.8fr]">
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-slate-600">Month</th>
                    <th className="px-3 py-2 text-right font-semibold text-slate-600">Physical Target</th>
                    <th className="px-3 py-2 text-right font-semibold text-slate-600">Budget (₱)</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.monthlyPlan.map((row, index) => (
                    <tr key={row.month} className="border-t border-slate-100">
                      <td className="px-3 py-2 font-medium text-slate-700">{row.month}</td>
                      <td className="px-3 py-2">
                        <input type="number" value={row.target} onChange={(event) => updateMonthValue(index, 'target', event.target.value)} className="w-full rounded-lg border border-slate-200 px-2 py-1 text-right" />
                      </td>
                      <td className="px-3 py-2">
                        <input type="number" value={row.budget} onChange={(event) => updateMonthValue(index, 'budget', event.target.value)} className="w-full rounded-lg border border-slate-200 px-2 py-1 text-right" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Card className="h-fit">
              <h3 className="text-sm font-semibold text-slate-700">Totals Summary</h3>
              <p className="mt-4 text-sm text-slate-500">Total Physical Target</p>
              <p className="text-2xl font-semibold text-slate-900">{totals.totalPhysicalTarget.toLocaleString('en-PH')}</p>
              <p className="mt-4 text-sm text-slate-500">Total Budget</p>
              <p className="text-2xl font-semibold text-slate-900">{formatPeso(totals.totalBudget)}</p>
            </Card>
          </div>
        ) : null}

        {activeStep === 3 ? (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <h3 className="font-semibold text-slate-900">Context Summary</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li>Implementing Unit: {formData.implementingUnit}</li>
                  <li>Fiscal Year: {formData.fiscalYear}</li>
                  <li>Main Goal: {formData.mainGoal}</li>
                  <li>Component: {formData.component}</li>
                  <li>Key Activity: {formData.keyActivity}</li>
                  <li>Fund Source: {formData.fundSource}</li>
                </ul>
              </Card>
              <Card>
                <h3 className="font-semibold text-slate-900">Activity Details Summary</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li>Title: {formData.title}</li>
                  <li>Expected Output: {formData.output}</li>
                  <li>Unit of Measure: {formData.uom}</li>
                  <li>Budget Category: {formData.budgetCategory}</li>
                  <li>Quarter: {formData.quarter}</li>
                  <li>Remarks: {formData.remarks}</li>
                </ul>
              </Card>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-slate-600">Month</th>
                    <th className="px-3 py-2 text-right font-semibold text-slate-600">Physical Target</th>
                    <th className="px-3 py-2 text-right font-semibold text-slate-600">Budget (₱)</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.monthlyPlan.map((row) => (
                    <tr key={row.month} className="border-t border-slate-100">
                      <td className="px-3 py-2 text-slate-700">{row.month}</td>
                      <td className="px-3 py-2 text-right">{row.target.toLocaleString('en-PH')}</td>
                      <td className="px-3 py-2 text-right">{formatPeso(row.budget)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div>
                <p className="text-sm text-slate-600">Total Physical Target: <span className="font-semibold text-slate-900">{totals.totalPhysicalTarget.toLocaleString('en-PH')}</span></p>
                <p className="text-sm text-slate-600">Total Budget: <span className="font-semibold text-slate-900">{formatPeso(totals.totalBudget)}</span></p>
              </div>
              <StatusBadge status={formData.status} />
            </div>

            <div className="flex flex-wrap justify-end gap-2">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Back to Edit</button>
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Save as Draft</button>
              <button className="rounded-xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white">Submit Entry</button>
            </div>
          </div>
        ) : null}

        <div className="mt-6 flex justify-between">
          <button onClick={() => setActiveStep((step) => Math.max(step - 1, 0))} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Previous</button>
          <button onClick={() => setActiveStep((step) => Math.min(step + 1, entrySteps.length - 1))} className="rounded-xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700">{activeStep === entrySteps.length - 1 ? 'Stay on Review' : 'Next Step'}</button>
        </div>
      </Card>
    </div>
  )
}
