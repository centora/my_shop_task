import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getInfo,
} from 'services';
import { check } from './store/user';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './components/main';

import { Pages } from './pages/Pages';

class AppComponent extends Component {
  state = {
    user: null,
    info: null,
    loading: true,
  }

  componentDidMount() {
    this.props.dispatch(check());
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.user && this.state.user) {
      getInfo()
        .then(info => this.setState({ info }));
    }
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  onLogout = () => {
    this.setState({ user: null });
  }

  render() {
    const {
      user,
      info,
      loading,
    } = this.state;

    const ConnectedHeader = withRouter(({ history }) => (
      <Header
        user={user}
        info={info}
        history={history}
        onLogout={this.onLogout}
      />
    ));

    return (
      <>
        <ConnectedHeader />
        <Main
          user={user}
          info={info}
          onLogin={this.onLogin}
          loading={loading}
        >
          <Pages
            user={user}
            info={info}
            onLogin={this.onLogin}
          />
        </Main>
        <Footer />
      </>
    );
  }
}

export default connect()(AppComponent);
