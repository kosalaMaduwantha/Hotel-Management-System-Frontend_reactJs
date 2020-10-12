import React, { Component } from 'react'
import './css/Reservation.css';
import Reserve from '../images/reserve.png'
import AccomodationLogo from '../images/reservimg.png'
import SocialButtons from './SocialButtons'
import Footer01 from './Footer01'
import { message, notification, Spin  } from "antd"
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

export class Reservation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fname:"",
            lname:"",
            nic:"",
            email:"",
            phone:"",
            country:"",
            // children:"",
            //cINdate:"",
            // cOUTdate:"",
            // adults:""
        }
        this.handleInput = this.handleInput.bind(this)
        this.OnSubmit = this.OnSubmit.bind(this)
    }

    
    componentDidMount(){
        //this.OnSubmit();
    }

    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    //validate the phone number
    validatePhone = () => {
        let phoneNum = this.state.phone;
        if (isNaN(phoneNum)) {
        message.error(
            "oopz!!! " +
            phoneNum +
            " is not recognized as a valid phone number. Please check the input and try again"
        );
        } else if (phoneNum.length != 10) {
        message.error(
            "oopz!!! the enterd phone number is not recognized as a valid mobile number. The number of digits should be 10"
        );
        }
    };

    OnSubmit = (e) => {
        
        e.preventDefault();

        const custData = {
            cID:this.state.email,
            fName:this.state.fname,
            lName:this.state.lname,
            nic:this.state.nic,
            email:this.state.email,
            phone:this.state.phone,
            country:this.state.country,
            // cINdate:this.state.cINdate,
            // cOUTdate:this.state.cOUTdate,
            // adults:this.state.adults,
            // children:this.state.children
        };

        // const args = {
        //     message: <Spin />,
        //     description:
        //       "Please Wait... The form is submitting. Once successfull you will be redirect to the success page",
        //     duration: 0,
        //   };
        //   notification.open(args);
        console.log(custData);

        fetch("http://127.0.0.1:8000/customer-create/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(custData),

      })
    }
    

    render() {
        return (
            <div >
                <SocialButtons/>
                <div className="Accomodation01" style={{overflowX:"hidden"}}>
                    <div className="row header-row" style={{overflow:"hidden"}}>
                        <div className="col-sm-12 col-md-4 col-lg-4"></div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mt-3"></div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mt-5" style={{padding:0,margin:0,overflow:"hidden"}}>
                            <button className="homebtn">HOME</button>
                            <button className="menuBtn">MENU</button>
                        </div>
                    </div>

                    <div style={{display:"flex"}}>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:"120px", display:"bottom"}}>
                            <img src={AccomodationLogo} className="AccomImg" alt="" style={{marginBottom:"80px"}}/>
                            <br/>
                            <button className="y-btn mt-1" >Booking Conditions</button>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:"280px"}}>
                            <ul className="accom-ulist">
                                <li className="accom-list">Standard</li>
                                <li className="accom-list">Deluxe</li>
                                <li className="accom-list">Deluxe Mini Suite</li>
                                <li className="accom-list">Executive</li>
                                <li className="accom-list">Deluxe Family</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex", overflowX:"hidden"}}>

                    <form onSubmit={this.OnSubmit.bind(this)}>
                    <table style={{marginTop:"100px", marginBottom:"20px", marginLeft:"80px"}}>
                        <tr>
                            <td>First name : </td>
                            <td><input onChange={this.handleInput} type="text" className="res-input" name="fname" placeholder="Enter your name"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Last name : </td>
                            <td><input onChange={this.handleInput} type="text" className="res-input" name="lname" placeholder="Enter your name"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>NIC / Passport NO : </td>
                            <td><input onChange={this.handleInput} type="text" className="res-input" name="nic" placeholder="Enter your NIC or Passport No"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Email : </td>
                            <td><input onChange={this.handleInput} type="text" className="res-input" name="email" placeholder="Enter your emial"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Phone : </td>
                            <td><input onChange={this.handleInput} onBlur={this.validatePhone} type="text" className="res-input" name="phone" placeholder="Enter your Phone Number"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Country : </td>
                            <td><input onChange={this.handleInput} type="text" className="res-input" name="country" placeholder="Enter your Country"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Room Type : </td>
                            <td>
                                <Select defaultValue="Please select the room type from the drop down"  style={{ width: 500, marginLeft:"25px"}} onChange={handleChange}>
                                    <Option value="Standard">Standard</Option>
                                    <Option value="Deluxe">Deluxe</Option>
                                    <Option value="Deluxe Double">Deluxe Double</Option>
                                    <Option value="Executive">Executive</Option>
                                </Select>
                                
                            </td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Chek-In date : </td>
                            <td><input onChange={this.handleInput} type="date" className="res-input" name="cINdate" placeholder=""/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Chek-Out date : </td>
                            <td><input onChange={this.handleInput} type="date" className="res-input" name="cOUTdate" placeholder=""/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>No. of adults : </td>
                            <td><input onChange={this.handleInput} type="text" className="res-input" name="adults" placeholder="Enter no of adults"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>No. of children : </td>
                            <td><input onChange={this.handleInput} type="text" className="res-input" name="children" placeholder="Enter no of children"/></td>
                        </tr>
                        <br/>
                        <br/>
                    </table>
                    
                    <h6 style={{marginLeft:"50px", color:"#ee430f"}}>**Please make sure to read the booking conditions before make the reservation</h6>
                    <a href=""><h6 style={{marginBottom:"50px", marginLeft:"50px"}}>Click here to read the BOOKING CONDITIONS</h6></a>
                    <input type="submit" style={{marginBottom:"120px", marginLeft:"50px"}} className="submit-btn" value="RESERVE"/>

                    </form>

                    
                    <img src={Reserve} alt=""  style={{width:"600px", height:"280px", paddingTop:"100px"}}/>
                    
                </div>
                <Footer01/>
            </div>
        )
    }
}

export default Reservation
