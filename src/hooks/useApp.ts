import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../store/eventActions';

export const useApp = () => {
    const [loading, setLoading] = useState(false);
    const eventData = useSelector((state: EventState) => state.events);
    const dispatch = useDispatch();


    useEffect(() => {
        setLoading(true);
        dispatch(getEvents());
        // eslint-disable-next-line
    },[]);

    useEffect(() => {
        if(eventData.length){
            setLoading(false);
        }
    },[eventData])


    return { loading, eventData }
}