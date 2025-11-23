import React, { Suspense } from 'react'
import AdminLoginForm from '@/components/AdminLoginForm'
import { auth } from '@/utils/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const Signin = async() => {

  const session = await auth.api.getSession({
        headers: await headers()
    })

    if(session) {
        redirect('/admin/dashboard')
    }

  return (
   <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">UBConcept</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <AdminLoginForm />
        </Suspense>
      </div>
    </main>
  )
}

export default Signin
