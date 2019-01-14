import './products.scss';
import { Link } from 'react-router-dom';

export const Products = () => (
  <div>
    <ul className="products-list">
      <li className="product-item">
        <Link to="/product">
          <img src="/images/bag.png" alt="Product" />
        </Link>
      </li>
    </ul>
  </div>
);
