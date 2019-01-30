import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToasterContainer } from 'react-toastr';
import { check, logout } from './store/user';
import { cleanInfo, getInfo } from './store/categories';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './components/main';

import { Pages } from './pages/Pages';
import { Modal } from 'components/modal';

class AppComponent extends Component {

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
  }

  onLogout = () => {
    this.props.dispatch(logout());
    this.props.dispatch(cleanInfo());
  }

  onOpenModal = () => {
    this.setState({showModal: true})
  }

  onHideModal = () => {
    this.setState({showModal: false})
  }

  onOk = () => {
    console.log('removing ...');
    this.setState({showModal: false})
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
        <button onClick={this.onOpenModal}>Open Modal</button>
        <Footer />

        {/*<ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />*/}
        <Modal
          isOpen={this.state.showModal}
          close={this.onHideModal}
          success={this.onOk}
          text="Some warning was happend when you tried to delete category"
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
