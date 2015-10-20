// Problem: From web browser, need to look at user's 1) badge count 2) JS points

// 1. Create a web server

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
