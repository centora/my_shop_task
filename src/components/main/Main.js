import { Login } from '../../pages/login';
import { checkUser, shopInfo } from '../../services';
import './main.scss';
import { ProductDetails } from '../productDetails';

export class Main extends Component {
  state = {
    user: null,
    loading: true,
    shopInfo: null
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }));

    shopInfo()
      .then(shopInfo => this.setState({ shopInfo }))
      .catch(() => console.log('Error while getting data'));
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  renderContent() {
    const { user } = this.state;
    return (
      <>
        <h1>{user ? `Hello ${user.firstName}` : 'Login'}</h1>
        {
          user
            ? <p>Hello</p>
            : <Login onLogin={this.onLogin} />
        }
      </>
    );
  }

  render() {
    const { getInfo } = this;
    const { loading, shopInfo } = this.state;
    return (
      <main className="main">
        <div className="content">
          {
            loading
              ? 'Loding...'
              : this.renderContent()
          }

          <ProductDetails />

          <br />

          {shopInfo && (
            <div>
              <strong>Categories:</strong> {shopInfo.categories}
              <br />
              <strong>Published Categories:</strong> {shopInfo.publishedCategories}
              <br />
              <strong>Products:</strong> {shopInfo.products}
            </div>
          )}
        </div>
      </main>
    );
  }
}
