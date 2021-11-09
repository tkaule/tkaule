const http = require('http');

const hostname = '127.0.0.1';
const port3 = 3000;
const port5 = 5000;

const server3 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World, my first server even works harder and harder never');
});

const server5 = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World, I\'m the back side');
  });
  

server3.listen(port3, hostname, () => {
  console.log(`Server running at http://${hostname}:${port3}/`);
});

server5.listen(port5, hostname, () => {
    console.log(`Server running at http://${hostname}:${port5}/`);
  });