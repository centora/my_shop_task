import { Link } from 'react-router-dom';
import { EditableText } from 'components/editableText';
import './products.scss';

export const Products = ({ products }) => {
  const editProduct = (e, id) => {
    e.preventDefault();
    const editableProduct = products.find(item => item.id === id);
    editableProduct.editable = true;
  };
  const deleteProduct = (e, id) => {
    e.preventDefault();
    console.log('delete', id);
  };
  return (
    <div>
      <h1 className="main-title">Products</h1>
      <ul className="products-list">
        {
          products.map(item => (
            <li key={item.id} className="product-item">
              <div className="product-controls">
                <span onClick={e => editProduct(e, item.id)}>
                  <img src="/images/edit-icon.svg" alt="edit" className="edit-icon" />
                </span>
                <span onClick={e => deleteProduct(e, item.id)} className="delete-icon">x</span>
              </div>
              <img src="/images/bag.png" alt="Product" />
              <Link to={`products/${item.id}`} className="product-link">
                <EditableText text={item.title} editable />
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
