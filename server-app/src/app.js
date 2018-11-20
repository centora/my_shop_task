require('./css/app.scss');

import $ from 'jquery';

import { header } from './scripts/header/header';
import { footer } from './scripts/footer/footer';
import { main } from './scripts/main/main';

const body = $('body');

body.append(header, main, footer);
