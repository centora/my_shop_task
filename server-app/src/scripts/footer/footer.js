const builder = require('../elementBuilder');
const content = '<p>Easycode 2017 (c)</p>';

require('./footer.scss');

module.exports = builder(
  'footer', content, 'footer'
);

