const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const User = require('./models/User');
const authController = require('./controllers/authController');
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes'); // Import userRoutes
const homeRoutes = require('./routes/homeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
});

// Set up Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Set up static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Routes
app.use('/', homeRoutes);
app.use('/', blogRoutes);
app.use('/', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});