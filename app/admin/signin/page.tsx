import React, { Suspense } from 'react'
import AdminLoginForm from '@/components/AdminLoginForm'

const Signin = () => {
  return (
   <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <AdminLoginForm />
        </Suspense>
      </div>
    </main>
  )
}

export default Signin
