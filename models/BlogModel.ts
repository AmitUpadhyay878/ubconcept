import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
      title: {
            type: String,
            required: true,
      },
      content: {
            type: String,
            required: true,
      },
      author: {
            type: Object,
            required: true,
      },
      categories: [
            {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: 'Category',
            }
      ],
      excerpt: {
            type: String,
            required: true,
      },
      published: {
            type: Boolean,
            default: false,
      },
      featureImage: {
            type: String
      },
},
      {
            timestamps: true,
      }
)

const BlogModel = mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
export default BlogModel
