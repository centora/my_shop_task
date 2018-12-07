import './counter.scss';

export class Counter extends Component {
  state = { counter: 0 }

  clickHandler = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="counter">
        <button type="button" onClick={this.clickHandler}>Increase</button> <span>{counter}</span>
      </div>
    );
  }
}
