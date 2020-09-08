import React, { Component } from 'react'
import './css/Reservation.css';
import AccomodationLogo from '../images/reservimg.png'
import SocialButtons from './SocialButtons'
import Footer01 from './Footer01';

export class Reservation extends Component {
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

                <div>
                    <table style={{marginTop:"100px", marginBottom:"50px", marginLeft:"450px"}}>
                        <tr>
                            <td>Name with Initials : </td>
                            <td><input type="text" className="res-input" name="name" placeholder="Enter your name"/></td>
                        </tr>
                        <tr className="tr-tab">
                            <td>Email : </td>
                            <td><input type="text" className="res-input" name="email" placeholder="Enter your emial"/></td>
                        </tr>
                        <tr>
                            <td>Chek-In date : </td>
                            <td><input type="text" className="res-input" name="c-in-date" placeholder="MM/DD/YY"/></td>
                        </tr>
                        <tr>
                            <td>Chek-Out date : </td>
                            <td><input type="text" className="res-input" name="c-out-date" placeholder="MM/DD/YY"/></td>
                        </tr>
                        <tr>
                            <td>No. of adults : </td>
                            <td><input type="text" className="res-input" name="adults" placeholder="Enter no of adults"/></td>
                        </tr>
                        <tr>
                            <td>No. of children : </td>
                            <td><input type="text" className="res-input" name="children" placeholder="Enter no of children"/></td>
                        </tr>
                    </table>
                    
                </div>
                <Footer01/>
            </div>
        )
    }
}

export default Reservation
