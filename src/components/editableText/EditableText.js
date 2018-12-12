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
    typeof fn === 'function' ? fn(`Input text was changed: ${this.state.editValue}`) : '';
  }

  onChange = ({ target }) => {
    this.setState({
      editValue: target.value
    });
  }

  render() {
    const { fn } = this.props;
    const { editText, updateText, onChange } = this;
    const { editable, editValue } = this.state;
    return (
      <div className="editable-box" onClick={editText}>
        { !editable && <span className="editable-text">{editValue}</span> }
        { editable && (
          <input
            autoFocus
            type="text"
            onChange={onChange}
            onBlur={() => updateText(fn)}
            value={editValue}
            className="editable-control"
          />
        )}
      </div>
    );
  }
}
