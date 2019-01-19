import './product.scss';
import { EditableText } from 'components/editableText';
import { getProduct } from 'services';

export class Product extends Component {
  state = {
    product: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id === 'new') {
      this.setState({
        product: {
          title: '',
          price: '',
          description: ''
        }
      });
    } else {
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
    if (product) {
      const { title, price, description } = product;
      return (
        <div>
          <form className="edit-form" onSubmit={e => this.onSubmit(e)}>
            <h3 className="main-title">
              TITLE: <EditableText width="150px" text={title} disabled={disabled} />
            </h3>
            <div className="form-group">
              <strong>
                $ <EditableText width="30px" text={price} disabled={disabled} />
              </strong>
            </div>
            <div className="form-group description">
              <EditableText multirow text={description} disabled={disabled} />
            </div>
            <br />
            <button>SAVE</button>
          </form>
        </div>
      );
    }
    return null;
  }
}
