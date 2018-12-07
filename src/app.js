import ReactDom from 'react-dom';

import './css/app.scss';

import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

const App = (
  <>
    <Header />
    <Main title="Main title" />
    <Footer />
  </>
);

ReactDom.render(App, document.getElementById('app'));
