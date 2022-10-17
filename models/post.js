const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
})

// Virtual for post's URL
PostSchema.virtual('url').get(function () {
  return `/blog/post/${this._id}`
})

// Export model
module.exports = mongoose.model('Post', PostSchema)
