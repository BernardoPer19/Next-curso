// app/actions/set-tab.ts
'use server'

import { cookies } from 'next/headers'

export async function setSelectedTab(tab: number) {
  const cookieStore = await cookies();
  cookieStore.set('selectedTab', String(tab), { path: '/', maxAge: 60 * 60 });
}
