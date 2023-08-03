
// Import the 'http' module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header to indicate the content type as HTML
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send the response body with a heading tag
  res.end('<h1>Hello Node!!!!</h1>\n');
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  // Log a message to indicate that the server is running
  console.log('Server running on port 3000');
});
