const builder = require('../elementBuilder');
const content = '<a href="/">Logo</a>';

require('./header.css');

module.exports = builder(
  'header', content, 'header'
);

