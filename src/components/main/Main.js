import { Aside } from '../aside';
import { Greeting } from '../greeting';
import { Numbers } from '../numbers';
import { UsersList } from '../usersList';
import { Counter } from '../counter';

import { ToggleButton } from '../toggleButton';
import { ToggleHiddenBox } from '../toggleHiddenBox';
import { BrowserGeoLocation } from '../browserGeoLocation';
import { Timer } from '../timer';
import { Mount } from '../mount';

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
    visibleHiddenBox: false,
    location: {
      lat: '',
      lan: ''
    },
    showLocationInfo: false,
    showTimer: true,
    showMount: true,
    counter: 0,
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

  getGeolocation = () => {
    this.setState({ showLocationInfo: true });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  showPosition = (position) => {
    this.setState({
      location: {
        lat: position.coords.latitude,
        lan: position.coords.longitude
      }
    });
  }

  hideTimer = () => {
    this.setState({
      showTimer: false
    });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    const { title } = this.props;
    const {
      users,
      posts,
      error,
      activeClName,
      visibleHiddenBox,
      location,
      showLocationInfo,
      showTimer,
      showMount,
      counter
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
            <br />
            <BrowserGeoLocation location={location} showInfo={showLocationInfo} clickHandler={this.getGeolocation} />
            <br />
            <div className="flex-container align-items-center">
              <button type="button" onClick={() => this.hideTimer()}>Destroy Timer</button> &nbsp; &nbsp;
              {showTimer && <Timer />}
            </div>
            <div className="mount-component-preview">
              <h3>Mount: Component Lifecycle</h3>
              <div>
                <button onClick={() => this.setState({ counter: counter + 1 })}>Inc</button>
                <span className="count-text">{counter}</span>
                <br /><br />
                <button onClick={() => this.setState({ showMount: !showMount })}>
                  {showMount ? 'Destroy' : 'Create'}
                </button>

                {showMount && <Mount code={counter} />}
              </div>
            </div>

            <br />
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
