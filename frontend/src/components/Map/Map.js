import React, { forwardRef, memo } from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { Markers } from 'components/Markers';
import styled from 'styled-components';
import { MAPS_URL } from 'constants/maps';

const MapWrapper = styled(LeafletMap)`
  position: relative;
  width: 100%;
  min-height: 500px;

  & .leaflet-control-container,
  & .leaflet-routing-container-hide {
    display: none !important;
  }
`;

export const Map = memo(
  forwardRef((props, ref) => {
    const { latitude, longitude, children, type, addMarker, markers } = props;
    return (
      <MapWrapper
        center={[latitude, longitude]}
        zoom={15}
        attributionControl
        zoomControl
        doubleClickZoom
        scrollWheelZoom
        dragging
        animate
        easeLinearity={0.35}
        onClick={e => type === 'create' && addMarker(e)}
        ref={ref}
      >
        <TileLayer url={MAPS_URL.WIKIMEDIA} />
        {markers && type === 'home' && <Markers items={markers} />}
        {type === 'create' && children}
      </MapWrapper>
    );
  })
);
