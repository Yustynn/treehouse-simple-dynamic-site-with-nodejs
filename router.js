var Profile = require('./profile');

function home(req, res) {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Header\n');
    res.write('Search\n');
    res.end('Footer\n');
  }
}

function user(req, res) {
  var username = req.url.replace('/', '');
  // Ensure there actually is a username
  if (username.length > 0) {
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
      }
      // Simple response
      res.write(values.username + ' has ' + values.badges + ' badge(s)' + '\n');
      res.write(username + '\n');
      res.end('Footer\n');
    })

    // handle error
    studentProfile.on('error', function(error) {
      res.write(error.message + '\n');
      res.end('Footer\n');
    });

  }
}

module.exports.home = home;
module.exports.user = user;
