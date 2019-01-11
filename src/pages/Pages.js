import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './login';
import Home from './home';
import CreateUser from './createUser';

export const Pages = ({ user, onLogin, info }) => {
  const homePathes = ['/', '/home'];
  return (
    <Switch>
      {
        user ? [
          <Route
            path={homePathes}
            exact
            render={() => <Home user={user} info={info} />}
            key="home"
          />,
          <Route
            path="/update"
            exact
            render={() => <h1>Update User Info!</h1>}
            key="update"
          />,
          <Route
            path="/products"
            exact
            render={() => <h1>Products PAge</h1>}
            key="products"
          />,
          <Route
            path="/product"
            exact
            render={() => <h1>Product PAge</h1>}
            key="product"
          />,
          <Route
            path="/update"
            exact
            render={() => <h1>Update User Info!</h1>}
            key="update"
          />,
          <Redirect from="/signin" to="/" key="toHome" />
        ] : [
          <Route
            path={homePathes}
            exact
            render={() => <h1>Hello!</h1>}
            key="start"
          />,
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
            path="/success"
            render={() => <h1>Success PAge</h1>}
            key="success"
          />
        ]
      }
      <Route
        render={({ location }) => <h1> {location.pathname} Page is not found</h1>}
      />
    </Switch>
  );
};
