import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastr';
import { check, logout } from './store/user';
import { cleanInfo, getInfo } from './store/categories';
import { cleanError } from './store/status';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './components/main';

import { Pages } from './pages/Pages';

export class AppComponent extends Component {

  state = {
    showModal: false
  }

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

    if (!prevProps.error && this.props.error) {
      this.container.error(
        'Some error happens',
        'Error!'
      );
      this.props.dispatch(cleanError());
    }

  }

  onLogout = () => {
    this.props.dispatch(logout());
    this.props.dispatch(cleanInfo());
  }

  render() {
    const { user, info, products } = this.props;
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
            products={products}
          />
        </Main>
        <Footer />

        <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />
      </>
    );
  }
}

const mapState = state => ({
  user: state.user,
  info: state.info,
  error: state.error,
  products: state.products,
  category: state.category,
});

export default withRouter(connect(mapState)(AppComponent));
