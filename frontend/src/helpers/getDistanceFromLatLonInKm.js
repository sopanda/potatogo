export const getDistanceFromLatLonInKm = (
  { lat: lat1, lng: lon1 },
  { lat: lat2, lng: lon2 }
) => {
  let R = 6371;
  let dLat = deg2rad(lat2 - lat1);
  let dLon = deg2rad(lon2 - lon1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return d.toFixed(2);
};

const deg2rad = deg => deg * (Math.PI / 180);
