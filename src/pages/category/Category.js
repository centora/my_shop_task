import './category.scss';
import { Link } from 'react-router-dom';
import { getCategory } from '../../store/category';

export class Category extends Component {
  state = {
    category: {}
  }

  componentDidMount() {
    getCategory(this.props.match.params.id)
      .then(category => this.setState({ category }));
  }

  componentDidUpdate() {
    console.log('component update');
  }

  render() {
    const { category } = this.state;
    const { products } = category;
    return (
      <div>
        <div className="">
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
        </div>
      </div>
    );
  }
}
