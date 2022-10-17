const express = require('express')
const router = express.Router()

// Require controller modules
const blogController = require('../controllers/blogController')

// Blog routes

// GET blog hone page - /blog
router.get('/', blogController.index)

// TIP: The order of the routes is important. The first route that matches the request will be used. If you put the route for /blog/:id before the route for /blog/create, the route for /blog/create will never be used.

// GET post by id
router.get('/:id', blogController.post)

module.exports = router
