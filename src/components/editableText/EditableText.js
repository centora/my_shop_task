import { Component } from 'react';
import './editableText.scss';

export class EditableText extends Component {
  state = {
    editable: false,
    editValue: this.props.text
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
    this.setState({
      editValue: target.value
    });
  }

  renderEditableControl() {
    const {
      onUpdateFieldHandle,
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
          !editable ? (
            <div className="editable-text">{editValue}</div>
          ) : this.renderEditableControl()
        }
      </div>
    );
  }
}
