import Listing from '@/components/Listing'
import { Button } from '@/components/ui/button'
import React from 'react'


const Blogs = () => {
  return (
    <div className=''>
      <h1 className='text-2xl font-bold mb-4'>Blogs</h1>
    <div className='p-4 flex justify-between items-center border-b'>
      <p>Blog Listing</p>
      <Button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
        Add New Blog  
      </Button>
    </div>
       <div className=''>
        <Listing />
       </div>
    </div>
  )
}

export default Blogs

