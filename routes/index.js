
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

// top-level directory dashboard to handle routing the URI
exports.dashboard = function(req, res){
  res.render('dashboard', { title: 'Welcome to Portfolio Dashboard!' });
};