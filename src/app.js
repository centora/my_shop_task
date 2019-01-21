import 'babel-polyfill';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppComponent from './appComponent';
import { store } from './store';

import './css/app.scss';

const App = (
  <Provider store={store}>
    <Router>
      <AppComponent />
    </Router>
  </Provider>
);

ReactDom.render(App, document.getElementById('app'));
