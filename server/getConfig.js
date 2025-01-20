const http = require('http');
const fs = require('fs');

exports.execute = function (req, res, data) {
  if (req.method === 'GET') {
    fs.readFile('config.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading config file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}

