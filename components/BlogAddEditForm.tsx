'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from './ui/select';
import { useCategoryStore } from '@/zustand/useCategoryStore';


const BlogAddEditForm = ({ params }: { params?: { id?: string } }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const {categories,isLoading:isCategoryLoading} = useCategoryStore();



  const {register, handleSubmit, formState: { errors }, reset,watch} = useForm();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content);
      formData.append('excerpt', data.excerpt);
      formData.append('categories', data.categories);
      formData.append('published', String(data.published));

      // Handle file input
      // In shadcn form, if we registered standard input, data.FeatureImage might be FileList
      if (data.FeatureImage && data.FeatureImage.length > 0) {
         formData.append('featureImage', data.FeatureImage[0]);
      }

      if (params?.id) {
        formData.append('id', params.id);
      }

      const response = await fetch('/api/admin/blog', {
        method: params?.id ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to save blog');
      }

     // router.push('/admin/blog-management');
    } catch (error: any) {
      console.error('Error:', error);
      // You might want to add a toast here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <div>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col'>
                <label htmlFor="title">Title</label>
                <Input id="title" {...register('title',{required:'Title is required'})} />
                 {
                  errors.title && <span className='text-red-500'>{errors.title.message as string}</span>
                 }
              </div>
              <div className='flex flex-col'>
                <label htmlFor="content">Content</label>
                <Textarea id="content" {...register('content',{required:'Content is required'})} />
                 {
                  errors.content && <span className='text-red-500'>{errors.content.message as string}</span>
                 }
              </div>
              <div className='flex flex-col'>
                <label htmlFor="excerpt">Excerpt</label>
                <Textarea id="excerpt" {...register('excerpt',{required:'Excerpt is required'})} />
                 {
                  errors.excerpt && <span className='text-red-500'>{errors.excerpt.message as string}</span>
                 }
              </div>
               <div className='flex flex-col'>
                <label htmlFor="FeatureImage">Feature Image</label>
                <Input id="FeatureImage" type="file" {...register('FeatureImage')} />
                 {
                  errors.FeatureImage && <span className='text-red-500'>{errors.FeatureImage.message as string}</span>
                 }    
              </div>
              <div className='flex flex-col'>
                 <label htmlFor="categories">Category</label>
                <select id="categories" {...register('categories',{required:'Category is required'})}>
                  {
                    !isCategoryLoading && categories.map((category: any) => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                  }
                </select>
              </div>
              <div>
                <label htmlFor="published">Published</label>
                <Checkbox id="published" {...register('published')} />
              </div>  
              <div className='flex flex-col'>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    params?.id ? 'Update Blog' : 'Add New Blog'
                  )}
                </Button>
              </div>
          </form>
      </div>
  );
};

export default BlogAddEditForm;
