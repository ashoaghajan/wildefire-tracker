import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

export interface LocationMarkerProps {
    lat: number, 
    lng: number,
    handleClick: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined
}
 
const LocationMarker: React.SFC<LocationMarkerProps> = ({ lat, lng, handleClick }) => {
    return ( 
        <div className='location-marker' onClick={handleClick}>
            <Icon icon={locationIcon} className='location-icon'/>
        </div>
    );
}
 
export default LocationMarker;
