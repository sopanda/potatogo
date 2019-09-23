import Geocode from "react-geocode";

Geocode.enableDebug();

export const geocode = ({ lat, lng }) => {
  Geocode.fromLatLng(lat, lng).then(
    response => {
      const address = response.results[0].formatted_address;
      return address;
    },
    error => {
      console.error(error);
    }
  );
};
