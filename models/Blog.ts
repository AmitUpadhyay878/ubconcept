import { Schema, model } from 'mongoose'

export const BlogSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    excerpt: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    published: { type: Boolean, default: false },
    tags: [{ type: String }],
}, { timestamps: true });

export const Blog = model('Blog', BlogSchema);
export default Blog;