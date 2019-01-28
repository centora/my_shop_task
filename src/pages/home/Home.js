import PropTypes from 'prop-types';
import './home.scss';

class Home extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    info: PropTypes.object
  }

  static defaultProps = {
    info: {}
  }

  render() {
    const { user = {}, info } = this.props;

    return (
      <article className="invitation">
        <h1 className="main-title">Hello {user.firstName}</h1>
        { info && (
          <div className="info">
            <p>
              You have <strong>{info.categories}</strong> categories &nbsp;
              ({info.publishedCategories} published categories)
            </p>
            <p>You have <strong>{info.products}</strong> products</p>
            <button type="button" onClick={() => history.push('/categories')}>Go To Categories</button>
          </div>)
        }
      </article>
    );
  }
}

export default Home;
