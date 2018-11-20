import $ from 'jquery';
require('./css/app.scss');

import { header } from './scripts/header';
import { footer } from './scripts/footer';
import { main } from './scripts/main';

const body = $('body');

body.append(header, main, footer);
