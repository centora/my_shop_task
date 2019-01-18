import './product.scss';
import { EditableText } from 'components/editableText';

import { getProduct } from 'services';

const EditProductForm = (props) => {
  const { product, onSubmitHandler, disabled } = props;
  const { title, price, description } = product;
  return (
    <div>
      <form className="edit-form" onSubmit={e => onSubmitHandler(e)}>
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
};

const CreateProductForm = (props) => {
  const { onSubmitHandler } = props;
  return (
    <div>
      <form className="form edit-form" onSubmit={e => onSubmitHandler(e)}>
        <h3 className="main-title">TITLE: <input type="text" placeholder="Title" /></h3>
        <div className="form-group">
          <strong>$ <input type="text" placeholder="price" /></strong>
        </div>
        <div className="description form-group">
          <textarea name="" id="" cols="30" rows="10" placeholder="Description" />
        </div>
        <br />
        <button>SAVE</button>
      </form>
    </div>
  );
};

export class Product extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id !== 'new') {
      getProduct(id)
        .then(product => this.setState({ product }));
    }
  }

  onSubmit(e) {
    e.stopPropagation();
    console.log('submit');
  }

  render() {
    const { product } = this.state;
    const { disabled } = this.props;
    const { id } = this.props.match.params;
    return id === 'new' ? (
      <CreateProductForm onSubmitHandler={e => this.onSubmit(e)} />
    ) : (
      <EditProductForm
        product={product}
        disabled={disabled}
        onSubmitHandler={e => this.onSubmit(e)}
      />
    );
  }
}
