var Profile = require('./profile'),
  renderer = require('./renderer');

var commonHeaders = {'Content-Type': 'text/html'};

function home(req, res) {
  if (req.url === '/') {
    // show search
    res.writeHead(200, commonHeaders);
    renderer.view('header', {}, res);
    renderer.view('search', {}, res);
    renderer.view('footer', {}, res);
    res.end();
  }
}

// Handle HTTP route GET /:username
function user(req, res) {
  var username = req.url.replace('/', '');
  // Ensure there actually is a username
  if (username.length > 0) {
    res.writeHead(200, commonHeaders);
    renderer.view('header', {}, res);

    // Get JSON from Treehouse
    var studentProfile = new Profile(username);
    // on 'end'
    studentProfile.on('end', function(profileJSON) {
      // show profile

      // store needed values
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        jsPoints: profileJSON.points.JavaScript
      };
      // Simple response
      renderer.view('profile', values, res);
      renderer.view('footer', {}, res);
      res.end();
    })

    // handle error
    studentProfile.on('error', function(error) {
      renderer.view('error', {errorMessage: error.message}, res);
      renderer.view('search', {}, res);
      renderer.view('footer', {}, res);
      res.end();
    });

  }
}

module.exports.home = home;
module.exports.user = user;
