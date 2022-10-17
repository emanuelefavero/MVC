const { body, validationResult } = require('express-validator')
const async = require('async')
const mongoose = require('mongoose')

// Post model
const Post = require('../models/post')

exports.index = (req, res) => {
  // Display list of all posts
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
