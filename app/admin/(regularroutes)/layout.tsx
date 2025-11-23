import Sidebar from '@/components/Sidebar';
import { auth } from '@/utils/auth';
import { headers } from 'next/headers';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        throw new Error('Unauthorized')
    }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0">
        <Sidebar userData={session?.user || null} />
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
