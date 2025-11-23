
'use client';
import { authClient } from '@/utils/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Sidebar({userData}:any) {
  const menuItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
    { name: 'Blog Management', href: '/admin/blog-management', icon: '📝' },
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
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <form>
          <button
            onClick={handleSignOut}
            type="submit"
            className="w-full px-8 py-2 bg-red-600 rounded hover:bg-red-700 transition"
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
