import React, { FunctionComponent } from 'react';
import GoogleMapReact from 'google-map-react';

import './GoogleMap.css';
import LocationPin from '../LocationPin/LocationPin';

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
  return (
    <div className='map'>
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCK_sufXJt1gXyEwu1oLAmDq6YqJb5pKQo' }}
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
