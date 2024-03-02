import fs from 'node:fs';
import http from 'node:http';

const server = http.createServer((req, res) => {
  const visitedURL = req.url;
  let path = './views/';

  switch (visitedURL) {
    case '/':
      res.statusCode = 200;
      path += 'index.html';
      break;
    case '/about':
      res.statusCode = 200;
      path += 'about.html';
      break;
    case '/contact-me':
      res.statusCode = 200;
      path += 'contact-me.html';
      break;
    default:
      res.statusCode = 404;
      path += '404.html';
      break;
  }

  fs.readFile(path, (error, content) => {
    if (error) {
      res.statusCode = 500;
      res.end(error);
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.end(content);
    }
  });
});

server.listen(8080, () => {
  console.log('Server running...');
});
