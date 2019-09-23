import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { withLeaflet } from 'react-leaflet';

class Routing extends MapLayer {
  componentDidUpdate() {
    const { from, to } = this.props;
    this.leafletElement.setWaypoints([
      L.latLng(from.lat, from.lng),
      L.latLng(to.lat, to.lng)
    ]);
  }

  createLeafletElement() {
    const { map, from, to } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [L.latLng(from.lat, from.lng), L.latLng(to.lat, to.lng)],
      router: new L.Routing.osrmv1({
        language: 'pl',
        profile: 'car'
      })
    }).addTo(map.current.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
