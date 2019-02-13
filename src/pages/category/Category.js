import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CategoriesItems } from 'components/categoriesItems';
import { EditableText } from 'components/editableText';
import { getCategory, updateCategory } from '../../store/category';
import { getProducts } from '../../store/products';
import './category.scss';

const addedProduct = product => product.published;
const notAddedProduct = product => !product.published;

class Category extends Component {
  componentDidMount() {
    this.props.dispatch(getCategory(this.props.match.params.id));
    this.props.dispatch(getProducts());
  }

  componentDidUpdate() {
  //  console.log('component update');
  }

  updateCategories() {
    //    console.log('update');
  }

  addProductToCategory = (id) => {
    const product = this.props.products.find(product => product.id === id);
    this.props.category.products.push(product);
    this.props.dispatch(updateCategory(this.props.category));
  }

  removeProductFromCategory(id) {
    console.log('remove', id);
  }

  render() {
    const {
      category, history, products, user
    } = this.props;

    let notAddedProducts = products;

    if (category) {
      if (category.products) {
        notAddedProducts = products.filter((product) => {
          const prod = category.products.find(item => item.id === product.id);
          if (!category.products.includes(prod)) {
            return product;
          }
          return null;
        });
      }
    }

    return (
      <div>
        { category && (
          <div className="">
            <h1 className="main-title">Category <EditableText text={category.title} /></h1>
            { user ? (
              <CategoriesItems
                publishedItems={category.products}
                unpublishedItems={notAddedProducts}
                onChangeLeftItem={this.updateProduct}
                removeItem={this.removeProductFromCategory}
                addItem={this.addProductToCategory}
                history={history}
                publishedTitle="Products added to category"
                unpublishedTitle="Products"
                redirectLink="/products/"
              />
            ) : (
              <ul className="cat-products-list">
                {
                  category.products && category.products.map(item => (
                    <li key={item.id}>
                      <Link to={`/products/${item.id}`}>{item.title}</Link>
                    </li>
                  ))
                }
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapState = state => ({
  category: state.category,
  products: state.products,
  user: state.user
});

export default connect(mapState)(Category);
