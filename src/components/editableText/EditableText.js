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

    if (typeof this.props.onUpdateFieldHandle === 'function') {
      this.props.onUpdateFieldHandle(this.state.editValue);
    }
  }

  onChange = ({ target }) => {
    this.setState({
      editValue: target.value
    });
  }

  renderEditableControl() {
    const {
      width,
      multirow
    } = this.props;
    const { onChange, updateText } = this;
    const { editValue } = this.state;
    const editableControl = multirow ? (
      <textarea
        autoFocus
        type="text"
        onChange={onChange}
        onBlur={() => updateText()}
        value={editValue}
        style={{ width }}
        className="editable-control"
      />
    ) : (
      <input
        autoFocus
        type="text"
        onChange={onChange}
        onBlur={() => updateText()}
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
