import './category.scss';
import { getCategory } from 'services';
import { CategoriesItems } from 'components/categoriesItems';

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

  updateCategories () {
    console.log('update');
  }

  render() {
    const { category } = this.state;
    const { products } = category;
    return (
      <div>
        <div className="">
          <h1 className="main-title">Category {category.title}</h1>
          <CategoriesItems
            publishedItems={categories.filter(isPublished)}
            unpublishedItems={categories.filter(notPublished)}
            onChangeLeftItem={this.updateCategories}
            publishCategoryHandler={this.publishCategory}
          />
        </div>
      </div>
    );
  }
}
