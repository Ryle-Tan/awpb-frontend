export const mockRole = 'user'

export const userStatusSummary = [
  { label: 'Draft Entries', value: 4, tone: 'bg-slate-50 text-slate-700' },
  { label: 'Submitted', value: 12, tone: 'bg-blue-50 text-blue-700' },
  { label: 'Approved', value: 9, tone: 'bg-emerald-50 text-emerald-700' },
  { label: 'Requires Revision', value: 2, tone: 'bg-amber-50 text-amber-700' },
]

export const adminStatusSummary = [
  { label: 'Total Entries', value: 96, tone: 'bg-slate-50 text-slate-700' },
  { label: 'For Review', value: 18, tone: 'bg-violet-50 text-violet-700' },
  { label: 'Approved', value: 57, tone: 'bg-emerald-50 text-emerald-700' },
  { label: 'Needs Action', value: 21, tone: 'bg-amber-50 text-amber-700' },
]

export const recentEntries = [
  { id: 'AWPB-2026-001', activity: 'Farmer Field School Support', month: 'January', budget: 8400, status: 'Submitted' },
  { id: 'AWPB-2026-002', activity: 'Input Distribution Monitoring', month: 'February', budget: 12900, status: 'Approved' },
  { id: 'AWPB-2026-003', activity: 'District Stakeholder Meeting', month: 'March', budget: 4500, status: 'Draft' },
  { id: 'AWPB-2026-004', activity: 'Market Access Facilitation', month: 'April', budget: 10200, status: 'Requires Revision' },
]

export const myEntries = [
  { id: 'AWPB-2026-021', intervention: 'Water Management Training', period: 'Q1', officer: 'J. Banda', amount: 6750, status: 'Draft' },
  { id: 'AWPB-2026-022', intervention: 'Soil Testing Campaign', period: 'Q2', officer: 'P. Tembo', amount: 9320, status: 'Submitted' },
  { id: 'AWPB-2026-023', intervention: 'Extension Material Printing', period: 'Q2', officer: 'L. Mbewe', amount: 3890, status: 'Approved' },
  { id: 'AWPB-2026-024', intervention: 'Agri-Input Procurement', period: 'Q3', officer: 'D. Chirwa', amount: 15440, status: 'Pending Review' },
]

export const allEntries = [
  { id: 'AWPB-2026-101', district: 'North District', owner: 'K. Cruz', amount: 18850, status: 'Submitted' },
  { id: 'AWPB-2026-102', district: 'East District', owner: 'M. Santos', amount: 24100, status: 'Approved' },
  { id: 'AWPB-2026-103', district: 'South District', owner: 'R. Mendoza', amount: 9650, status: 'Pending Review' },
  { id: 'AWPB-2026-104', district: 'West District', owner: 'A. Reyes', amount: 11975, status: 'Requires Revision' },
]

export const reviewEntries = [
  { id: 'AWPB-2026-111', intervention: 'Irrigation Rehabilitation', submittedBy: 'L. Domingo', submittedOn: '2026-04-10', amount: 22300, status: 'Pending Review' },
  { id: 'AWPB-2026-112', intervention: 'Seed Multiplication Support', submittedBy: 'T. Mercado', submittedOn: '2026-04-12', amount: 17225, status: 'Pending Review' },
  { id: 'AWPB-2026-113', intervention: 'Post-Harvest Facility Repair', submittedBy: 'J. Salazar', submittedOn: '2026-04-13', amount: 28740, status: 'Requires Revision' },
]

export const previewColumns = ['Category', 'Jan', 'Feb', 'Mar', 'Apr', 'Total']

export const previewRows = [
  { category: 'Training Sessions', jan: 2, feb: 3, mar: 2, apr: 4, total: 11, isCurrency: false },
  { category: 'Demonstration Plots', jan: 1, feb: 2, mar: 2, apr: 2, total: 7, isCurrency: false },
  { category: 'Input Support Beneficiaries', jan: 120, feb: 160, mar: 140, apr: 180, total: 600, isCurrency: false },
  { category: 'Budget Utilization', jan: 3200, feb: 4100, mar: 3750, apr: 5200, total: 16250, isCurrency: true },
]

export const entrySteps = ['Context', 'Activity Details', 'Monthly Targets and Budget', 'Review']
