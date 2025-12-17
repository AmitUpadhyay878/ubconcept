import React from 'react'
import Link from 'next/link'
import BlogAddEditForm from '@/components/BlogAddEditForm'

const BlogAddEdit = () => {
  return (
    <>
    
    <div className='"container mx-auto py-10"'>
      <ul className='w-full h-full flex gap-4'>
        <li>
          <Link href="/admin/blog-management">
          Blog Management   
          </Link>
        </li>
        <li>
            -
        </li>
           <li>
          <Link href="/admin/blog-management/blog-add-edit">
          Add New Blog 
          </Link>
        </li> 
      </ul>
    </div>
      <div className='w-full h-fullrounded-md p-4'>
        <BlogAddEditForm />
      </div>
      </>
  )
}

export default BlogAddEdit