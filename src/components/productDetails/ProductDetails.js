import { Component } from 'react';
import './productDetails.scss';
import { EditableText } from '../editableText';

export class ProductDetails extends Component {
  state = {}

  onSubmit(e) {
    e.stopPropagation();
    console.log('submit');
  }

  render() {
    return (
      <form className="edit-form" onSubmit={e => this.onSubmit(e)}>
        <h3 className="form-title">TITLE: <EditableText width="150px" value="TOW TRACK" /></h3>
        <div><strong>$ <EditableText width="30px" value="32" /></strong></div>
        <EditableText multirow>
          Enjoy new movie-themed thrills at a favorite Radiator Springs location - Willy's Butte!
          Inspired by Disney - Pixar Cars 3, this hair-raising set uses multiple
          wild driving skills and transforms for 3 ways to play.
        </EditableText>
        <button type="button">SAVE</button>
      </form>
    );
  }
}
