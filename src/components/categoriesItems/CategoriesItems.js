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
    this.setState({ itemId });
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

  onChangeFilter = ({ target }) => {
    this.setState({
      filterValue: target.value
    });
  }

  categoryClick = (id) => {
    if (!this.state.editId) {
      this.props.history.push(`/categories/${id}`);
    }
  }

  render() {
    const {
      publishedItems,
      unpublishedItems,
      addItem,
      publishedTitle = 'Published categories',
      unpublishedTitle = 'Unpublished categories',
      isEditButton = false
    } = this.props;
    const { filterValue, itemId, editId } = this.state;
    const filteredUnpublishedItems = unpublishedItems
      .filter(item => item.title.toLowerCase().includes(filterValue.toLowerCase()));
    return (
      <div className="categories-items">
        <div className="categories-container">
          <h3>{publishedTitle}</h3>
          <ul className="categories-list">
            {
              publishedItems && publishedItems.map(({ title, id }) => (
                <li key={id}>
                  <InputText
                    text={title}
                    onOut={title => this.onInputOut(title, id)}
                    editable={id === editId}
                    onClickHandler={() => this.categoryClick(id)}
                  />
                  <span
                    style={{ marginLeft: '10px', color: 'red' }}
                    onClick={() => this.onDelete(id)}
                  >
                    X
                  </span>
                  { isEditButton && (
                    <span
                      style={{ marginLeft: '10px', color: 'red' }}
                      onClick={() => this.onEdit(id)}
                    >
                     V
                    </span>
                  )}
                </li>
              ))
            }
          </ul>
        </div>

        <div className="categories-container">
          <h3>{unpublishedTitle}</h3>
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
                filteredUnpublishedItems.map(({ title, id }) => (
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
