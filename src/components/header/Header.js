import { Link } from 'react-router-dom';
import { Nav } from '../navigation';
import './header.scss';

export const Header = ({
  user,
  info,
  onLogout
}) => {
  const onLogoutHandler = () => {
    onLogout();
  };

  const RenderUserBox = ({ user, info }) => {
    const { firstName } = user;
    return (<>
      <Link to="/profile">
        <span>{firstName}</span> {info && `(${info.categories}/${info.products})`}
      </Link> &nbsp; &nbsp;
      <span><a href="#" onClick={onLogoutHandler}>Logout</a></span>
    </>);
  }

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/images/logo.png" alt="Todo" />
      </Link>
      <Nav list={['Home', user ? 'Categories' : 'Shop', user ? 'Products' : 'Contacts']} />
      <div className="user-box">
        {
          user ? <RenderUserBox user={user} info={info} /> : <Nav list={['Signin', 'Signup']} />
        }
      </div>
    </header>
  );
};
