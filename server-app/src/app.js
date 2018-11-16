require('./css/app.css');

const header = require('./scripts/header/header');
const footer = require('./scripts/footer/footer');
const main = require('./scripts/main');


const $ = require('jquery');
const body = $('body');

body.append(header, main, footer);
