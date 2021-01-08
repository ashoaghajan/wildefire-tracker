const initState = {
    events: []
}

export const eventReducer = (state: EventState = initState, action: Action) => {

    switch(action.type){
        case 'GET_EVENTS':
            return {
                ...state,
                events: action.data.events
            } 

        default:
            return state      
    }
}