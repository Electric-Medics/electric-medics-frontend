import React, { FunctionComponent } from 'react';
type LocationProps = {
  lat: number;
  lng: number;
};

const LocationPin: FunctionComponent<LocationProps> = () => (
  <div className='pin'>
    <i className='fas fa-map-pin' style={{ fontSize: '24px' }}></i>
  </div>
);

export default LocationPin;
