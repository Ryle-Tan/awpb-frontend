import {
  ClipboardCheck,
  FilePlus2,
  LayoutDashboard,
  ListChecks,
  Sheet,
  ShieldCheck,
  TableProperties,
} from 'lucide-react'

export const roleConfig = {
  user: {
    appTitle: 'AWPB User Entry System',
    navItems: [
      { to: '/', label: 'Dashboard', icon: LayoutDashboard },
      { to: '/new-entry', label: 'New AWPB Entry', icon: FilePlus2 },
      { to: '/my-entries', label: 'My Entries', icon: ListChecks },
      { to: '/preview', label: 'Preview', icon: Sheet },
    ],
  },
  admin: {
    appTitle: 'AWPB Review and Approval Console',
    navItems: [
      { to: '/', label: 'Admin Dashboard', icon: ShieldCheck },
      { to: '/all-entries', label: 'All Entries', icon: TableProperties },
      { to: '/review-entries', label: 'Review Entries', icon: ClipboardCheck },
      { to: '/preview', label: 'Preview', icon: Sheet },
    ],
  },
}
