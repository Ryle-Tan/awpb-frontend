export const roles = ['user', 'admin']

export const profileByRole = {
  user: {
    name: 'Maria Teresa Dela Cruz',
    email: 'mtdelacruz@awpb.gov.ph',
    roleLabel: 'Encoder',
    implementingUnit: 'Regional Field Office III - Program Planning Division',
  },
  admin: {
    name: 'Engr. Paolo Antonio Reyes',
    email: 'pareyes@awpb.gov.ph',
    roleLabel: 'Reviewer',
    implementingUnit: 'National AWPB Consolidation and Review Secretariat',
  },
}

export const submissionPeriod = {
  status: 'Open',
  activeFiscalYear: 'FY 2026',
  cycle: '2026 Annual Work Plan and Budget Encoding',
  deadline: 'October 30, 2025',
  timeline: 'August 1, 2025 - October 30, 2025',
}

export const userSummaryCards = [
  { label: 'Draft', value: 3 },
  { label: 'Submitted', value: 6 },
  { label: 'Approved', value: 4 },
  { label: 'Requires Revision', value: 2 },
]

export const adminSummaryCards = [
  { label: 'Total Entries', value: 58 },
  { label: 'Submitted', value: 22 },
  { label: 'Approved', value: 27 },
  { label: 'Requires Revision', value: 6 },
  { label: 'Rejected', value: 3 },
]

export const statusBreakdown = [
  { status: 'Submitted', count: 22, percent: 38 },
  { status: 'Approved', count: 27, percent: 47 },
  { status: 'Requires Revision', count: 6, percent: 10 },
  { status: 'Rejected', count: 3, percent: 5 },
]

export const contextOptions = {
  implementingUnits: [
    'Regional Field Office I - Crop Production Division',
    'Regional Field Office III - Program Planning Division',
    'Regional Field Office V - Agribusiness and Marketing Assistance Division',
    'Provincial Operations Center - Nueva Ecija',
  ],
  fiscalYears: ['FY 2026', 'FY 2027'],
  mainGoals: [
    {
      label: 'Food Security and Productivity Enhancement',
      components: [
        {
          label: 'Crop Productivity Development',
          keyActivities: [
            {
              label: 'Rice Intensification Support',
              indicators: ['Number of farmers trained', 'Hectares supported with technologies'],
            },
            {
              label: 'High-Value Crop Expansion',
              indicators: ['Area established for high-value crops', 'Number of demo farms operational'],
            },
          ],
        },
        {
          label: 'Extension and Capacity Building',
          keyActivities: [
            {
              label: 'Farmer Field School Implementation',
              indicators: ['Number of completed sessions', 'Farmer graduation rate'],
            },
          ],
        },
      ],
    },
    {
      label: 'Resilient Agriculture and Climate Adaptation',
      components: [
        {
          label: 'Water Management and Irrigation Efficiency',
          keyActivities: [
            {
              label: 'Community-Based Irrigation Rehabilitation',
              indicators: ['Irrigation systems restored', 'Service area coverage increase'],
            },
          ],
        },
      ],
    },
  ],
  subActivityGroups: ['Training and Capability Development', 'Infrastructure and Facilities', 'Input Support and Distribution'],
  fundSources: ['General Appropriations Act (GAA)', 'Special Area for Agricultural Development', 'Locally-Funded Project', 'Grant and Donor Support'],
}

export const expenditureCategories = [
  'Maintenance and Other Operating Expenses',
  'Capital Outlay',
  'Personnel Services',
  'Program Support Cost',
]

export const unitsOfMeasure = ['session', 'beneficiary', 'hectare', 'facility', 'barangay']

export const quarters = ['Q1', 'Q2', 'Q3', 'Q4']

export const entrySteps = ['Context', 'Activity Details', 'Monthly Targets and Budget', 'Review and Submit']

export const monthlyTemplate = [
  { month: 'January', target: 0, budget: 0 },
  { month: 'February', target: 0, budget: 0 },
  { month: 'March', target: 0, budget: 0 },
  { month: 'April', target: 0, budget: 0 },
  { month: 'May', target: 0, budget: 0 },
  { month: 'June', target: 0, budget: 0 },
  { month: 'July', target: 0, budget: 0 },
  { month: 'August', target: 0, budget: 0 },
  { month: 'September', target: 0, budget: 0 },
  { month: 'October', target: 0, budget: 0 },
  { month: 'November', target: 0, budget: 0 },
  { month: 'December', target: 0, budget: 0 },
]

