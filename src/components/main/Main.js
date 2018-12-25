import { Login } from '../../pages/login';
import { Home } from '../../pages/home';
import { checkUser } from '../../services';
import './main.scss';

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
          {
            user
              ? <Home user={user} />
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

      </main>
    );
  }
}
