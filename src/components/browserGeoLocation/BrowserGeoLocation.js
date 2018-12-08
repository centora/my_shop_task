import './browser-geo-location.scss';

export const BrowserGeoLocation = (props) => {
  const { location, clickHandler, showInfo } = props;
  const { lat, lan } = location;
  return (
    <div className="location-container">
      <button type="button" onClick={() => clickHandler()}>Get Browser Geolocation</button>
      <div className={'location-info ' + (!showInfo ? 'hidden' : '')}>
        { lat && lan ? <div>Latitude: { lat } <br /> Longitude: { lan }</div> : <div><em>Loading...</em></div> }
      </div>
    </div>
  );
};
