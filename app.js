const http = require('http');

const hostname = '127.0.0.1';
const port3 = 3000;
const port4 = 4000;

const server3 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World, my first server even works harder and harder never');
});

const server4 = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World, I\'m the back side');
  });
  

server3.listen(port3, hostname, () => {
  console.log(`Server running at http://${hostname}:${port3}/`);
});

server4.listen(port4, hostname, () => {
    console.log(`Server running at http://${hostname}:${port4}/`);
  });