import './editableText.scss';

export class EditableText extends Component {
  state = {
    editable: false,
    editValue: this.props.text ? this.props.text : ''
  };

  componentDidUpdate(previousProps) {
    if (previousProps.editable !== this.props.editable) {
      this.setState({
        editable: this.props.editable
      });
    }
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
      onOut,
      width,
      multirow
    } = this.props;
    const { onChange, updateText } = this;
    const { editValue } = this.state;
    const editableControl = !multirow ? (
      <input
        autoFocus
        type="text"
        onChange={onChange}
        onBlur={() => updateText(onOut)}
        value={editValue}
        style={{ width }}
        className="editable-control"
      />
    ) : (
      <textarea
        autoFocus
        type="text"
        onChange={onChange}
        onBlur={() => updateText(onOut)}
        value={editValue}
        style={{ width }}
        className="editable-control"
      />
    );
    return editableControl;
  }

  render() {
    const { editValue, editable } = this.state;
    const { onClickHandler = this.editText } = this.props;
    return (
      <div className="editable-box">
        {
          !editable && editValue.length ? (
            <div className="editable-text" onClick={onClickHandler}>{editValue}</div>
          ) : this.renderEditableControl()
        }
      </div>
    );
  }
}
