import { Login } from '../../pages/login';
import { checkUser } from '../../services';
import './main.scss';
import { ProductDetails } from '../productDetails';

export class Main extends Component {
  state = {
    user: null,
    loading: true,
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }));
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  renderContent() {
    const { user } = this.state;
    return (
      <>
        <div className="content">
          <h1>{user ? `Hello ${user.firstName}` : 'Login'}</h1>
          {
            user
              ? <p>Hello</p>
              : <Login onLogin={this.onLogin} />
          }
        </div>
      </>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <main className="main">
        {
          loading
            ? 'Loding...'
            : this.renderContent()
        }

        <ProductDetails />
      </main>
    );
  }
}
