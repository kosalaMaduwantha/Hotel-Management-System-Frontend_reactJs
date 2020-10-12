import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom"
import HomeTemplate from './ComponentsNethsara/HomeTemplate';
import CustManager from './ComponentsNethsara/CustDetails'
import Accomodation from './ComponentsNethsara/Accomodation';
import Reservation from './ComponentsNethsara/Reservation';
import Stats from './ComponentsNethsara/CmDashboard';
import CustDetails from './ComponentsNethsara/CustDetails';
import ResDashboard from './ComponentsNethsara/ResDashboard';
import CmCalendar from './ComponentsNethsara/CmCalendar'
import EmployeeManagement_panel from './EmployeeManagement_panel'


function App() {
  return (
    <div className="App">

      <Router>
        <Route path="/" exact component={HomeTemplate}/>
        <Route path="/custmanager" component={CustManager}/>
        <Route path="/accomodation" component={Accomodation}/>
        <Route path="/reservation" component={Reservation}/>
        <Route path="/stats" component={Stats}/>
        <Route path="/custdetails" component={CustDetails}/>
        <Route path="/resdashboard" component={ResDashboard}/>
        <Route path="/cmcalendar" component={CmCalendar}/>
        <Route path="/Employee_manage" component={EmployeeManagement_panel} />
      </Router>

    </div>
  );
}

export default App;
