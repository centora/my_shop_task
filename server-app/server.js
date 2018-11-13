const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const isHTML = req.url.includes('.html');
  const isJS = req.url.includes('.js');
  const fileName = req.url.replace('/', '');
  const date = new Date();

  if(isHTML) {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      res.setHeader('Content-Type', 'text/html');
      if(err) {
        return res.end('<strong>Error</strong>');
      }

      const displayDate = data.replace('</body>', `<p>Today is: <em>${date.toLocaleDateString()}</em></p></body>`)
      res.end(displayDate);
    });
    return
  }
  if (isJS) {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      res.setHeader('Content-Type', 'application/javascript');
      if(err) {
        return res.end('<strong>Error</strong>');
      }
      res.end(data);
    });
    return
  }

  fs.readFile(fileName, (err, data) => {
    if(err) {
      return res.end('<strong>Error</strong>');
    }
    res.end(data);
  })
});

server.listen(3030, () => console.log('Server started'));
