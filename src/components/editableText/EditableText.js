import { Component } from 'react';
import './editableText.scss';

export class EditableText extends Component {
  state = {
    editable: false,
    editValue: 'Editable text'
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

  render() {
    const { onUpdateFieldHandle, width, children } = this.props;
    const { editText, updateText, onChange } = this;
    const { editable, editValue } = this.state;
    return (
      <div className="editable-box" onClick={editText}>
        {
          !editable ? (
            <span className="editable-text">{children}</span>
          ) : (
            <input
              autoFocus
              type="text"
              onChange={onChange}
              onBlur={() => updateText(onUpdateFieldHandle)}
              value={editValue}
              style={{ width }}
              className="editable-control"
            />)
        }
      </div>
    );
  }
}
