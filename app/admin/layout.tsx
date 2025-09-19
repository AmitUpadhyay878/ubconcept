import Link from "next/link"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <main className="p-8 flex flex-wrap max-w-4xl mx-auto">
        <div className="bg-red-500  w-1/6">
          <ul className="flex flex-col p-4 m-4 space-y-6 space-x-4">
            <li><Link href="/admin/dashboard" className="text-white hover:underline">Dashboard</Link></li>
            <li><Link href="/admin/blogs" className="text-white hover:underline">Blogs</Link></li>
            </ul>
        </div>
        <div className=" bg-gray-800 w-5/6">{children}</div>
        </main>
    </div>
  )
}