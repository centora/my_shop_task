import { Nav } from '../navigation';
import './header.scss';

export const Header = () => (
  <header className="header">
    <a href="/" className="logo">Logo</a>
    <Nav list={['Home', 'Products', 'Contacts']} />
  </header>
);
