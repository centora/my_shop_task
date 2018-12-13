import './browser-geo-location.scss';

export class BrowserGeoLocation extends Component {
  state = {
    showLocationInfo: false,
    location: {
      lat: '',
      lan: ''
    }
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

  render() {
    const { showLocationInfo: showInfo, location: { lat, lan } } = this.state;

    return (
      <div className="location-container">
        <button type="button" onClick={this.getGeolocation}>Get Browser Geolocation</button>
        <div className={`location-info ${!showInfo ? 'hidden' : ''}`}>
          { lat && lan ? <div>Latitude: { lat } <br /> Longitude: { lan }</div> : <div><em>Loading...</em></div> }
        </div>
      </div>
    );
  }
}
