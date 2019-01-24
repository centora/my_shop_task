import { connect } from 'react-redux';
import { login } from '../../store/user';
import './login.scss';

const Login = ({ dispatch }) => {
  const onSubmit = (event) => {
    const { elements } = event.target;
    const data = {
      email: elements.email.value,
      password: elements.password.value
    };

    dispatch(login(data));

    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <h1 className="main-title">Login</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter email"
          required
          name="email"
          defaultValue="admin@a.com"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Enter password"
          required
          name="password"
          defaultValue="admin"
        />
      </div>
      <div className="button-group">
        <button type="submit" className="btn-submit">Login</button>
      </div>
    </form>
  );
};

export default connect()(Login);
