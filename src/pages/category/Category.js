import { connect } from 'react-redux';
import { getCategory } from '../../store/category';
import { getProducts } from '../../store/products';
import './category.scss';
import { CategoriesItems } from 'components/categoriesItems';

class Category extends Component {
  componentDidMount() {
    this.props.dispatch(getCategory(this.props.match.params.id));
    this.props.dispatch(getProducts());
  }

  componentDidUpdate() {
    console.log('component update');
  }

  updateCategories () {
    console.log('update');
  }

  render() {
    const { category, history, products } = this.props;
    console.log(this.props);
    console.log(category);
    return (
      <div>
        {/*<div className="">
          <h1 className="main-title">Category {category.title}</h1>
          <ul className="cat-products-list">
            {
              products && products.map(item => (
                <li key={item.id}>
                  <Link to={`/products/${item.id}`}>{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>*/}
      </div>
    );
  }
}

const mapState = state => ({
  category: state.category,
  products: state.products
})

export default connect(mapState)(Category);
