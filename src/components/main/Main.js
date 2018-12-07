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
  state = { users: [] };

  constructor(props) {
    super(props);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  showUserInfo(user) {
    alert(user.username);
  }

  render() {
    const { title } = this.props;
    const { users } = this.state;

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
          <UsersList users={users} handleClick={this.showUserInfo} />
          <Error
            text="test"
            color="black"
          />
        </div>
      </main>
    );
  }
}
