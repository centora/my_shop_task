import { connect } from 'react-redux';
import { CategoriesItems } from 'components/categoriesItems';
import { getCategories } from '../../store/category';

const isPublished = category => category.published;
const notPublished = category => !category.published;

class Categories extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  updateCategories = (title, id) => {
    const category = this.props.categories.find(category => category.id === id);
    category.title = title;

    this.props.dispatch(updateCategories(category));
  }

  render() {
    const { categories } = this.props;
    return (
      <section>
        <h1>Categories</h1>
        <CategoriesItems
          publishedItems={categories.filter(isPublished)}
          unpublishedItems={categories.filter(notPublished)}
          onChangeLeftItem={this.updateCategories}
        />

        {/*<br />
        <br />

        <div className="published-categories">
          <h1 className="main-title">Categories</h1>
          <ul className="categories-list">
            {
              categories.map(item => <li key={item.id}><Link to={`categories/${item.id}`}>{item.title}</Link></li>)
            }
          </ul>
        </div>*/}
      </section>
    );
  }
}

const mapState = state => ({
  categories: state.categories
});

export default connect(mapState)(Categories);
