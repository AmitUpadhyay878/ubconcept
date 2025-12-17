
import BlogsTable from '@/components/BlogsTable'
import Link from 'next/link'
import React from 'react'


const BlogManagment = () => {

  return (
    <div className=''>
      <div className='flex items-center justify-between'>
        <h1 className="text-3xl font-bold mb-6">Blog Management</h1>
        <Link href="/admin/blog-management/blog-add-edit"
          className='bg-green-600 hover:bg-green-800 rounded-sm p-2 m-2 text-white'>
          Add New Blog
        </Link>
      </div>
      <BlogsTable />
    </div>
  )
}

export default BlogManagment
