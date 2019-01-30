import { connect } from 'react-redux';
import { ControlItems } from 'components/controlItems';
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
        <ControlItems
          leftItems={categories.filter(isPublished)}
          rightItems={categories.filter(notPublished)}
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
