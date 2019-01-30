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

  publishCategory = (id) => {
    console.log('publish');
    const category = this.props.categories.find(category => category.id = id);
    category.published = true;

    this.props.dispatch(updateCategories(category));
  }

  render() {
    const { categories } = this.props;
    console.log(categories);
    console.log(categories.filter(category => category.published));
    return (
      <section>
        <h1 className="main-title">Categories</h1>
        <CategoriesItems
          publishedItems={categories.filter(isPublished)}
          unpublishedItems={categories.filter(notPublished)}
          onChangeLeftItem={this.updateCategories}
          publishCategoryHandler={this.publishCategory}
        />
      </section>
    );
  }
}

const mapState = state => ({
  categories: state.categories
});

export default connect(mapState)(Categories);
