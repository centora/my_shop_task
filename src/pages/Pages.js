import { Route, Switch } from 'react-router-dom';
import { Login } from './login';
import Home from './home';
import CreateUser from './createUser';

export const Pages = () => (
  <Switch>
    <Route
      path="/"
      exact
      render={() => <h1>Hello!</h1>}
    />
    <Route
      path="/home"
      exact
      component={Home}
    />
    <Route
      path="/signin"
      exact
      component={Login}
    />
    <Route
      path="/signup"
      component={CreateUser}
    />
    <Route
      render={({ location }) => <h1> {location.pathname} Page is not found</h1>}
    />
  </Switch>
);
