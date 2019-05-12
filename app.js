const express = require('express');
const history = require('connect-history-api-fallback');
var path = require('path')
var serveStatic = require('serve-static')
require('babel-polyfill');

const app = express();
app.use(history({
  // OPTIONAL: Includes more verbose logging
  verbose: true
}))

// Serve static assets from the build files (images, etc)
app.use(serveStatic(path.join(__dirname, '/dist')))
// app.use(express.static(__dirname + './dist'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started ${port}`);
});