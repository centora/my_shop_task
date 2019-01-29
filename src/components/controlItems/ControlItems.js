import './controlItems.scss';
import { EditableText as InputText} from 'components/editableText';

class ControlItems extends Component {
  render () {
    const {
      leftItems,
      rightItems,
      onChangeLeftItem,
    } = this.props;

    return (
      <div className="control-items">
        <ul>
          {
            leftItems.map(({ title, id }) => {
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

        <ul>
          {
            rightItems.map(({ title, id }) => {
              return <li key={id}>{title}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default ControlItems;
