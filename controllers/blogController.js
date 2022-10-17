const { body, validationResult } = require('express-validator')
const async = require('async')
const mongoose = require('mongoose')

// Post model
const Post = require('../models/post')

// Display list of all posts
exports.index = (req, res) => {
  Post.find()
    .sort([['title', 'ascending']])
    .exec((err, posts) => {
      if (err) {
        return next(err)
      }
      // RENDER
      res.render('index', { title: 'Blog Home', posts })
    })
}

// Display each post
exports.post = (req, res, next) => {
  async.parallel(
    {
      post: (callback) => {
        Post.findById(req.params.id).exec(callback)
      },
    },
    (err, results) => {
      if (err) {
        return next(err)
      }
      if (results.post == null) {
        // No results
        const err = new Error('Post not found')
        err.status = 404
        return next(err)
      }
      // RENDER
      res.render('post', {
        post: results.post,
      })
    }
  )
}
