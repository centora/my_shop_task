import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './css/app.scss';

import AppComponent from './appComponent';
import { store } from './store';

const App = (
  <Provider store={store}>
    <Router>
      <AppComponent />
    </Router>
  </Provider>
);

ReactDom.render(App, document.getElementById('app'));
