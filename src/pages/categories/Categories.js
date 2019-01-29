import { connect } from 'react-redux';
import './categories.scss';
import { Link, withRouter } from 'react-router-dom';
import { getCategories } from '../../store/category';

class Categories extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
    /*getCategories()
      .then(categories => this.setState({ categories }));*/
  }

  render() {
    const { categories } = this.props;
    console.log(categories);
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

const mapState = state => ({
  categories: state.categories
});

export default connect(mapState)(Categories);
