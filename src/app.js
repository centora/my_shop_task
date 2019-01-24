import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import AppComponent from './AppComponent';
import store from './store';

import './css/app.scss';

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </Provider>
);

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(App, document.getElementById('app'));
