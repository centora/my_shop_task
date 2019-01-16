import './categories.scss';
import { Link } from 'react-router-dom';
import { checkUser, getCategories, getProducts } from 'services';

export class Categories extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    getCategories()
      .then(categories => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <div className="published-categories">
          <h1 className="main-title">Categories</h1>
          <ul className="categories-list">
            {
              categories.map(item => <li key={item.id}><Link to={`categories/${item.id}`}>{item.title}</Link></li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}
