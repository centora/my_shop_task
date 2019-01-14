import './category.scss';
import { Link } from 'react-router-dom';
import { getCategory } from 'services';

export class Category extends Component {
  state = {
    category: {}
  }

  componentDidMount() {
    getCategory(this.props.match.params.id)
      .then(category => this.setState({ category }));
  }

  render() {
    const { category } = this.state;
    const { products } = category;
    console.log(category);
    return (
      <div>
        <div className="">
          <h1 className="main-title">Category {category.title}</h1>
          <ul className="products-list">
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
