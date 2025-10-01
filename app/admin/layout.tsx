"use client"
import Link from "next/link";
import { FileText, Briefcase, LogIn } from 'lucide-react';
import { useState } from 'react';
// import { ToggleSwitch } from '@/components/ui/toggle-switch';

const AdminLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-black/[0.96]">
      <div className="flex">
        {/* Sidebar */}
        <aside 
          className={`${
            isSidebarOpen ? 'w-64' : 'w-20'
          } min-h-screen bg-white/5 backdrop-blur-sm border-r border-white/10 transition-all duration-300`}
        >
          <div className="p-6 flex items-center justify-between">
            <Link href="/admin" className="flex items-center space-x-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-amber-500 rounded-md transform rotate-45"></div>
              </div>
              {isSidebarOpen && <span className="text-white font-semibold text-xl">Admin</span>}
            </Link>
            {/* <ToggleSwitch
              checked={isSidebarOpen}
              onChange={() => setSidebarOpen(!isSidebarOpen)}
              className="ml-2"
            /> */}
          </div>

          <nav className="mt-6">
            <ul className="space-y-1">
              <li>
                <Link 
                  href="/admin/blog-managment" 
                  className={`flex items-center px-6 py-3 text-gray-300 hover:text-amber-400 hover:bg-white/5 transition-colors ${
                    !isSidebarOpen && 'justify-center'
                  }`}
                >
                  <FileText className="w-5 h-5 mr-3" />
                  {isSidebarOpen && <span>Blog Management</span>}
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/Jobs-management" 
                  className={`flex items-center px-6 py-3 text-gray-300 hover:text-amber-400 hover:bg-white/5 transition-colors ${
                    !isSidebarOpen && 'justify-center'
                  }`}
                >
                  <Briefcase className="w-5 h-5 mr-3" />
                  {isSidebarOpen && <span>Jobs Management</span>}
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/signin" 
                  className={`flex items-center px-6 py-3 text-gray-300 hover:text-amber-400 hover:bg-white/5 transition-colors ${
                    !isSidebarOpen && 'justify-center'
                  }`}
                >
                  <LogIn className="w-5 h-5 mr-3" />
                  {isSidebarOpen && <span>Sign In</span>}
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;