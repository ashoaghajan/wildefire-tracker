import { getData } from "../api/axiosRequests"


export const getEvents = () => async(dispatch: Dispatch) => {
    try{
        const { data } = await getData();
        dispatch({ type: 'GET_EVENTS', data });
    }
    catch(err){
        console.log(err.message);
    }
}