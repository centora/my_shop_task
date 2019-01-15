import './product.scss';
import { EditableText } from 'components/editableText';

import { getProduct } from 'services';

export class Product extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    getProduct(this.props.match.params.id)
      .then(product => this.setState({ product }));
  }

  onSubmit(e) {
    e.stopPropagation();
    console.log('submit');
  }

  render() {
    const { product } = this.state;
    const { disabled } = this.props;
    const { title, price, description } = product;
    return (
      <div>
        <form className="edit-form" onSubmit={e => this.onSubmit(e)}>
          <h3 className="main-title">TITLE: { title && (
            <EditableText width="150px" text={title} disabled={disabled} />
          )}
          </h3>
          <div>
            <strong>$ { price && <EditableText width="30px" text={price} disabled={disabled} /> }</strong>
          </div>
          <div className="description">{ description && (
            <EditableText multirow text={description} disabled={disabled} />
          )}
          </div>
          <br />
          <button>SAVE</button>
        </form>
      </div>
    );
  }
}
