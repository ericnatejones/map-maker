import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import Options from './options/Options';
import Map from './map/canvas/Map'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Map/>
          </Route>
          <Route path="/config">
            <Options/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
