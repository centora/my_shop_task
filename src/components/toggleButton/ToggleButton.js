import './toggle-button.scss';

export class ToggleButton extends Component {
  state = {
    active: false
  }

  toogleActive = () => {
    const { active } = this.state;
    this.setState({
      active: !active
    });
  }

  render() {
    const { active } = this.state;

    return (
      <button type="button" className={active ? 'active' : ''} onClick={this.toogleActive}>
        Toggle Active
      </button>
    );
  }
}
