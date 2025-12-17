import { create } from 'zustand'

interface Post {
  _id: string;
  title: string;
  content: string;
  author: Object;
  createdAt:string;
  categories:Object[];
}

interface Category {
  _id: string;
  name: string;
  blogs:Post[]
}

interface CategoryState {
  categories: Category[];
  isLoading: boolean;
  fetchCategories: () => Promise<void>;
  addCategory: (category: Category) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  isLoading: false,
  fetchCategories: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch('/api/admin/category');
      const data = await res.json();
      set({ categories: data?.categories, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
    }
  },
  addCategory: async (category: Category) => {
    set({ isLoading: true });
    try {
      const res = await fetch('/api/admin/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(category),
      });
      const data = await res.json();
      set((state) => ({ categories: [...state.categories, data?.category], isLoading: false }));
    } catch (error) {
      set({ isLoading: false });
    }
  }
}))   
