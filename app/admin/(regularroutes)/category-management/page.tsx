
import CategoryTable from '@/components/CategoryTable'
import Link from 'next/link'
import React from 'react'


const CategoryManagment = () => {

  return (
     <div>
       <div className='flex items-center justify-between'>
        <h1 className="text-3xl font-bold mb-6">Category Management</h1>
        <Link href="/admin/category-management/categroy-add-edit"
          className='bg-green-600 hover:bg-green-800 rounded-sm p-2 m-2 text-white'>
          Add New Category
        </Link>
      </div>
        <CategoryTable />
    </div>
  )
}

export default CategoryManagment
