


import Sidebar from '@/components/Sidebar';


export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-gray-100 p-8">
        {children}
      </main>
    </div>
  );
}
