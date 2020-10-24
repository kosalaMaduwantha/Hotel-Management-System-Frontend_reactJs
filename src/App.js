import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom"
import HomeTemplate from './ComponentsNethsara/HomeTemplate';
import CustManager from './ComponentsNethsara/CustDetails'
import Accomodation from './ComponentsNethsara/Accomodation';
import Reservation from './ComponentsNethsara/Reservation';
import Stats from './ComponentsNethsara/CmDashboard';
import CustDetails from './ComponentsNethsara/CustDetails';
import ResDashboard from './ComponentsNethsara/ResDashboard';
import CmCalendar from './ComponentsNethsara/CmCalendar';
import ResSuccess from './ComponentsNethsara/ReservationSuccess';
//import EmployeeManagement_panel from './Components_k/EmployeeManagement_panel';
import Overview from './Components_Jini/Overview';
import outstandings from './Components_Jini/Outstandings';
import Budget from './Components_Jini/Budget';
import confirm from './Components_Jini/Confirm';
import reports from './Components_Jini/Reports';
import msg from './Components_Jini/Check1';
import msg2 from './Components_Jini/Check2';
import msg3 from './Components_Jini/Check3';
import result from './Components_Jini/Results';
import utility from './Components_Jini/Utility';
import search from './Components_Jini/Search';



function App() {
    return ( < div className = "App" >

        <
        Router >
        <
        Route path = "/"
        exact component = { HomeTemplate }
        /> <
        Route path = "/custmanager"
        bcomponent = { CustManager }
        />  <
        Route path = "/accomodation"
        component = { Accomodation }
        />  <
        Route path = "/reservation"
        component = { Reservation }
        />  <
        Route path = "/stats"
        component = { Stats }
        />  <
        Route path = "/custdetails"
        component = { CustDetails }
        />  <
        Route path = "/resdashboard"
        component = { ResDashboard }
        />  <
        Route path = "/cmcalendar"
        component = { CmCalendar }
        />  <
        Route path = "/resSuccess"
        component = { ResSuccess }
        />  <
        Route path = "/overview"
        component = { Overview }
        />  <
        Route path = "/outstandings"
        component = { outstandings }
        /> <
        Route path = "/budget"
        component = { Budget }
        /> <
        Route path = "/confirmation"
        component = { confirm }
        /> <
        Route path = "/reports"
        component = { reports }
        />  <
        Route path = "/message"
        component = { msg }
        />  < 
        Route path = "/message2"
        component = { msg2 }
        />  < 
        Route path = "/message3"
        component = { msg3 }
        />  <
        Route path = "/result"
        component = { result }
        /> < 
        Route path = "/utility"
        component = { utility }
        /> <
        Route path = "/search"
        component = { search }
        /> </
        Router >

        <
        /div>
    );
}
export default App;