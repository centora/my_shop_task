import { Component } from 'react';
import './productDetails.scss';
import { EditableText } from '../editableText';

export class ProductDetails extends Component {
  state = {
    name: 'TOW TRACK',
    price: '32',
    description: `Enjoy new movie-themed thrills at a favorite Radiator Springs location - Willy's Butte!
        Inspired by Disney - Pixar Cars 3, this hair-raising set uses multiple
        wild driving skills and transforms for 3 ways to play.`
  }

  onSubmit(e) {
    e.stopPropagation();
    console.log('submit');
  }

  render() {
    const { name, price, description } = this.state;
    const fn = text => console.log(text);
    return (
      <form className="edit-form" onSubmit={e => this.onSubmit(e)}>
        <h3 className="form-title">TITLE: <EditableText width="150px" text={name} onUpdateFieldHandle={fn} />
        </h3>
        <div><strong>$ <EditableText width="30px" text={price} /></strong></div>
        <div className="description"><EditableText multirow text={description} /></div>
        <br />
        <button type="button">SAVE</button>
      </form>
    );
  }
}
