import Sidebar from '@/components/Sidebar';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className="h-auto overflow-hidden">
      <main className="bg-gradient-to-br from-[#ff7e5f] to-[#feb47b]">
        {children}
      </main>
    </div>
  );
}
