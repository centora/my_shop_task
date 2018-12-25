import ReactDom from 'react-dom';

import './css/app.scss';

import { Footer } from './components/footer';
import { AppComponent } from './appComponent';

const App = (
  <>
    <AppComponent />
    <Footer />
  </>
);

ReactDom.render(App, document.getElementById('app'));
