import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CategoriesItems } from 'components/categoriesItems';
import { EditableText } from 'components/editableText';
import { getCategory } from '../../store/category';
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

  addProductToCategory(id) {
    /* const product = this.props.products.find(product => product.id === id);
    category.published = true;

    this.props.dispatch(updateCategories(category)); */
  }

  removeProductFromCategory(id) {
    console.log('remove', id);
  }

  render() {
    const {
      category, history, products, user
    } = this.props;
    return (
      <div>
        { category && (
          <div className="">
            <h1 className="main-title">Category <EditableText text={category.title} /></h1>
            { user ? (
              <CategoriesItems
                publishedItems={category.products}
                unpublishedItems={products}
                onChangeLeftItem={this.updateProducts}
                removeItem={this.removeProductFromCategory}
                addItem={this.addProductToCategory}
                history={history}
                publishedTitle="Products added to category"
                unpublishedTitle="Products"
              />
            ) : (
              <ul className="cat-products-list">
                {
                  products && products.map(item => (
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
