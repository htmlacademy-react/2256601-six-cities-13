import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/use-map';
import { City, OfferListItem } from '../../types/offer-list-item';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  city: City;
  offersList: OfferListItem[];
  selectedId: string | undefined;
};

const defaultCustomIcon = new Icon ({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export function Map ({city, offersList, selectedId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const cityLocation = city.location;

  useEffect(() => {
    if (map) {
      const {latitude, longitude, zoom} = cityLocation;
      map.flyTo([latitude, longitude], zoom);
    }
  }, [map, cityLocation]);

  useEffect (() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offersList.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon(
          selectedId !== undefined && offer.id === selectedId
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offersList, selectedId]);
  return <div style={{height: '100%', width: '100%'}} ref={mapRef}></div>;
}
