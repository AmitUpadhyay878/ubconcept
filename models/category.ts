import { Schema, model } from 'mongoose'

export const CategorySchema = new Schema({
    name: { type: String, required: true, unique: true },
}, { timestamps: true });

export const Category = model('Category', CategorySchema);
export default Category;