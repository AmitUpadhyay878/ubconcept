import React from 'react'

const AdminDashboard = () => {
  return (
      <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Blogs</h3>
          <p className="text-3xl font-bold">24</p>
        </div>
        {/* Add more dashboard cards */}
      </div>
    </div>
  )
}

export default AdminDashboard
