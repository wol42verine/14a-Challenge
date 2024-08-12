const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Render the create blog form
router.get('/create', blogController.renderCreateForm);

// Handle form submission
router.post('/create', blogController.createBlog);

router.get('/blogs/:id', blogController.getBlogById);

// Get all blog posts (or the blog home page)
// router.get('/', blogController.getAllBlogs);

module.exports = router;