import React from 'react';
import ReactDom from 'react-dom';

import './css/app.scss'

import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

const App = (
  <>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </>
);

ReactDom.render(App, document.getElementById('app'));