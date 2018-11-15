const builder = require('./elementBuilder');
const date = new Date();
const content = `
<h2>Main section title!!!</h2>
<p>Current date: ${date.toLocaleDateString()}</p>
`;

module.exports = builder(
  'main', content, 'main'
);

