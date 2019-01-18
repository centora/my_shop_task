import './editableText.scss';

export class EditableText extends Component {
  state = {
    editable: this.props.editable,
    disabled: this.props.disabled,
    editValue: this.props.text ? this.props.text : ''
  }

  editText = () => {
    this.setState({
      editable: true
    });
  }

  updateText = (fn) => {
    this.setState({
      editable: false
    });

    if (typeof fn === 'function') {
      fn(this.state.editValue);
    }
  }

  onChange = ({ target }) => {
    this.setState(prevState => ({
      editValue: this.props.disabled ? prevState.editValue : target.value
    }));
  }

  renderEditableControl() {
    const {
      onUpdateFieldHandle,
      width,
      multirow
    } = this.props;
    const { onChange, updateText } = this;
    const { editValue, disabled } = this.state;
    const editableControl = !multirow ? (
      <input
        autoFocus
        type="text"
        onChange={onChange}
        onBlur={() => updateText(onUpdateFieldHandle)}
        value={editValue}
        style={{ width }}
        className="editable-control"
      />
    ) : (
      <textarea
        autoFocus
        type="text"
        onChange={onChange}
        onBlur={() => updateText(onUpdateFieldHandle)}
        value={editValue}
        style={{ width }}
        className="editable-control"
      />
    );
    return editableControl;
  }

  render() {
    const { editText } = this;
    const { editable, editValue } = this.state;
    return (
      <div className="editable-box" onClick={editText}>
        {
          !editable && editValue.length ? (
            <div className="editable-text">{editValue}</div>
          ) : this.renderEditableControl()
        }
      </div>
    );
  }
}
