import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './components/main';
import { checkUser, getInfo } from './services';

import { Pages } from './pages/Pages';

export class AppComponent extends Component {
  state = {
    user: null,
    info: null,
    loading: true
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }));
  }

  conponentDidUpdate(prevProps, prevState) {
    if (!prevState.user && this.state.user) {
      getInfo()
        .then(info => this.setState({ info }));
    }
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  render() {
    const { user, info, loading } = this.state;
    return (
      <>
        <Header user={user} info={info} />
        <Main
          user={user}
          info={info}
          onLogin={this.onLogin}
          loading={loading}
        >
          <Pages />
        </Main>
        <Footer />
      </>
    );
  }
}
