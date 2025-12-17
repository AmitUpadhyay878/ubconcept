'use client'
import React, { useEffect, useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  createColumnHelper
} from '@tanstack/react-table';

import TanstackTable from './TanstackTable';
import Pagination from './Pagination';
import { Button } from './ui/button';
import { useBlogStore } from '@/zustand/useBlogStore';
import { format } from 'date-fns';


interface BlogsInterface {
  _id: string;
  title: string;
  content: string;
  featureImage?: string;
  author?:any;
  createdAt?: string;
}
const BlogsTable = () => {

  const{blogs, fetchPosts, isLoading} = useBlogStore()

  useEffect(()=>{
      fetchPosts()
  },[fetchPosts])

  // const [blogData, setBlogData] = useState([])

// useEffect(() => {

//     fetch('/api/admin/blog')
//       .then((res) => res.json())
//       .then((data) => setBlogData(data?.blogs));
//   }, [])

  const columnHelper = createColumnHelper<BlogsInterface>()

  const columns = [
    columnHelper.accessor('featureImage', {
      id: "featureImage",
      header: () => 'Feature Image',
      cell: ({ row }) => row.getValue("featureImage"),
    }),

    columnHelper.accessor('title', {
      id: "title",
      header: () => 'Title',
      cell: ({ row }) => row.getValue("title"),
    }),
    // columnHelper.accessor('content', {
    //   id: "content",
    //   header: () => 'Content',
    //   cell: ({ row }) => {
    //     return (
    //       <span dangerouslySetInnerHTML={{__html: row?.original?.content.substring(0, 40) + "..."}} />
    //     )
    //   }
    // }),
    columnHelper.accessor('author',{
      id:"author",
      header:"Author",
      cell:({row})=>{
        return(
          <span>{row?.original?.author?.name}</span>
        )
      }

    }),
    columnHelper.accessor('createdAt', {
      id: "createdAt",
      header: () => 'Created At',
      cell: ({ row }) => {
          return(
            <span>{format(row?.original?.createdAt || new Date(),'MMM, dd, yyyy')}</span>
          )
      },
    }),
    columnHelper.display(
        {
          id: "actions",
          header: () => 'Actions',
          cell: ({ row }) => (
            <div className='flex items-center justify-center gap-2'>
              <Button type='button' className='bg-green-500 text-white rounded-md'>Edit</Button>
              <Button type='button' className='bg-red-500 text-white rounded-md'>Delete</Button>
            </div>
          ),
        }
    )
  ]

  const tableInstance = useReactTable({
    columns,
    data:blogs || [],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });



  return (
    <div>
      <TanstackTable
        tableInstance={tableInstance}
      />
      <div>
        <Pagination  />
      </div>
    </div>
  )
}

export default BlogsTable