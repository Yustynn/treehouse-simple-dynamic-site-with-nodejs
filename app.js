// Modules
var http = require('http'),
  router = require('./router');

// 1. Create a web server

http.createServer(function(req, res) {
  router.home(req, res);
  router.user(req, res);
}).listen(3001);
console.log('Server running at http://localhost:3001/');

// 2. Handle HTTP route GET / and POST / i.e. Home

  // if url == '/' && POST
    // redirect to /:username
