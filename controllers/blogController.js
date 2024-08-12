const Blog = require('../models/Blog');

exports.renderCreateForm = (req, res) => {
  res.render('createBlog');
};

exports.createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    await Blog.create({ title, content, author });
    res.redirect('/dashboard'); // Redirect to the dashboard after creating the blog
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong!');
  }
};

exports.getBlogPost = async (req, res) => {
  try {
    const blogPost = await Blog.findByPk(req.params.id); // Use findByPk for Sequelize
    if (!blogPost) {
      return res.status(404).send('Blog post not found');
    }
    res.render('blogPost', {
      title: blogPost.title,
      content: blogPost.content,
      author: blogPost.author,
      publishedDate: blogPost.createdAt,
    });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

// exports.getAllBlogs = (req, res) => {
//   // Fetch blogs from the database or any other source
//   const blogs = [
//     { title: 'Blog 1', content: 'Content 1', author: 'Author 1' },
//     { title: 'Blog 2', content: 'Content 2', author: 'Author 2' },
//     // Add more blogs as needed
//   ];

//   // Render the allBlogs view
//   res.render('allBlogs', { blogs });
// };

// // Function to handle the request to get a single blog by ID
// exports.getBlogById = (req, res) => {
//   const blogId = parseInt(req.params.id, 10);

// Function to handle the request to get a single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blogPost = await Blog.findByPk(req.params.id); // Use findByPk for Sequelize
    if (!blogPost) {
      return res.status(404).send('Blog post not found');
    }
    res.render('singleBlog', {
      title: blogPost.title,
      content: blogPost.content,
      author: blogPost.author,
      publishedDate: blogPost.createdAt,
    });
  } catch (error) {
    res.status(500).send('Server error');
  }
};