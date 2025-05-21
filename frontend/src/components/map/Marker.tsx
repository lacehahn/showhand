'use client';

import { NearByData } from '@/types/nearby';

interface MarkerProps extends NearByData {
  showInfoWindow: boolean;
}

export default function Marker({ lat, lng, name, type, address, advanced1, advanced2, advanced3, distance, showInfoWindow }: MarkerProps) {
  return (
    <div
      data-lat={lat}
      data-lng={lng}
      className="relative"
    >
      <div className="w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      {showInfoWindow && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white p-2 rounded shadow-lg min-w-[200px]">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{type}</p>
          <p className="text-sm text-gray-600">{address}</p>
          {advanced1 && <p className="text-sm text-gray-600">{advanced1}</p>}
          {advanced2 && <p className="text-sm text-gray-600">{advanced2}</p>}
          {advanced3 && <p className="text-sm text-gray-600">{advanced3}</p>}
          <p className="text-sm text-gray-600">{distance}m</p>
        </div>
      )}
    </div>
  );
} 