import React, { memo } from 'react';
import { Marker } from './Marker';

export const Markers = memo(({ items }) => {
  let markers = items.map(offer => {
    const { _id } = offer;
    return <Marker key={_id} item={offer} />;
  });

  return markers;
});
