import React, { memo } from 'react';
import { Marker as LMarker } from 'react-leaflet';
import {
  Popup,
  PopupList,
  PopupListItem,
  PopupListButton
} from 'shared/components/Popup';
import { Button } from 'shared/components/Button';

export const Marker = memo(
  ({
    item: {
      description,
      start_destination,
      finish_destination,
      price,
      distance,
      est_delivery_date
    },
    theme
  }) => {
    const { lat: sLat, lng: sLng } = start_destination;
    const current_datetime = new Date(est_delivery_date);
    const formatted_date =
      current_datetime.getDate() +
      '-' +
      (current_datetime.getMonth() + 1) +
      '-' +
      current_datetime.getFullYear();

    return (
      <LMarker position={[sLat, sLng]}>
        <Popup>
          <PopupList>
            <PopupListItem>{`Pickup address: none`}</PopupListItem>
            <PopupListItem>{`Drop address: none`}</PopupListItem>
            <PopupListItem>{`Deliver till: ${formatted_date}`}</PopupListItem>
            <PopupListItem>{`Distance: ${distance} km`}</PopupListItem>
            <PopupListItem>{`Price: ${price} $`}</PopupListItem>
            <PopupListItem>{`Description: ${description}`}</PopupListItem>
            <PopupListButton>
              <Button>More</Button>
            </PopupListButton>
          </PopupList>
        </Popup>
      </LMarker>
    );
  }
);
