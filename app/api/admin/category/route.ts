
import CategoryModel from '@/models/categoryModel'
import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';

export async function GET( req: Request){
            await dbConnect()
      try {
                  const categories = await CategoryModel.find().populate('blogs')
                  if(!categories){
                        return NextResponse.json({ message: 'Category not found' })
                  }
                  return NextResponse.json({ categories })
            
      } catch (error) {
            return NextResponse.json({ message: 'Error fetching categories' })
      }
}