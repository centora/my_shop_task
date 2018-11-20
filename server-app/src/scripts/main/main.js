const builder = require('../elementBuilder');
const content = `<h2>Main Content</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae, blanditiis consequatur delectus deserunt, eius error facilis minus porro quaerat quisquam repellendus sint tempora tempore velit? Consequuntur quaerat recusandae voluptatibus?</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae, blanditiis consequatur delectus deserunt, eius error facilis minus porro quaerat quisquam repellendus sint tempora tempore velit? Consequuntur quaerat recusandae voluptatibus?</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae, blanditiis consequatur delectus deserunt, eius error facilis minus porro quaerat quisquam repellendus sint tempora tempore velit? Consequuntur quaerat recusandae voluptatibus?</p>
`;

require('./main.scss');

module.exports = builder(
  'main', content, 'main'
);

