import './mount.scss';

export class Mount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'init',
      color: 'grey'
    };

    this.updateStatus = this.updateStatus.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.code !== 0 && nextProps.code % 3 === 0 && nextProps.code % 5 === 0) {
      return { color: '#0ff' };
    }
    if (nextProps.code !== 0 && nextProps.code % 3 === 0) {
      return { color: 'green' };
    }
    if (nextProps.code !== 0 && nextProps.code % 5 === 0) {
      return { color: 'blue' };
    }
    return { color: 'grey' };
  }

  updateStatus(e) {
    const { status } = this.state;
    this.setState({
      status: `${status} +`
    });

    e.preventDefault();
  }

  render() {
    const { code } = this.props;
    const { status, color } = this.state;

    return (
      <code id="mount" style={{ backgroundColor: color }}>
        <span>
          The code from props is { code }<br />
          The code from state is { status }
        </span>
        <a onClick={this.updateStatus}>Update status</a>
      </code>
    );
  }
}
