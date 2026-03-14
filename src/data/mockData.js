export const statusSummary = [
  { label: 'Draft Entries', value: 4, tone: 'bg-slate-50 text-slate-700' },
  { label: 'Submitted', value: 12, tone: 'bg-blue-50 text-blue-700' },
  { label: 'Approved', value: 9, tone: 'bg-emerald-50 text-emerald-700' },
  { label: 'Requires Revision', value: 2, tone: 'bg-amber-50 text-amber-700' },
]

export const recentEntries = [
  { id: 'AWPB-2026-001', activity: 'Farmer Field School Support', month: 'January', budget: '$8,400', status: 'Submitted' },
  { id: 'AWPB-2026-002', activity: 'Input Distribution Monitoring', month: 'February', budget: '$12,900', status: 'Approved' },
  { id: 'AWPB-2026-003', activity: 'District Stakeholder Meeting', month: 'March', budget: '$4,500', status: 'Draft' },
  { id: 'AWPB-2026-004', activity: 'Market Access Facilitation', month: 'April', budget: '$10,200', status: 'Requires Revision' },
]

export const myEntries = [
  { id: 'AWPB-2026-021', intervention: 'Water Management Training', period: 'Q1', officer: 'J. Banda', amount: '$6,750', status: 'Draft' },
  { id: 'AWPB-2026-022', intervention: 'Soil Testing Campaign', period: 'Q2', officer: 'P. Tembo', amount: '$9,320', status: 'Submitted' },
  { id: 'AWPB-2026-023', intervention: 'Extension Material Printing', period: 'Q2', officer: 'L. Mbewe', amount: '$3,890', status: 'Approved' },
  { id: 'AWPB-2026-024', intervention: 'Agri-Input Procurement', period: 'Q3', officer: 'D. Chirwa', amount: '$15,440', status: 'Pending Review' },
]

export const previewColumns = ['Category', 'Jan', 'Feb', 'Mar', 'Apr', 'Total']

export const previewRows = [
  { category: 'Training Sessions', jan: 2, feb: 3, mar: 2, apr: 4, total: 11 },
  { category: 'Demonstration Plots', jan: 1, feb: 2, mar: 2, apr: 2, total: 7 },
  { category: 'Input Support Beneficiaries', jan: 120, feb: 160, mar: 140, apr: 180, total: 600 },
  { category: 'Budget Utilization (USD)', jan: 3200, feb: 4100, mar: 3750, apr: 5200, total: 16250 },
]

export const entrySteps = [
  'Context',
  'Activity Details',
  'Monthly Targets and Budget',
  'Review',
]
