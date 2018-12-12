import './toggle-hidden-box.scss';

export class ToggleHiddenBox extends Component {
  state = {
    displayBox: false
  }

  toggleHiddenBox = () => {
    const { displayBox } = this.state;
    this.setState({
      displayBox: !displayBox
    });
  }

  render() {
    const { displayBox } = this.state;
    return (
      <div className="flex-container align-items-center">
        <button type="button" onClick={this.toggleHiddenBox}>{displayBox ? 'Hide' : 'Show'}</button>&nbsp;&nbsp;
        <div className={displayBox ? '' : 'hidden'}>Here you can see some secret message.</div>
      </div>
    );
  }
}
