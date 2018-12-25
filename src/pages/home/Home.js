import PropTypes from 'prop-types';
import './home.scss';
import { getInfo } from '../../services';

class Home extends Component {
  state = {
    info: null
  }

  componentDidMount() {
    getInfo()
      .then(info => this.setState({ info }));
  }

  render() {
    const { user = {} } = this.props;
    const { info } = this.state;
    return (
      <article className="invitation">
        <h1>Hello {user.firstName}</h1>
        {
          info && (
            <div className="info">
              <p>
                You have <strong>{info.categories}</strong> categories &nbsp;
                ({info.publishedCategories} published categories)
              </p>
              <p>You have <strong>{info.products}</strong> products</p>
            </div>
          )
        }
      </article>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object.isRequired
};

export default Home;
