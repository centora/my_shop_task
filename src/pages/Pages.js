import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './login';
import Home from './home';
import CreateUser from './createUser';
import { Product } from './product';
import { Products } from './products';
import { Categories } from './categories';
import { Category } from './category';

export const Pages = ({
  user,
  onLogin,
  info,
  categories
}) => {
  const homePathes = ['/', '/home'];
  return (
    <Switch>
      <Route
        path="/categories"
        exact
        render={() => <Categories categories={categories} />}
        key="categories"
      />
      <Route
        path="/categories/:id"
        exact
        render={({ match }) => <Category categories={categories} match={match} />}
        key="category"
      />
      <Route
        path={homePathes}
        exact
        render={({ history }) => <Home user={user} info={info} history={history} />}
        key="home"
      />
      {
        user ? [
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
            path="/product"
            exact
            component={Product}
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
          />,
          <Redirect from="/contacts" to="/" key="contactsHome" />,
          <Redirect from="/shop" to="/categories" key="shopCategories" />
        ]
      }
      <Route
        render={({ location }) => <h1> {location.pathname} Page is not found</h1>}
      />
    </Switch>
  );
};
