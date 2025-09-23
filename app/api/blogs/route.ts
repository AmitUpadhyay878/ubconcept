import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Blog } from '@/models/Blog';
import { writeFile } from 'fs/promises';
import path from 'path';




async function saveImageToPublic(file: File): Promise<string> {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Create a unique filename
    const uniqueName = `${Date.now()}-${file.name}`;
    const imagePath = path.join(process.cwd(), 'public', 'blog-images', uniqueName);
    
    // Save the file
    await writeFile(imagePath, buffer);
    
    // Return the URL path that will be stored in MongoDB
    return `/blog-images/${uniqueName}`;
  } catch (error) {
    console.error('Image save error:', error);
    throw new Error('Failed to save image');
  }
}





export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    
    const formData = await req.formData();

      // Handle image upload
    let imageUrl = '';
    const image = formData.get('image') as File | null;
    if (image) {
      imageUrl = await saveImageToPublic(image);
    }
    
    const blog = {
      title: formData.get('title'),
      slug :(formData.get('title') as string).toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
      content: formData.get('content'),
      excerpt: formData.get('excerpt'),
      published: formData.get('published') === 'true',
      author: session.user.id,
       imageUrl: imageUrl
    };

  

    const newBlog = await Blog.create(blog);
    return NextResponse.json(newBlog, { status: 201 });

  } catch (error: any) {
    console.error('Blog creation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create blog' },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    
    const formData = await req.formData();
    const blogId = formData.get('id');

    const updateData = {
      title: formData.get('title'),
      content: formData.get('content'),
      excerpt: formData.get('excerpt'),
      published: formData.get('published') === 'true',
    };

    const image = formData.get('image') as File | null;
    if (image) {
      // Add your image upload logic here
      // updateData.imageUrl = await uploadImage(image);
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      { $set: updateData },
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(updatedBlog);

  } catch (error: any) {
    console.error('Blog update error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update blog' },
      { status: 500 }
    );
  }
}