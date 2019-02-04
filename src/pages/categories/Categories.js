import { connect } from 'react-redux';
import { CategoriesItems } from 'components/categoriesItems';
import { getCategories, updateCategories } from '../../store/categories';

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
    const { categories, history } = this.props;
    return (
      <section>
        <h1 className="main-title">Categories</h1>
        <CategoriesItems
          publishedItems={categories.filter(isPublished)}
          unpublishedItems={categories.filter(notPublished)}
          onChangeLeftItem={this.updateCategories}
          removeItem={this.unpublishCategory}
          addItem={this.publishCategory}
          history={history}
        />
      </section>
    );
  }
}

const mapState = state => ({
  categories: state.categories
});

export default connect(mapState)(Categories);
