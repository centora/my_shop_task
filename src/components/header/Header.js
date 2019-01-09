import { Link, NavLink } from 'react-router-dom';
import { Nav } from '../navigation';
import './header.scss';

export const Header = ({ user, info }) => (
  <header className="header">
    <Link to="/" className="logo">
      <img src="images/logo.png" alt="Todo" />
    </Link>
    <Nav list={['Home', 'Products', 'Contacts']} />
    <div className="user-box">
      {
        user ? (
          <>
            <span>{user.firstName}</span>
            {info && `(${info.categories}/${info.products})`}
          </>
        ) : (
          <>
            <span><NavLink to="/signin" activeClassName="active">Signin</NavLink></span>
            <span><NavLink to="/signup" activeClassName="active">Signup</NavLink></span>
          </>
        )
      }
    </div>
  </header>
);
