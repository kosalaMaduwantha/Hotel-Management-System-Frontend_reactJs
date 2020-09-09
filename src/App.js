import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import HomeTemplate from './ComponentsNethsara/HomeTemplate';
import CustManager from './ComponentsNethsara/CustManagerTemplate'
import Accomodation from './ComponentsNethsara/Accomodation';
import Reservation from './ComponentsNethsara/Reservation';
import Check from './ComponentsNethsara/cmdashboard';

function App() {
  return (
    <div className="App">

      <Router>
        <Route path="/" exact component={HomeTemplate}/>
        <Route path="/custmanager" component={CustManager}/>
        <Route path="/accomodation" component={Accomodation}/>
        <Route path="/reservation" component={Reservation}/>
        <Route path="/check" component={Check}/>
      </Router>

    </div>
  );
}

export default App;
