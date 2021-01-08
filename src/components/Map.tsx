import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import { useMap } from '../hooks/useMap';

export interface MapProps {
    center: {
        lat: number,
        lng: number
    },
    zoom: number,
    eventData: EventItem[]
}
 
const Map: React.SFC<MapProps> = ({ center, zoom, eventData }) => {

    const { key, wildfireEvents, locationInfo, handleClick } = useMap(eventData);

    return ( 
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {wildfireEvents.map(event => (
                    <LocationMarker lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]}
                    handleClick={() => handleClick(event.id, event.title)} key={event.id}/>
                ))}
            </GoogleMapReact>
            {locationInfo.id && <LocationInfoBox info={locationInfo}/>}
        </div>
     );
}
 
export default Map;
