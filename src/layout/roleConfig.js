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
    appTitle: 'User Entry System',
    profileName: 'Planning Officer',
    profileEmail: 'awpb.user@example.org',
    navItems: [
      { to: '/', label: 'Dashboard', icon: LayoutDashboard },
      { to: '/new-entry', label: 'New Entry', icon: FilePlus2 },
      { to: '/my-entries', label: 'My Entries', icon: ListChecks },
      { to: '/preview', label: 'Preview', icon: Sheet },
    ],
  },
  admin: {
    appTitle: 'Admin Review Console',
    profileName: 'AWPB Admin',
    profileEmail: 'awpb.admin@example.org',
    navItems: [
      { to: '/', label: 'Admin Dashboard', icon: ShieldCheck },
      { to: '/all-entries', label: 'All Entries', icon: TableProperties },
      { to: '/review-entries', label: 'Review Entries', icon: ClipboardCheck },
      { to: '/preview', label: 'Preview', icon: Sheet },
    ],
  },
}
