import './timer.scss';

export class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: '',
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
    const today = date.toLocaleDateString();
    this.setState({
      today,
      time
    });
  }

  render() {
    const { time, today } = this.state;
    return (
      <div>
        {today}
        <br />
        {time}
      </div>
    );
  }
}
