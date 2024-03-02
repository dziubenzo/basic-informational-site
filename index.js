import path from 'node:path';
import fs from 'node:fs';
import http from 'node:http';

const server = http.createServer((req, res) => {
  res.end('Hello World!');
});

server.listen(8080, () => {
  console.log('Server running...');
});
