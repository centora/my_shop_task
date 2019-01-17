import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './login';
import { Home } from './home';
import CreateUser from './createUser';
import { Product } from './product';
import { Products } from './products';

export const Pages = ({
  user,
  onLogin,
  info,
}) => {
  const homePathes = ['/', '/home'];
  return (
    <Switch>
      {
        user ? [
          <Route
            path={homePathes}
            exact
            render={({ history }) => <Home user={user} info={info} history={history} />}
            key="home"
          />,
          <Redirect from="/signin" to="/" key="toHome" />
        ] : [
          <Route
            path="/signin"
            exact
            render={() => <Login onLogin={onLogin} />}
            key="signin"
          />,
          <Route
            path="/signup"
            component={CreateUser}
            key="signup"
          />,
          <Route
            path={homePathes}
            exact
            render={({ history }) => <Home history={history} />}
            key="home"
          />,
        ]
      }
      <Route
        render={({ location }) => <h1> {location.pathname} Page is not found</h1>}
      />
    </Switch>
  );
};
