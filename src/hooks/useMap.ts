import { useState } from 'react';

export const useMap = (eventData: EventItem[]) => {
    
    const key = process.env.REACT_APP_GOOGLE_API!;
    const wildfireEvents = eventData.filter(event => event.categories[0].id === 8);
    const [locationInfo, setLocationInfo] = useState({ id: '', title: '' });


    const handleClick = (id: string, title: string) => {
        setLocationInfo({ id, title })
    }

    return { key, wildfireEvents, locationInfo, handleClick }
}