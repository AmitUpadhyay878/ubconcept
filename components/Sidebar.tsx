
'use client';
import { authClient } from '@/utils/auth-client';
import { BlocksIcon, BookAIcon, LayoutDashboardIcon } from 'lucide-react';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';

export default function Sidebar({userData}:any) {
  const pathname = usePathname();
  const menuItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: <LayoutDashboardIcon/> },
    { name: 'Blog Management', href: '/admin/blog-management', icon: <BookAIcon /> },
    {name:'Category Management', href: '/admin/category-management', icon: <BlocksIcon />},
  ];


  const handleSignOut = async (event: React.FormEvent) => {
    event.preventDefault();

    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect('/admin/signin');
        },
      },
    });
  }

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
             const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
             return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded transition ${
                  isActive ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          )})}
        </ul>
      </nav>

      <div className=" border-t border-gray-700">
        <form>
          <button
            onClick={handleSignOut}
            type="submit"
            className="w-full bg-red-600 rounded hover:bg-red-700 transition"
          >
            <div className='flex items-center justify-between'>
              <img src={userData?.image} alt="session-user" width="30" height="30" className='rounded-xl mx-2' /> Sign Out
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
