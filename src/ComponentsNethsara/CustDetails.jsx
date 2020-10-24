import React, { Component } from 'react';
import Rockfort from '../images/1.png';
import {Table} from 'react-bootstrap';
import './css/cmdashboard.css';
import { Popconfirm, message,notification  } from 'antd';

class CustDetails extends Component {
    
    constructor(props){
        super(props);
        this.state={
            customer:[]
        }

    }

        componentDidMount(){
            this.fetchCust()
        }

        fetchCust = () =>{
            fetch("http://127.0.0.1:8000/get-customer/").then(cust => cust.json()).then(data => this.setState({customer:data})).catch(err => console.log(err))
        }
        

        confirm = (id) => {
            var url = "http://127.0.0.1:8000/customer-delete/" + id + "/";
            console.log(url);
            fetch(url, {
                method: "DELETE",
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((response) => {
                  if (response.status === 200) {
                    console.log(id);
                    const args = {
                      message: "Notification",
                      description: "You have successfully deleted Customer " + id,
                      duration: 0,
                    };
                    notification.open(args);
          
                    this.fetchCust();
                  }
                })
                .catch((err) => console.log(err));
            message.success('Click on Yes');
          }

          cancel = (e) => {
            console.log(e);
            message.error('Click on No');
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

                    <h2 className="content-head">Customer details</h2>


                    <div className="stat-card-div">

                        <h3 className="stat-card-head" style={{paddingTop:"30px"}}>Rock fort Unawatuna</h3>

                        <div style={{padding:"20px"}}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>NIC</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Country</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.customer.map((item) => {
                                        return(
                                            <tr>
                                                <td>{item.fName}</td>
                                                <td>{item.lName}</td>
                                                <td>{item.nic}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.country}</td>
                                                <td><button  style={{backgroundColor: "none", border:"none", color:"rgb(0, 140, 255)", padding:"10px"}}>Update</button></td>
                                                <td><Popconfirm
                                                        title="Are you sure delete this task?"
                                                        onConfirm={()=> this.confirm(item.cID)}
                                                        onCancel={this.cancel}
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <a href="#">Delete</a>
                                                    </Popconfirm></td>
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

export default CustDetails;