export const sampleEntry = {
  id: 'AWPB-2026-R3-014',
  implementingUnit: 'Regional Field Office III - Program Planning Division',
  fiscalYear: 'FY 2026',
  mainGoal: 'Food Security and Productivity Enhancement',
  component: 'Extension and Capacity Building',
  keyActivity: 'Farmer Field School Implementation',
  performanceIndicator: 'Number of completed sessions',
  subActivityGroup: 'Training and Capability Development',
  fundSource: 'General Appropriations Act (GAA)',
  title: 'Farmer Field School for Climate-Smart Rice Production',
  output: 'At least 240 rice farmers complete season-long climate-smart training modules.',
  uom: 'beneficiary',
  budgetCategory: 'Maintenance and Other Operating Expenses',
  quarter: 'Q2',
  remarks: 'Coordinate with municipal agriculture offices for participant nominations.',
  status: 'Draft',
  monthlyPlan: [
    { month: 'January', target: 12, budget: 45000 },
    { month: 'February', target: 16, budget: 52000 },
    { month: 'March', target: 20, budget: 64000 },
    { month: 'April', target: 24, budget: 68000 },
    { month: 'May', target: 26, budget: 71000 },
    { month: 'June', target: 28, budget: 74500 },
    { month: 'July', target: 30, budget: 79000 },
    { month: 'August', target: 24, budget: 66500 },
    { month: 'September', target: 22, budget: 63800 },
    { month: 'October', target: 18, budget: 55400 },
    { month: 'November', target: 12, budget: 42800 },
    { month: 'December', target: 8, budget: 29600 },
  ],
}

export const userRecentEntries = [
  {
    id: 'AWPB-2026-R3-014',
    activityTitle: 'Farmer Field School for Climate-Smart Rice Production',
    implementingUnit: 'RFO III - Program Planning Division',
    totalBudget: 708600,
    status: 'Submitted',
    lastUpdated: '2025-10-05',
    component: 'Extension and Capacity Building',
    fundSource: 'General Appropriations Act (GAA)',
    fiscalYear: 'FY 2026',
  },
  {
    id: 'AWPB-2026-R3-015',
    activityTitle: 'Community Soil Analysis and Nutrient Management Clinics',
    implementingUnit: 'RFO III - Program Planning Division',
    totalBudget: 492000,
    status: 'Approved',
    lastUpdated: '2025-10-02',
    component: 'Crop Productivity Development',
    fundSource: 'Locally-Funded Project',
    fiscalYear: 'FY 2026',
  },
  {
    id: 'AWPB-2026-R3-016',
    activityTitle: 'Irrigation User Association Technical Refresher Series',
    implementingUnit: 'Provincial Operations Center - Nueva Ecija',
    totalBudget: 355000,
    status: 'Requires Revision',
    lastUpdated: '2025-09-30',
    component: 'Water Management and Irrigation Efficiency',
    fundSource: 'Special Area for Agricultural Development',
    fiscalYear: 'FY 2026',
  },
  {
    id: 'AWPB-2026-R3-017',
    activityTitle: 'Municipal Seed Buffer Stock Validation and Redistribution',
    implementingUnit: 'RFO III - Program Planning Division',
    totalBudget: 268500,
    status: 'Draft',
    lastUpdated: '2025-09-27',
    component: 'Crop Productivity Development',
    fundSource: 'General Appropriations Act (GAA)',
    fiscalYear: 'FY 2026',
  },
]

