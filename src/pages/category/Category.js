import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategory } from '../../store/category';
import './category.scss';

export class Category extends Component {
  componentDidMount() {
    //this.props.dispatch(getCategory({}));
   /* const { category } = this.state;
    const { products } = category;
    const product = products.find(item => item.id === this.props.match.params.id);
    */
  }

  componentDidUpdate() {
    console.log('component update');
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {/*<div className="">
          <h1 className="main-title">Category {category.title}</h1>
          <ul className="cat-products-list">
            {
              products && products.map(item => (
                <li key={item.id}>
                  <Link to={`/products/${item.id}`}>{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>*/}
      </div>
    );
  }
}
