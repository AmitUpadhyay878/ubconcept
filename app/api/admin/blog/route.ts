import BlogModel from '@/models/BlogModel'
import CategoryModel from '@/models/categoryModel'
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { auth } from '@/utils/auth';
import { dbConnect } from '@/lib/mongodb';

export async function GET( req: Request, res: NextResponse){
            await dbConnect()
      try {
            const { searchParams } = new URL(req.url)
            const category = searchParams.get('category')

            if(category){
                  const blogs = await BlogModel.find({ categories: category }).populate('categories')

                  if(!blogs){
                        return NextResponse.json({ message: 'Blog not found' })
                  }
                  return NextResponse.json({ blogs })
            }else{
                  const blogs = await BlogModel.find().populate('categories')
                  if(!blogs){
                        return NextResponse.json({ message: 'Blog not found' })
                  }
                  return NextResponse.json({ blogs })
            }
      } catch (error) {
            return NextResponse.json({ message: 'Error fetching blogs' })
      }
}

export async function POST(req: Request, res: NextResponse){

                  await dbConnect()

              const session = await auth.api.getSession({
              headers: await headers()
          })
          if(!session){
                return NextResponse.json({ message: 'Unauthorized' })
          }

      try {
            const { title, content, featureImage, categories,author } = await req.json()

            if(!title || !content || !featureImage || !categories || !author){
                  return NextResponse.json({ message: 'Please fill all fields' })
            }

            const categoryIds = await CategoryModel.find({ name: { $in: categories } }).select('_id')
            if(!categoryIds){
                  return NextResponse.json({ message: 'Category not found' })
            }

            const newBlog = new BlogModel({
                  title,
                  content,
                  featureImage,
                  author:session?.user,
                  categories: categoryIds,
            })
            await newBlog.save()

            // Update categories with blog reference
            await CategoryModel.updateMany(
                  { _id: { $in: categoryIds } },
                  { $push: { blogs: newBlog._id } }
            )
            if(!newBlog){
                  return NextResponse.json({ message: 'Error creating blog' })
            }
            return NextResponse.json({ message: 'Blog created successfully' })
      } catch (error) {
            return NextResponse.json({ message: 'Error creating blog' })
      }
}

export async function PUT(req: Request, res: NextResponse){

                  await dbConnect()

      try {
            const { id, title, content, featureImage, categories } = await req.json()

            if(!title || !content || !featureImage || !categories){
                  return NextResponse.json({ message: 'Please fill all fields' })
            }

            const categoryIds = await CategoryModel.find({ name: { $in: categories } }).select('_id')
            if(!categoryIds){
                  return NextResponse.json({ message: 'Category not found' })
            }
            // Update blog
            await BlogModel.findByIdAndUpdate(id, {
                  title,
                  content,
                  featureImage,
                  categories: categoryIds,
            })

            // Update categories with blog reference
            await CategoryModel.updateMany(
                  { _id: { $in: categoryIds } },
                  { $push: { blogs: id } }
            )

            return NextResponse.json({ message: 'Blog updated successfully' })      
      } catch (error) {
            return NextResponse.json({ message: 'Error updating blog' })
      }
}

export async function DELETE(req: Request, res: NextResponse){

                  await dbConnect()
      try {
            const { id } = await req.json()

            if(!id){
                  return NextResponse.json({ message: 'Please fill all fields' })
            }     
            // Delete blog
            await BlogModel.findByIdAndDelete(id)

            // Update categories with blog reference
            await CategoryModel.updateMany(
                  { blogs: id },
                  { $pull: { blogs: id } }
            )     
            return NextResponse.json({ message: 'Blog deleted successfully' })      
      } catch (error) {
            return NextResponse.json({ message: 'Error deleting blog' })
      }
}         




