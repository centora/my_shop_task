var fs = require('file-system');

const dirName = "new-folder";
const date = new Date();
const dateInfo = 'Current date is: ' + date.toLocaleDateString();

fs.mkdir(dirName, function(err) {
  fs.writeFile(`${dirName}/dateInfo.txt`, dateInfo, function(err) {})
});