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
          defaultZoom={2}
          defaultCenter={coordinates}
          defaultOptions={{
            fullscreenControl: false,
            mapTypeControl: false,
            rotateControl: false,
            streetViewControl: false,
            zoomControl: true,
          }}
        />
      )
    );

    return (
      <MiniMapView
        containerElement={
          <div style={{
            position: 'relateive',
            width: '300px',
            height: '250px',
            boxShadow: '-5px 5px 5px 0 rgba(0, 0, 0, 0.5)',
            zIndex: 2
            }}
          />
        }
        mapElement={
          <div style={{
            width: `100%`,
            height: '100%'
            }}
          />
        }
      />
    );
  }
}

export default MiniMap;
