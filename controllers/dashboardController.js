const Blog = require('../models/Blog');

exports.renderDashboard = async (req, res) => {
  try {
    const blogs = await Blog.findAll(); // Fetch all blogs from the database
    const plainBlogs = blogs.map(blog => blog.get({ plain: true })); // Convert to plain objects
    res.render('dashboard', { blogs: plainBlogs }); // Pass plain objects to the view
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong!');
  }
};