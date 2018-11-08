const http = require('http');
const fs = require('file-system');

http.get('http://wttr.in/~kharkov', (res) => {
  if(res.statusCode !== 200) throw new Error(res.statusMessage);
  res.setEncoding('utf-8');
  let htmlData = '';
  res.on('data',(chunk) => { htmlData += chunk; });
  res.on('end', () => {
    fs.writeFile(`weather.html`, htmlData, function(err) {})
  });
});