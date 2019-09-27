import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DarkSky} from "./components/DarkSky"
import {EventbriteInfo} from "./components/EventbriteInfo"

function App() {
  return (
    <div className="App">
      <h1 >
      API STUFF
      </h1>
        <DarkSky />
        <EventbriteInfo />
    </div>
  );
}

export default App;
