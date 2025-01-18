const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3836;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n 21134241-Mai Le Huy Hoang');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