export const allEntries = [
  {
    id: 'AWPB-2026-R1-031',
    submittedBy: 'A. Dominguez',
    implementingUnit: 'Regional Field Office I - Crop Production Division',
    activityTitle: 'Hybrid Corn Block Farming Demonstration Support',
    component: 'Crop Productivity Development',
    fundSource: 'General Appropriations Act (GAA)',
    totalBudget: 835000,
    status: 'Submitted',
    submissionDate: '2025-10-01',
    fiscalYear: 'FY 2026',
  },
  {
    id: 'AWPB-2026-R3-014',
    submittedBy: 'M.T. Dela Cruz',
    implementingUnit: 'Regional Field Office III - Program Planning Division',
    activityTitle: 'Farmer Field School for Climate-Smart Rice Production',
    component: 'Extension and Capacity Building',
    fundSource: 'General Appropriations Act (GAA)',
    totalBudget: 708600,
    status: 'Submitted',
    submissionDate: '2025-10-05',
    fiscalYear: 'FY 2026',
  },
  {
    id: 'AWPB-2026-R5-009',
    submittedBy: 'C. Villanueva',
    implementingUnit: 'Regional Field Office V - Agribusiness and Marketing Assistance Division',
    activityTitle: 'Value Chain Market Linkage Forum and Logistics Support',
    component: 'Extension and Capacity Building',
    fundSource: 'Grant and Donor Support',
    totalBudget: 620000,
    status: 'Approved',
    submissionDate: '2025-09-25',
    fiscalYear: 'FY 2026',
  },
  {
    id: 'AWPB-2026-NE-012',
    submittedBy: 'P. Mendoza',
    implementingUnit: 'Provincial Operations Center - Nueva Ecija',
    activityTitle: 'Canal Clearing and Irrigation Line Rehabilitation Drive',
    component: 'Water Management and Irrigation Efficiency',
    fundSource: 'Special Area for Agricultural Development',
    totalBudget: 955000,
    status: 'Requires Revision',
    submissionDate: '2025-09-28',
    fiscalYear: 'FY 2026',
  },
  {
    id: 'AWPB-2026-R3-002',
    submittedBy: 'R. Santiago',
    implementingUnit: 'Regional Field Office III - Program Planning Division',
    activityTitle: 'Agri-Input Procurement and Quality Assurance Monitoring',
    component: 'Crop Productivity Development',
    fundSource: 'Locally-Funded Project',
    totalBudget: 1120000,
    status: 'Rejected',
    submissionDate: '2025-09-20',
    fiscalYear: 'FY 2026',
  },
]

export const reviewQueue = [
  {
    id: 'AWPB-2026-R3-014',
    submittedBy: 'M.T. Dela Cruz',
    implementingUnit: 'Regional Field Office III - Program Planning Division',
    activityTitle: 'Farmer Field School for Climate-Smart Rice Production',
    fundSource: 'General Appropriations Act (GAA)',
    totalBudget: 708600,
    status: 'Submitted',
    submissionDate: '2025-10-05',
    remarksHistory: [
      { date: '2025-10-05', author: 'System', note: 'Entry submitted for review.' },
      { date: '2025-10-06', author: 'Budget Reviewer', note: 'Validated monthly spread and annual totals.' },
    ],
  },
  {
    id: 'AWPB-2026-NE-012',
    submittedBy: 'P. Mendoza',
    implementingUnit: 'Provincial Operations Center - Nueva Ecija',
    activityTitle: 'Canal Clearing and Irrigation Line Rehabilitation Drive',
    fundSource: 'Special Area for Agricultural Development',
    totalBudget: 955000,
    status: 'Requires Revision',
    submissionDate: '2025-09-28',
    remarksHistory: [
      { date: '2025-09-29', author: 'Engineering Reviewer', note: 'Please align Q3 targets with implementation timeline.' },
    ],
  },
]

export const consolidatedPreviewRows = [
  {
    component: 'Extension and Capacity Building',
    keyActivity: 'Farmer Field School Implementation',
    activityTitle: 'Farmer Field School for Climate-Smart Rice Production',
    expectedOutput: '240 farmers complete training modules',
    fundSource: 'General Appropriations Act (GAA)',
    monthly: [12, 16, 20, 24, 26, 28, 30, 24, 22, 18, 12, 8],
    totalPhysicalTarget: 240,
    totalBudget: 708600,
  },
  {
    component: 'Crop Productivity Development',
    keyActivity: 'Rice Intensification Support',
    activityTitle: 'Municipal Seed Buffer Stock Validation and Redistribution',
    expectedOutput: 'Seed reserves validated in 30 municipalities',
    fundSource: 'General Appropriations Act (GAA)',
    monthly: [2, 3, 3, 2, 2, 4, 4, 4, 3, 2, 1, 0],
    totalPhysicalTarget: 30,
    totalBudget: 268500,
  },
  {
    component: 'Water Management and Irrigation Efficiency',
    keyActivity: 'Community-Based Irrigation Rehabilitation',
    activityTitle: 'Canal Clearing and Irrigation Line Rehabilitation Drive',
    expectedOutput: '45 km irrigation lines rehabilitated',
    fundSource: 'Special Area for Agricultural Development',
    monthly: [1, 2, 4, 4, 5, 5, 6, 6, 5, 4, 2, 1],
    totalPhysicalTarget: 45,
    totalBudget: 955000,
  },
]
