import './categories.scss';
import { Link } from 'react-router-dom';

export const Categories = ({ categories }) => (
  <div>
    <div className="published-categories">
      <h1 className="main-title">Categories</h1>
      <ul className="categories-list">
        {
          categories.map(item => <li key={item.id}><Link to={`categories/${item.id}`}>{item.title}</Link></li>)
        }
      </ul>
    </div>
  </div>
);
