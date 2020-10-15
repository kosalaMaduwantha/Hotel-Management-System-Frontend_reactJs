import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Rockfort from '../images/1.png';
import './css/CmDashboard.css';
import { Button } from 'antd'


class CmCalendar extends Component {

    constructor(props){
        super(props);
        this.state={
            reservation:[],
            formattedArray:[]
        }
    }
    
    componentDidMount(){
        //this.fetchdata();

        fetch("http://127.0.0.1:8000/res/").then((data) => data.json()).then(res => this.setState({reservation : res})).catch(err => console.log(err));
        
    }

    // fetchdata = () =>{
        
    // }

    formatData = () => {
       console.log(this.state.reservation)
        var formattedData = [];
        var obj = {};

        this.state.reservation.map(item => {
            return(
                obj = {
                    title:"Reservation "+item.res_id+" "+item.cID,
                    start:item.check_in_date,
                    end:item.check_out_date
                }, formattedData.push(obj)
            );
        });
        console.log(formattedData);
        //return(formattedData)
        this.setState({formattedArray : formattedData});

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

                        <Button type="primary" block onClick={this.formatData} style={{marginBottom:"20px"}}>
                            Check Reservations
                        </Button>
                            
                                <FullCalendar 
                                    style={{zIndex:"5"}}
                                    plugins={[ dayGridPlugin ]}
                                    initialView="dayGridMonth"

                                    events={this.state.formattedArray}

                                //eventContent={renderEventContent}
                                />

                        
                        </div>

                        
                    </div>
                
                </div>

         );
    }
}
 
export default CmCalendar;