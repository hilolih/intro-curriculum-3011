'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  //res.write(req.headers['user-agent']);
  res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTML$B$N0lHVBg$-$$8+=P$7$rI=<($7$^$9(B</h1></body></html>')
  res.end();
});
const port = 8080;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
