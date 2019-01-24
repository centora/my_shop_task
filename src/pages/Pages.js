import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import { Home } from './home';
import { CreateUser } from './createUser';
import { UpdateUser } from './updateUser';
import { Product } from './product';
import { Products } from './products';
import { Categories } from './categories';
import { Category } from './category';

export const Pages = ({
  user,
  info
}) => {
  const homePathes = ['/', '/home'];
  return (
    <Switch>
      <Route
        path="/categories"
        exact
        component={Categories}
        key="categories"
      />
      <Route
        path="/categories/:id"
        exact
        render={({ match }) => <Category match={match} />}
        key="category"
      />
      {
        user ? [
          <Route
            path={homePathes}
            exact
            render={({ history }) => <Home user={user} info={info} history={history} />}
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
            component={Products}
            key="products"
          />,
          <Route
            path="/update"
            exact
            render={() => <h1>Update User Info!</h1>}
            key="update"
          />,
          <Route
            path="/products/:id"
            exact
            component={Product}
            key="product"
          />,
          <Route
            path="/profile"
            exact
            render={() => <UpdateUser user={user} />}
            key="updateUser"
          />,
          <Redirect from="/signin" to="/" key="toHome" />
        ] : [
          <Route
            path="/signin"
            exact
            component={Login}
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
          />,
          <Route
            path="/shop"
            exact
            component={Categories}
            key="shop"
          />,
          <Route
            path="/products/:id"
            exact
            render={({ match }) => <Product disabled match={match} />}
            key="product"
          />,
          <Route
            path={homePathes}
            exact
            render={({ history }) => <Home history={history} />}
            key="home"
          />,
          <Redirect from="/contacts" to="/home" key="contactsHome" />,
        ]
      }
      <Route
        render={({ location }) => <h1> {location.pathname} Page is not found</h1>}
      />
    </Switch>
  );
};
