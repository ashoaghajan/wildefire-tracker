import React from 'react';
import Map from './components/Map';
import spinner from './assets/spinner.gif';
import Header from './components/Header';
import { mapProps } from './global/globalVariables';
import { useApp } from './hooks/useApp';

function App() {

  const { loading, eventData } = useApp();

  return (
    <div>
      <Header />
      {!loading ? 
        <Map center={mapProps.center} zoom={mapProps.zoom} eventData={eventData}/> : 
        <div className='loader'>
          <img src={spinner} alt='spinner'></img>
          <h1>Fetching Data</h1>
        </div>
      }
    </div>
  );
}

export default App;
