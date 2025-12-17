'use client'
import React, { useEffect } from 'react'
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
import { useCategoryStore } from '@/zustand/useCategoryStore';


interface CategoriesInterface {
  _id: string;
  title: string;
}

const CategoryTable = () => {

  const {fetchCategories,isLoading,categories} = useCategoryStore()

  useEffect(()=>{
        fetchCategories()
  },[fetchCategories])

  const columnHelper = createColumnHelper<CategoriesInterface>()

  const columns = [

    columnHelper.accessor('name', {
      id: "name",
      header: () => 'name',
      cell: ({ row }) => row.getValue("name"),
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
    data:  categories || [],
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

export default CategoryTable