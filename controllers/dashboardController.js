const Blog = require('../models/Blog');

exports.renderDashboard = async (req, res) => {
  try {
    const blogs = await Blog.findAll(); // Fetch all blogs from the database
    res.render('dashboard', { blogs }); // Pass blogs to the view
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong!');
  }
};