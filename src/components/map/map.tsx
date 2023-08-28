import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/use-map';
import { City, OfferListItem } from '../../types/offer-list-item';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { OfferCard } from '../../types/offer-card';
import { useAppSelector } from '../../hooks';
import { getHighlightedOffer } from '../../store/offer-card-process/offer-card-selectors';

type MapProps = {
  city: City;
  offersList: OfferListItem[];
  currentOffer?: OfferCard;
  className: string;
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

export function Map ({city, offersList, currentOffer, className}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const selectedOfferId = useAppSelector(getHighlightedOffer);
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

      if (currentOffer) {
        const marker = new Marker({
          lat: currentOffer.location.latitude,
          lng: currentOffer.location.longitude,
        });
        marker.setIcon(currentCustomIcon).addTo(markerLayer);
      }
      offersList.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon(
          selectedOfferId !== undefined && offer.id === selectedOfferId
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offersList, selectedOfferId, currentOffer]);
  return <section ref={mapRef} className={className} />;
}
