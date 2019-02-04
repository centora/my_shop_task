import './categoriesItems.scss';
import { EditableText as InputText} from 'components/editableText';
import { Modal } from 'components/modal';

export class CategoriesItems extends Component {
  state = {
    filterValue: '',
    itemId: '',
    editId: '',
  }

  onDelete = (itemId) => {
    this.setState({itemId});
  }

  onClose = () => {
    this.props.removeItem(this.state.itemId);
  }

  onOk = () => {
    console.log('removing...', this.state.itemId);
    this.props.removeItem(this.state.itemId);
  }

  onEdit = (editId) => {
    this.setState({ editId });
  }

  onInputOut(title, id) {
    this.props.onChangeLeftItem(title, id);
    this.setState({ editId: '' });
  }

  componentWillReceiveProps(nextProps){

  }

  onChangeFilter = ({ target }) => {
    this.setState({
      filterValue: target.value
    });
    this.filterCategories(target.value);
  }

  filterCategories = (value) => {
    console.log(value);
  }

  render() {
    const {
      publishedItems,
      unpublishedItems,
      addItem
    } = this.props;
    const { filterValue, itemId, editId } = this.state;

    return (
      <div className="categories-items">
        <div className="categories-container">
          <h3>Published categories</h3>
          <ul className="categories-list">
            {
              publishedItems.map(({ title, id }) => (
                <li key={id}>
                  <InputText
                    text={title}
                    onOut={title => this.onInputOut(title, id)}
                    active={id === editId}
                    onClick={() => this.props.history.push(`/categories/$id`)}
                  />
                  <span
                    style={{ marginLeft: '10px', color: 'red' }}
                    onClick={() => this.onDelete(id)}
                  >
                    X
                  </span>
                  <span
                    style={{ marginLeft: '10px', color: 'red' }}
                    onClick={() => this.onEdit(id)}
                  >
                   V
                  </span>
                </li>
              ))
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
                unpublishedItems.map(({ title, id }) => (
                  <li
                    key={id}
                    onDoubleClick={() => addItem(id)}
                  >
                    {title}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <Modal
          isOpen={Boolean(itemId)}
          close={this.onClose}
          success={this.onOk}
          text="You are going to unpublish category"
        />
      </div>
    );
  }
}
