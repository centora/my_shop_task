import { builder } from '../elementBuilder';
const content = '<p>Easycode 2017 (c)</p>';

require('./footer.scss');

export const footer = builder(
  'footer', content, 'footer'
);

