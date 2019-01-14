import { Link, NavLink } from 'react-router-dom';
import { Nav } from '../navigation';
import { logout } from '../../services';
import './header.scss';

export const Header = ({
  user,
  info,
  onLogout,
  history
}) => {
  const onLogoutHandler = (event) => {
    event.preventDefault();
    logout().then(() => {
      onLogout();
      history.push('/');
    });
  };
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/images/logo.png" alt="Todo" />
      </Link>
      <Nav list={['Home', 'Shop', 'Categories', 'Contacts']} />
      <div className="user-box">
        {
          user ? (
            <>
              <span>{user.firstName}</span>
              {info && `(${info.categories}/${info.products})`}
              <span><a href="#" onClick={onLogoutHandler}>Logout</a></span>
            </>
          ) : (
            <Nav list={['Signin', 'Signup']} />
          )
        }
      </div>
    </header>
  );
};
