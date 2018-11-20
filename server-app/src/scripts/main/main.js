const builder = require('../elementBuilder');
const content = `<h2>Main Content</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae, blanditiis consequatur delectus deserunt, eius error facilis minus porro quaerat quisquam repellendus sint tempora tempore velit? Consequuntur quaerat recusandae voluptatibus?</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae, blanditiis consequatur delectus deserunt, eius error facilis minus porro quaerat quisquam repellendus sint tempora tempore velit? Consequuntur quaerat recusandae voluptatibus?</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae, blanditiis consequatur delectus deserunt, eius error facilis minus porro quaerat quisquam repellendus sint tempora tempore velit? Consequuntur quaerat recusandae voluptatibus?</p>
  <ul class="items-list">
    <li class="item-1">1</li>
    <li class="item-2">2</li>
    <li class="item-3">3</li>
    <li class="item-4">4</li>
    <li class="item-5">5</li>
    <li class="item-6">6</li>
    <li class="item-7">7</li>
    <li class="item-8">8</li>
    <li class="item-9">9</li>
    <li class="item-10">10</li>
  </ul>
  <ul class="different-colors-list">
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
  </ul>
`;

require('./main.scss');

module.exports = builder(
  'main', content, 'main'
);

