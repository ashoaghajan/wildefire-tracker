import axios from 'axios';

const url = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';

export const getData = () => axios.get(url);