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
        <h1 className="main-title">Categories</h1>
        <CategoriesItems
          publishedItems={categories.filter(isPublished)}
          unpublishedItems={categories.filter(notPublished)}
          onChangeLeftItem={this.updateCategories}
        />
      </section>
    );
  }
}

const mapState = state => ({
  categories: state.categories
});

export default connect(mapState)(Categories);
