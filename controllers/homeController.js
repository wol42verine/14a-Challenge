exports.getHomePage = (req, res) => {
    res.render('home', { title: 'Home' });
  };
  
  exports.getDashboardPage = (req, res) => {
    res.render('dashboard', { title: 'Dashboard' });
  };