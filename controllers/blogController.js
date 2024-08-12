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

// exports.getBlogPost = async (req, res) => {
//   try {
//     const blogPost = await Blog.findByPk(req.params.id); // Use findByPk for Sequelize
//     if (!blogPost) {
//       return res.status(404).send('Blog post not found');
//     }
//     res.render('blogPost', {
//       title: blogPost.title,
//       content: blogPost.content,
//       author: blogPost.author,
//       publishedDate: blogPost.createdAt,
//     });
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };


// Function to handle the request to get a single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id); // Find blog by primary key
    if (blog) {
      res.render('singleBlog', { blog: blog.get({ plain: true }) }); // Render single blog view
    } else {
      res.status(404).send('Blog not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong!');
  }
};