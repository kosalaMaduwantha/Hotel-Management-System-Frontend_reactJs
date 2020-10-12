import React, { Component } from 'react'
import './css/CmDashboard.css';
import Rockfort from '../images/1.png';


class CmDashboard extends Component {
    render() {
      return (
        <div className="App">
           <input type="checkbox" id="check"/>
  
            <header>
              <label for="check">
                <i className="fas fa-bars" id="sidebar_btn"></i>
              </label>
              <div className="left_area">
                
              </div>
              <div className="right_area">
                <a href="#" className="logout_btn">Logout</a>
              </div>
            </header>
          
          
            
            <div className="sidebar">

              <div className="profile_info">
                <img src={Rockfort} className="profile_image"/>
                <h6>Raveen Vishvajith</h6>
                <h4>Customer Manager</h4>

              </div>

              <div>
                    <a href="/cmcalendar"><i className="fas fa-calendar-alt"></i><span>Calender</span></a>
                    <a href="/resdashboard"><i className="fas fa-th"></i><span>Reservations</span></a>
                    <a href="/custdetails"><i className="fas fa-table"></i><span>Customer Details</span></a>
                    <a href="/stats"><i className="fas fa-cogs"></i><span>Statistics</span></a>
              </div>
            </div>
        
            
            <div className="content">

                <h2 className="content-head">Statistics</h2>
        
                <div className="stat-card-div" style={{padding:"15px"}}>

                  <h3 className="stat-card-head">Rock fort Unawatuna</h3>
                  <div className="row">

                    <div className="statCard" >
                      <h6>Room Reservations</h6>
                      <h2 className="statCard-h2">06</h2>
                    </div>

                    <div className="statCard" >
                      <h6>Banquet Bookings</h6>
                      <h2 className="statCard-h2">45</h2>
                    </div>

                    <div className="statCard" >
                      <h6>Supplies</h6>
                      <h2 className="statCard-h2">09</h2>
                    </div>

                  </div>

                  <div className="row">

                    <div className="statCard" >
                      <h6>No. of Rooms</h6>
                      <h2 className="statCard-h2">40</h2>
                    </div>

                    <div className="statCard" >
                      <h6>No. of Customers</h6>
                      <h2 className="statCard-h2">08</h2>
                    </div>

                    <div className="statCard" >
                      <h6>Offers</h6>
                      <h2 className="statCard-h2">02</h2>
                    </div>

                  </div>

                  <h3 className="stat-card-head" style={{marginTop:"60px"}}>Rock fort beach resort & Spa</h3>
                  <div className="row">

                    <div className="statCard" >
                      <h6>Room Reservations</h6>
                      <h2 className="statCard-h2">200</h2>
                    </div>

                    <div className="statCard" >
                      <h6>Banquet Bookings</h6>
                      <h2 className="statCard-h2">200</h2>
                    </div>

                    <div className="statCard" >
                      <h6>Supplies</h6>
                      <h2 className="statCard-h2">200</h2>
                    </div>

                  </div>

                </div>
              
            </div>

        </div>
      )
    }
  }
  
  export default CmDashboard;