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
    info: null
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

  onLogout = () => {
    this.setState({ user: null });
  }

  render() {
    const {
      user,
      info,
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
        <Main>
          <Pages
            user={user}
            info={info}
          />
        </Main>
        <Footer />
      </>
    );
  }
}

export default withRouter(connect()(AppComponent));
