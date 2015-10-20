// Problem: From web browser, need to look at user's 1) badge count 2) JS points

// Modules
var http = require('http');


// 1. Create a web server
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  setInterval(function() {
    res.write(new Date() + '\n');
  }, 1000);
  // res.end('Hello World\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');

// 2. Handle HHTP route GET / and POST / i.e. Home
  // if url == '/' && GET
    // show search
  // if url == '/' && POST
    // redirect to /:username

// 3. Handle HTTP route GET /:username i.e. /chalkers
  // if url == '/....'
    // get json from Treehouse
     // on 'end'
      // show profile
    // on 'error'
      // show error

// 4. Function that handles the reading of files and merge in value
  // read file and get a string
    // merge values into single string
