import './categoriesItems.scss';
import { EditableText as InputText} from 'components/editableText';

export class CategoriesItems extends Component {
  render () {
    const {
      publishedItems,
      unpublishedItems,
      onChangeLeftItem,
    } = this.props;

    return (
      <div className="control-items">
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

        <ul className="categories-list">
          {
            unpublishedItems.map(({ title, id }) => {
              return <li key={id}>{title}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

