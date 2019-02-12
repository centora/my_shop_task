import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories, updateCategories } from '../../store/categories';
import { CategoriesItems } from 'components/categoriesItems';

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

  unpublishCategory = (id) => {
    const category = this.props.categories.find(category => category.id === id);
    category.published = false;
    this.props.dispatch(updateCategories(category));
  }

  publishCategory = (id) => {
    const category = this.props.categories.find(category => category.id === id);
    category.published = true;
    this.props.dispatch(updateCategories(category));
  }

  render() {
    const { categories, history, user } = this.props;
    return (
      <section>
        <h1 className="main-title">Categories</h1>
        { user ? (
          <CategoriesItems
            publishedItems={categories.filter(isPublished)}
            unpublishedItems={categories.filter(notPublished)}
            onChangeLeftItem={this.updateCategories}
            removeItem={this.unpublishCategory}
            addItem={this.publishCategory}
            history={history}
            isEditButton
            redirectLink="/categories/"
          />
        ) : (
          <ul className="categories-list">
            {
              categories.map(item => (
                <li key={item.id}><Link to={`categories/${item.id}`}>{item.title}</Link></li>
              ))
            }
          </ul>
        )}

      </section>
    );
  }
}

const mapState = state => ({
  categories: state.categories,
  user: state.user
});

export default connect(mapState)(Categories);
