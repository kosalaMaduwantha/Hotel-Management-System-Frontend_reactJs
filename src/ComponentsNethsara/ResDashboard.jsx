import React, { Component } from 'react';
import Rockfort from '../images/1.png';
import {Table} from 'react-bootstrap';
import './css/CmDashboard.css';
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

class ResDashboard extends Component {

    constructor(props){
        super(props);
        this.state={
            rooms:[],
            reservation:[]
        }

    }

        componentDidMount(){
            this.fetchRes();
            this.fetchRooms();
        }

        fetchRes = () =>{
            fetch("http://127.0.0.1:8000/res/").then(res => res.json()).then(data => this.setState({reservation:data})).catch(err => console.log(err))
        }
        fetchRooms = () =>{
            fetch("http://127.0.0.1:8000/get-rooms/").then(res => res.json()).then(data => this.setState({rooms:data})).catch(err => console.log(err))
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

                    <h2 className="content-head">Reservations</h2>


                    <div className="stat-card-div">

                        <h3 className="stat-card-head" style={{paddingTop:"30px"}}>Rock fort Unawatuna</h3>

                        <div style={{padding:"20px"}}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Request</th>
                                        <th>Check-In</th>
                                        <th>Check-Out</th>
                                        <th>Assign a Room</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.reservation.map((item) => {
                                            return(
                                                <tr>
                                                    <td>{item.room_type}</td>
                                                    <td>{item.check_in_date}</td>
                                                    <td>{item.check_out_date}</td>
                                                    <td>
                                                        <Select defaultValue={item.room_id} style={{ width: 120 }} onChange={handleChange}>
                                                            {this.state.rooms.map((item) => {
                                                                return(
                                                                <Option>{item.room_id}</Option>
                                                                );
                                                            })}
                                                        </Select>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ResDashboard;