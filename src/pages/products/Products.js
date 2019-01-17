import { Link } from 'react-router-dom';
import { getProducts, updateProduct } from 'services';
import './products.scss';

export class Products extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    getProducts()
      .then(products => this.setState({ products }));
  }

  deleteProduct = (e, id) => {
    e.preventDefault();
  };

  onChange = ({ target }, id) => {
    this.setState((prevState) => {
      const updatedProducts = [...prevState.products];
      const editedProduct = updatedProducts.find(item => item.id === id);
      editedProduct.title = target.value;
      updatedProducts[editedProduct] = editedProduct;
      return { products: updatedProducts };
    });
  }

  saveItemOnBlur = (prodId) => {
    this.setState((prevState) => {
      const updatedProducts = [...prevState.products];
      const editedProduct = updatedProducts.find(item => item.id === prodId);
      editedProduct.editable = false;
      updatedProducts[editedProduct] = editedProduct;
      return { products: updatedProducts };
    });
    const { price, title } = this.state.products.find(item => item.id === prodId);
    updateProduct(prodId, { title, price });
  }

  editItem = (id) => {
    this.setState((prevState) => {
      const updatedProducts = [...prevState.products];
      const editedProduct = updatedProducts.find(item => item.id === id);
      editedProduct.editable = true;
      updatedProducts[editedProduct] = editedProduct;
      return { products: updatedProducts };
    });
  }

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
                  <span onClick={() => this.editItem(item.id)}>
                    <img src="/images/edit-icon.svg" alt="edit" className="edit-icon" />
                  </span>
                  <span onClick={e => this.deleteProduct(e, item.id)} className="delete-icon">x</span>
                </div>
                <img src="/images/bag.png" alt="Product" />
                {
                  item.editable ? (
                    <input
                      type="text"
                      autoFocus
                      value={item.title}
                      onChange={e => this.onChange(e, item.id)}
                      onBlur={() => this.saveItemOnBlur(item.id)}
                    />
                  ) : (
                    <Link to={`products/${item.id}`} className="product-link">{item.title}</Link>
                  )
                }

              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
