import React, {PureComponent} from 'react';
import {
  withGoogleMap,
  GoogleMap,
  OverlayView,
  StreetViewPanorama
} from 'react-google-maps';

class MiniMap extends PureComponent {
  render() {
    const coordinates = { lat: 49.2853171, lng: -123.1119202 };
    const MiniMapView = withGoogleMap(
      props => (
        <GoogleMap
          ref={props.onMapLoad}
          defaultZoom={3}
          defaultCenter={coordinates}
        />
      )
    );

    return (
      <MiniMapView
        containerElement={<div style={{
          position: `absolute`,
          top: `10px`,
            right: `10px`,
            width: `300px`,
            height: '250px',
            zIndex: 2
        }} />}
        mapElement={<div style={{width: `100%`, height: '100%' }} />}
      />
    );
  }
}

export default MiniMap;
