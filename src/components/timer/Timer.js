import './timer.scss';

export class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: ''
    };

    this.interval = setInterval(this.startTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    this.setState({
      time
    });
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        {time}
      </div>
    );
  }
}
