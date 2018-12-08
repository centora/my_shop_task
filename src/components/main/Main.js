import { Aside } from '../aside';
import { Greeting } from '../greeting';
import { Numbers } from '../numbers';
import { UsersList } from '../usersList';
import { Counter } from '../counter';
import './main.scss';

const Error = (props) => {
  const { color, text } = props;
  return (<mark style={{ color }}>{ text }</mark>);
};

export class Main extends Component {
  state = { users: [], error: false };

  showUserInfo(user) {
    alert(user.username);
  }

  clearUsers = () => {
    this.setState({ users: [] });
  }

  static getDerivedStateFromProps(nextProps, state) {
    console.log(state.users);
    return null;
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state);
    console.log(nextState);
    return true;
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log(error, info);
  }

  render() {
    const { title } = this.props;
    const { users, error } = this.state;
    if (!error) {
      return (
        <main className="main">
          <Aside />
          <div className="content">
            <h1>{title}</h1>
            <Greeting name="Oksana" />
            <h3>Displaying Numbers Component</h3>
            <br />
            <Counter />
            <br />
            <Numbers from="10" to="20" odd />
            <h3>Displaying UsersList Component</h3>
            <UsersList users={users} handleClick={this.showUserInfo} clearHandle={this.clearUsers} />
            <Error
              text="test"
              color="black"
            />
          </div>
        </main>
      );
    }
    return (
      <main className="main">
        <Aside />
        <div className="content">
          <h1>O-la-la. Something went wrong</h1>
        </div>
      </main>
    );
  }
}
