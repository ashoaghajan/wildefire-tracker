/// <reference types="react-scripts" />
type EventItem = {
    id: string,
    title: string,
    link: string,
    categories: [{
        id: number,
        title: string
    }]
    geometries:[{
        date: string,
        type: string,
        coordinates: [ number, number ]
    }]
};

type EventState = {
    events: EventItem[]
}

type Action = {
    type: 'GET_EVENTS',
    data: {
        events: EventItem[]
    }
}

type Dispatch = (Action) => Promise<void>