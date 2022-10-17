const express = require('express')
const router = express.Router()

// Require controller modules
const blog_controller = require('../controllers/blogController')

// Blog routes

// GET blog hone page
router.get('/', blog_controller.index)

// GET posts
// router.get('/posts', blogController.posts)

// GET post by id
// router.get('/posts/:id', blogController.post)

module.exports = router
