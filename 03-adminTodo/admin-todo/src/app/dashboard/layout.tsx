import { ReactNode } from 'react';
import ClientLayout from './clientLayout';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
