import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToasterContainer } from 'react-toastr';
import { check, logout } from './store/user';
import { cleanInfo, getInfo } from './store/category';

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
