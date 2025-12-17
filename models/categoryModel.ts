import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      blogs: [
            {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: 'Blog',
            }
      ]
})
const CategoryModel = mongoose.models.Category || mongoose.model('Category', CategorySchema)
export default CategoryModel


