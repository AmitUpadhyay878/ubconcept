'use client'
import React, { useMemo, useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Pagination } from './Pagination'

const Listing = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const data = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'First Blog Post',
      slug: 'first-blog-post',
      createdAt: '2023-10-01',
      excert: 'This is the first blog post.',
      user: 'Amit Upadhyay',
      published: true,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Second Blog Post',
      slug: 'second-blog-post',
      createdAt: '2023-10-05',
      excert: 'This is the second blog post.',
      user: 'Amit Upadhyay',
      published: false,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'Third Blog Post',
      slug: 'third-blog-post',
      createdAt: '2023-10-10',
      excert: 'This is the third blog post.',
      user: 'Amit Upadhyay',
      published: true,
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      title: 'Fourth Blog Post',
      slug: 'fourth-blog-post',
      createdAt: '2023-10-15',
      excert: 'This is the fourth blog post.',
      user: 'Amit Upadhyay',
      published: false,
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/150',
      title: 'Fifth Blog Post',
      slug: 'fifth-blog-post',
      createdAt: '2023-10-20',
      excert: 'This is the fifth blog post.',
      user: 'Amit Upadhyay',
      published: true,
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/150',
      title: 'Sixth Blog Post',
      slug: 'sixth-blog-post',
      createdAt: '2023-10-25',
      excert: 'This is the sixth blog post.',
      user: 'Amit Upadhyay',
      published: false,
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/150',
      title: 'Seventh Blog Post',
      slug: 'seventh-blog-post',
      createdAt: '2023-10-30',
      excert: 'This is the seventh blog post.',
      user: 'Amit Upadhyay',
      published: true,
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/150',
      title: 'Eighth Blog Post',
      slug: 'eighth-blog-post',
      createdAt: '2023-11-04',
      excert: 'This is the eighth blog post.',
      user: 'Amit Upadhyay',
      published: false,
    },
    {
      id: 9,
      image: 'https://via.placeholder.com/150',
      title: 'Ninth Blog Post',
      slug: 'ninth-blog-post',
      createdAt: '2023-11-09',
      excert: 'This is the ninth blog post.',
      user: 'Amit Upadhyay',
      published: true,
    },
    {
      id: 10,
      image: 'https://via.placeholder.com/150',
      title: 'Tenth Blog Post',
      slug: 'tenth-blog-post',
      createdAt: '2023-11-14',
      excert: 'This is the tenth blog post.',
      user: 'Amit Upadhyay',
      published: false,
    },
    {
      id: 11,
      image: 'https://via.placeholder.com/150',
      title: 'Eleventh Blog Post',
      slug: 'eleventh-blog-post',
      createdAt: '2023-11-19',
      excert: 'This is the eleventh blog post.',
      user: 'Amit Upadhyay',
      published: true,
    },
  ]

  const columnHelper = createColumnHelper<any>()

  const columns = [

    columnHelper.accessor('image', {
      header: 'Image',
      id: "image",
      cell: (info) => (
        <img
          loading='lazy'
          src={info.getValue()}
          alt={`${info.row.original.title}`}
          className="w-16 h-16 object-cover rounded"
        />
      ),
    }),
    columnHelper.accessor('title', {
      header: 'Title',
      id: "title",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor('createdAt', {
      header: 'Created At',
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),

    columnHelper.accessor('user', {
      header: 'User',
      id: "user",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('published', {
      header: 'Status',
      cell: (info) => (
        <span className={`px-2 py-1 rounded-full text-xs ${info.getValue() ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
          {info.getValue() ? 'Published' : 'Draft'}
        </span>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: (info) => (
        <div className="space-x-2">
          <button
          aria-label="Edit Blog"
            onClick={() => handleEdit(info.row.original.id)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Edit
          </button>
          <button
          aria-label="Delete Blog"
            onClick={() => handleDelete(info.row.original.id)}
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Delete
          </button>
        </div>
      ),
    }),
  ]


  const handleEdit = (id: number) => {
    console.log('Edit blog:', id);
    // Add your edit logic here
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      console.log('Delete blog:', id);
      // Add your delete logic here
    }
  };

  const paginatedRows = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }, [currentPage, data, pageSize]);

  const table = useReactTable({
    data: paginatedRows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);


  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className={`
                  transition-colors duration-200
                  ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  hover:bg-blue-50
                `}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap"
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex flex-wrap justify-between items-center border-t'>
          <div className="p-4 text-sm text-gray-700">
            {data.length > 0 ? (
              `Showing ${startIndex + 1} to ${endIndex} of ${data.length} entries`
            ) : (
              'No entries to show'
            )}
          </div>
          <div className="p-4">
            <Pagination
              total={data.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No data available
        </div>
      )}
    </div>
  )
}

export default Listing
