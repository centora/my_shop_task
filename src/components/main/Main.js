import { Aside } from '../aside';
import { Greeting } from '../greeting';
import { Numbers } from '../numbers';
import { UsersList } from '../usersList';
import { Counter } from '../counter';

import { ToggleButton } from '../toggleButton';
import { ToggleHiddenBox } from '../toggleHiddenBox';

import './main.scss';

const Error = (props) => {
  const { color, text } = props;
  return (<mark style={{ color }}>{ text }</mark>);
};

export class Main extends Component {
  state = {
    users: [],
    posts: [],
    error: false,
    activeClName: false,
    visibleHiddenBox: false
  };

  getRelatedPosts = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  clearUsers = () => {
    this.setState({ users: [] });
  }

  toggleActive = () => {
    const { activeClName } = this.state;
    this.setState({
      activeClName: !activeClName
    });
  }

  toggleHiddenBox = () => {
    const { visibleHiddenBox } = this.state;
    this.setState({
      visibleHiddenBox: !visibleHiddenBox
    });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log(error, info);
  }

  render() {
    const { title } = this.props;
    const {
      users,
      posts,
      error,
      activeClName,
      visibleHiddenBox
    } = this.state;
    if (!error) {
      return (
        <main className="main">
          <Aside />
          <div className="content">
            <h1>{title}</h1>
            <ToggleButton activeState={activeClName} clickHandler={this.toggleActive} />
            <br />
            <br />
            <div>
              <ToggleHiddenBox visibleBoxStatus={visibleHiddenBox} clickHandler={this.toggleHiddenBox} />
            </div>
            <h3>Displaying UsersList Component</h3>
            <UsersList
              users={users}
              posts={posts}
              handleClick={this.getRelatedPosts}
              clearHandle={this.clearUsers}
            />
            <Greeting name="Oksana" />
            <h3>Displaying Numbers Component</h3>
            <br />
            <Counter />
            <br />
            <Numbers from="10" to="20" odd />
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
