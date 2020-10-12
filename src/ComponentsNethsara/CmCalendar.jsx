import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Rockfort from '../images/1.png';
import './css/CmDashboard.css';


class CmCalendar extends Component {

    constructor(props){
        super(props);
        this.state={
            reservation:[]
        }

    }
    
    componentDidMount(){
        this.fetchRes();
    }

    fetchRes = () =>{
        fetch("http://127.0.0.1:8000/res/").then(res => res.json()).then(data => this.setState({reservation:data})).catch(err => console.log(err))
    }

    render() { 

        return ( 

                <div>
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

                        <h2 className="content-head">Reservation Calendar</h2>

                        <div className="stat-card-div" style={{padding:"20px", zIndex:"-5"}}>
                            
                                <FullCalendar style={{zIndex:"5"}}
                                plugins={[ dayGridPlugin ]}
                                initialView="dayGridMonth"

                                // events={[
                                //     { title: 'event 1', start: '2020-10-11', end: '2020-10-13' },
                                //     { title: 'event 2', date: '2020-10-15' }
                                // ]}

                                eventContent={renderEventContent}
                                />

                        
                        </div>

                        
                    </div>
                
                </div>

         );
    }
}

function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
}
 
export default CmCalendar;