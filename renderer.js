var fs = require('fs');

// return content with values merged into it

function mergeValues(values, content) {
  // Cycle over keys
  for (var key in values) {
    // Replace all {{key}} with value from values object
    content = content.replace("{{" + key + "}}", values[key]);
    console.log(key);
  }
  // return merged content
  return content;
}

function view(templateName, values, res) {
  // Read from template file
  var templatePath = './views/' + templateName + '.html';
  var fileContents = fs.readFileSync(templatePath, 'utf8');

  // Insert values into content
  fileContents = mergeValues(values, fileContents);

  // Write out the contents to the response
  res.write(fileContents);
}

module.exports.view = view;
