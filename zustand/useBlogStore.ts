import { create } from 'zustand'

interface Post {
  _id: string;
  title: string;
  content: string;
  author: Object;
  createdAt:string;
  categories:Object[];
}

interface BlogState {
  blogs: Post[];
  isLoading: boolean;
  fetchPosts: () => Promise<void>;
  addPost: (post: Post) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  blogs: [],
  isLoading: false,
  fetchPosts: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch('/api/admin/blog');
      const data = await res.json();
      set({ blogs: data?.blogs, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
    }
  },
  addPost: async (post: Post) => {
    set({ isLoading: true });
    try {
      const res = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      const data = await res.json();
      set((state) => ({ blogs: [...state.blogs, data?.blog], isLoading: false }));
    } catch (error) {
      set({ isLoading: false });
    }
  }
}))