import { Link } from 'react-router-dom';
import { EditableText } from 'components/editableText';
import { getProducts } from 'services';
import './products.scss';

export class Products extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    getProducts()
      .then(products => this.setState({ products }));
  }

  editProduct = (e, id) => {
    e.preventDefault();
    const editableProduct = this.state.products.find(item => item.id === id);
    editableProduct.editable = true;
  };

  deleteProduct = (e, id) => {
    e.preventDefault();
    console.log('delete', id);
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1 className="main-title">Products</h1>
        <ul className="products-list">
          {
            products.map(item => (
              <li key={item.id} className="product-item">
                <div className="product-controls">
                  <span onClick={e => this.editProduct(e, item.id)}>
                    <img src="/images/edit-icon.svg" alt="edit" className="edit-icon" />
                  </span>
                  <span onClick={e => this.deleteProduct(e, item.id)} className="delete-icon">x</span>
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
  }
}
