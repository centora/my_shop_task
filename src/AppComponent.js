import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToasterContainer } from 'react-toastr';
import { check } from './store/user';
import { getInfo } from './store/category';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './components/main';

import { Pages } from './pages/Pages';

class AppComponent extends Component {
  componentDidMount() {
    this.props.dispatch(check());
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user && this.props.user) {
      this.props.dispatch(getInfo());
    }

    if (prevProps.user && !this.props.user) {
      this.props.history.push('/');
    }
  }

  onLogout = () => {
    console.log('logout');
  }

  render() {
    const { user, info } = this.props;
    return (
      <>
        <Header
          user={user}
          info={info}
          onLogout={this.onLogout}
        />
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

const mapState = state => ({
  user: state.user,
  info: state.info,
  error: state.error,
});

export default withRouter(connect(mapState)(AppComponent));
