const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
})

// Virtual for post's URL
PostSchema.virtual('url').get(function () {
  // We don't use an arrow function as we'll need the 'this' keyword
  return `/blog/${this._id}`
})

// Export model
module.exports = mongoose.model('Post', PostSchema)
