import { Navigation } from '../navigation';
import './header.scss';

export const Header = () => (
  <header className="header">
    <a href="/" className="logo">Logo</a>
    <Navigation />
  </header>
);
