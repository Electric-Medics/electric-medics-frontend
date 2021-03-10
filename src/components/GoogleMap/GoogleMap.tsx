import React, { FunctionComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import * as dotenv from 'dotenv';

import './GoogleMap.css';
import LocationPin from '../LocationPin/LocationPin';

dotenv.config();

interface Location {
  address: string;
  lat: number;
  lng: number;
}

type GoogleMapProps = {
  location: Location;
  zoomLevel: number;
};

const GoogleMap: FunctionComponent<GoogleMapProps> = ({
  location,
  zoomLevel,
}: GoogleMapProps) => {
  let key: string = process.env.REACT_APP_GOOGLE_MAP_API_KEY ?? '';

  return (
    <div className='map'>
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin lat={location.lat} lng={location.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default GoogleMap;
