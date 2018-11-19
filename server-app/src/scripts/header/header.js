const builder = require('../elementBuilder');
const content = '<a href="/">Logo</a>';

require('./header.scss');

module.exports = builder(
  'header', content, 'header'
);

