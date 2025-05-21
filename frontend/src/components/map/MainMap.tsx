'use client';

import { useEffect, useState, useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { AppContext } from '@/context/AppContext';
import Marker from './Marker';
import { NearByData } from '@/types/nearby';

interface MainMapProps {
  zoom?: number;
  target: string;
}

const defaultProps = {
  zoom: 16
};

interface Center {
  lat: number;
  lng: number;
}

interface MainMapState {
  loaded: boolean;
  targetInfo?: {
    lat: number;
    lng: number;
    name: string;
    address: string;
    id: number;
  };
  nearbys: Map<number, NearByData>;
}

export default function MainMap(props: MainMapProps) {
  const { zoom, target } = { ...defaultProps, ...props };
  const [state, setState] = useState<MainMapState>({ loaded: false, nearbys: new Map() });
  const [center, setCenter] = useState<Center>();
  const { selectedTypes, selectedNearbyId, setSelectedNearbyId } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/properties/${target}`);
        const data = await response.json();
        
        const center = {
          lat: data.Latitude,
          lng: data.Longitude,
        };

        setState({
          loaded: true,
          targetInfo: {
            lat: data.Latitude,
            lng: data.Longitude,
            address: data.address,
            name: data.name,
            id: data.id,
          },
          nearbys: new Map() // 这里需要从后端获取周边设施数据
        });
        setCenter(center);
      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };

    fetchData();
  }, [target]);

  useEffect(() => {
    if (selectedNearbyId && state.loaded && state.targetInfo) {
      const selectedNearby = state.nearbys.get(selectedNearbyId);
      if (selectedNearby) {
        setCenter({
          lat: selectedNearby.lat,
          lng: selectedNearby.lng
        });
      }
    }
  }, [selectedNearbyId, state.loaded, state.targetInfo, state.nearbys]);

  if (state.loaded && state.targetInfo) {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
            language: 'ja',
            libraries: 'geometry',
          }}
          center={center}
          defaultZoom={zoom}
          onGoogleApiLoaded={({ map, maps }) => {
            if (!center) return;

            const circle400 = new maps.Circle({
              strokeColor: "#DC582A",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#DC582A",
              fillOpacity: 0.0,
              map: map,
              center: center,
              radius: 400,
            });

            const circle800 = new maps.Circle({
              strokeColor: "#DC582A",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#DC582A",
              fillOpacity: 0.02,
              map: map,
              center: center,
              radius: 800,
            });

            const createLabel = (circle: any, text: string) => {
              const div = document.createElement('div');
              div.style.position = 'absolute';
              div.style.color = '#DC582A';
              div.innerHTML = text;
              div.style.fontSize = '16px';

              const customOverlay = new maps.OverlayView();
              customOverlay.onAdd = () => {
                customOverlay.getPanes().overlayMouseTarget.appendChild(div);
              };
              customOverlay.draw = () => {
                const projection = customOverlay.getProjection();
                const position = projection.fromLatLngToDivPixel(circle.getCenter());
                const topPosition = projection.fromLatLngToDivPixel(
                  new maps.LatLng(circle.getCenter().lat() + (0.000009 * circle.getRadius()), circle.getCenter().lng())
                );
                div.style.left = `${position.x - 10}px`;
                div.style.top = `${topPosition.y + 10}px`;
              };
              customOverlay.setMap(map);
            };

            createLabel(circle400, '400');
            createLabel(circle800, '800');
          }}
          onChildClick={(key) => {
            setSelectedNearbyId(key);
          }}
          onClick={() => {
            setSelectedNearbyId(undefined);
          }}
        >
          <Marker
            key={state.targetInfo.id}
            lat={state.targetInfo.lat}
            lng={state.targetInfo.lng}
            name={state.targetInfo.name}
            type="main"
            address={state.targetInfo.address}
            id={state.targetInfo.id}
            advanced1=""
            advanced2=""
            advanced3=""
            distance={0}
            showInfoWindow={state.targetInfo.id === selectedNearbyId}
          />

          {Array.from(state.nearbys.values())
            .filter((nearby) => selectedTypes.includes(nearby.type) || nearby.type === 'main')
            .map((nearby) => (
              <Marker
                key={nearby.id}
                {...nearby}
                showInfoWindow={nearby.id === selectedNearbyId}
              />
            ))}
        </GoogleMapReact>
      </div>
    );
  }

  return null;
} 