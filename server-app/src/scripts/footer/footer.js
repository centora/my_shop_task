const builder = require('../elementBuilder');
const content = '<p>Easycode 2017 (c)</p>';

require('./footer.css');

module.exports = builder(
  'footer', content, 'footer'
);

