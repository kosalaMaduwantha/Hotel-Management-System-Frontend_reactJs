import React, { Component } from 'react'
import './css/Reservation.css';
import Reserve from '../images/reserve.png'
import AccomodationLogo from '../images/reservimg.png'
import SocialButtons from './SocialButtons'
import Footer01 from './Footer01';

export class Reservation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fname:"",
            cINdate:"",
            cOUTdate:"",
            adults:"",
            lname:"",
            nic:"",
            email:"",
            phone:"",
            country:"",
            children:""
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value}, ()=>{
            console.log(this.state)
        });
    }
    render() {
        return (
            <div>
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
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:"150px", display:"bottom"}}>
                            <img src={AccomodationLogo} className="AccomImg" alt="" style={{marginBottom:"150px"}}/>
                            <br/>
                            <button className="y-btn mt-2" >Booking Conditions</button>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:"350px"}}>
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

                <div style={{display:"flex"}}>
                    <table style={{marginTop:"100px", marginBottom:"50px", marginLeft:"100px"}}>
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
                            <td><input onChange={this.handleInput} type="text" className="res-input" name="nic" placeholder="Enter your emial"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Email : </td>
                            <td><input onChange={this.handleInput} type="text" className="res-input" name="email" placeholder="Enter your emial"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Phone : </td>
                            <td><input onChange={this.handleInput} type="text" className="res-input" name="phone" placeholder="Enter your emial"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Country : </td>
                            <td><input onChange={this.handleInput} type="text" className="res-input" name="country" placeholder="Enter your emial"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Chek-In date : </td>
                            <td><input onChange={this.handleInput} type="date" className="res-input" name="cINdate" placeholder="MM/DD/YY"/></td>
                        </tr>
                        <br/>
                        <tr>
                            <td>Chek-Out date : </td>
                            <td><input onChange={this.handleInput} type="date" className="res-input" name="cOUTdate" placeholder="MM/DD/YY"/></td>
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
                        <tr style={{paddingLeft:"100px"}}>
                            <input type="submit" style={{marginBottom:"50px"}} className="submit-btn" value="Submit"/>
                        </tr>
                    </table>

                    <img src={Reserve} alt=""  style={{width:"650px", height:"300px", paddingTop:"100px"}}/>
                    
                </div>
                <Footer01/>
            </div>
        )
    }
}

export default Reservation
