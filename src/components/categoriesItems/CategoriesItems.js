import './categoriesItems.scss';
import { EditableText as InputText} from 'components/editableText';

export class CategoriesItems extends Component {
  state = {
    filterValue: '',
    filteredItems: [],
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState({
      filteredItems: this.props.unpublishedItems
    });
  }

  onChangeFilter = ({ target }) => {
    this.setState({
      filterValue: target.value
    });
    this.filterCategories(target.value);
  }

  filterCategories = (value) => {
    let filteredItems = this.props.unpublishedItems;
    filteredItems = filteredItems
      .filter(item => item.title.toLowerCase().includes(value.toLowerCase()));

    this.setState({
      filteredItems
    });
  }

  render () {
    const {
      publishedItems,
      unpublishedItems,
      onChangeLeftItem,
    } = this.props;
    const { filterValue, filteredItems } = this.state;
    return (
      <div className="categories-items">
        <div className="categories-container">
          <h3>Published categories</h3>
          <ul className="categories-list">
            {
              publishedItems.map(({ title, id }) => {
                return (
                  <li key={id}>
                    <InputText
                      text={title}
                      onOut={title => onChangeLeftItem(title, id)}
                    />
                  </li>
                );
              })
            }
          </ul>
        </div>

        <div className="categories-container">
          <h3>Unpublished categories</h3>
          <div className="unpublished-categories">
            <div className="filter-box">
              <input
                type="text"
                name="filter"
                placeholder="Enter at list 2 chars"
                value={filterValue}
                onChange={this.onChangeFilter}
              />
            </div>
            <ul className="categories-list">
              {
                filteredItems.map(({ title, id }) => {
                  return <li key={id}>{title}</li>;
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

