import { Link } from 'react-router-dom';
import { getProducts, updateProduct } from 'services';
import './products.scss';

export class Products extends Component {
  state = {
    products: [],
    filterValue: ''
  }

  componentDidMount() {
    getProducts()
      .then((products) => {
        this.originProducts = products;
        this.setState({ products });
      });
  }

  deleteProduct = (e, id) => {
    e.preventDefault();
  };

  onChangeProduct = ({ target }, id) => {
    this.setState((prevState) => {
      const updatedProducts = [...prevState.products];
      const editedProduct = updatedProducts.find(item => item.id === id);
      editedProduct.title = target.value;
      updatedProducts[editedProduct] = editedProduct;
      return { products: updatedProducts };
    });
  }

  saveProductOnBlur = (prodId) => {
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

  editProduct = (id) => {
    this.setState((prevState) => {
      const updatedProducts = [...prevState.products];
      const editedProduct = updatedProducts.find(item => item.id === id);
      editedProduct.editable = true;
      updatedProducts[editedProduct] = editedProduct;
      return { products: updatedProducts };
    });
  }

  addNewProduct(e) {
    e.stopPropagation();
    const { history } = this.props;
    history.push('/products/new');
  }

  onChangeFilter = ({ target }) => {
    this.setState({
      filterValue: target.value
    });
    this.filterProducts(target.value);
  }

  filterProducts = (value) => {
    if (value.length > 1) {
      this.setState({
        products: this.originProducts
          .filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
      });
    } else {
      this.setState({
        products: this.originProducts
      });
    }
  }

  render() {
    const { products, filterValue } = this.state;
    return (
      <div className="small-container">
        <h1 className="main-title">Products</h1>
        <div className="filter-box">
          <input
            type="text"
            name="filter"
            placeholder="Enter at list 2 chars"
            value={filterValue}
            onChange={this.onChangeFilter}
          />
        </div>
        <ul className="products-list">
          {
            products.map(item => (
              <li key={item.id} className="product-item">
                <div className="product-controls">
                  <span onClick={() => this.editProduct(item.id)}>
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
                      onChange={e => this.onChangeProduct(e, item.id)}
                      onBlur={() => this.saveProductOnBlur(item.id)}
                    />
                  ) : (
                    <Link to={`products/${item.id}`} className="product-link">{item.title}</Link>
                  )
                }

              </li>
            ))
          }
        </ul>
        <button onClick={e => this.addNewProduct(e)}>Add new</button>
      </div>
    );
  }
}
