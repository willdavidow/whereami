import React, {PureComponent} from 'react';
import {
  withGoogleMap,
  GoogleMap,
  OverlayView,
  StreetViewPanorama
} from 'react-google-maps';

class Main extends PureComponent {
  render() {
    const coordinates = { lat: 49.2853171, lng: -123.1119202 };
    const StreetView = withGoogleMap(
      props => (
        <GoogleMap
          ref={props.onMapLoad}
          defaultZoom={8}
          defaultCenter={coordinates}
        >
          <StreetViewPanorama
            defaultPosition={coordinates}
            visible
          />
        </GoogleMap>
      )
    );

    return (
      <StreetView
        containerElement={<div style={{width: `100vw`, height: '100vh' }} />}
        mapElement={<div style={{width: `100vw`, height: '100vh' }} />}
      />
    );
  }
}

export default Main;
