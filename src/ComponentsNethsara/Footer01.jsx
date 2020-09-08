import React, { Component } from 'react'
import Logo from '../images/1.png'
import './css/Footer01.css';

export class Footer01 extends Component {
    render() {
        return (
            <div className="footer">
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <img src={Logo} alt=""/>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <h3>Home</h3>
                    <ul className="ulist">
                        <li>Accomodation</li>
                        <li>Drink and Dine</li>
                        <li>Tours</li>
                        <li>Events</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <h3>Connect with US</h3>
                    <ul className="ulist">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <h3>Contact Address</h3>
                    <p>Rock Fort Unawatuna<br/>Dalawella<br/>Unawatuna<br/>Galle<br/>SriLanka</p>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <h3>Contact US</h3>
                    <ul className="ulist">
                        <li>01115152123</li>
                        <li>rockfortunawatuna@gmail.com</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <h3>About US</h3>
                </div>
                
            </div>
        )
    }
}

export default Footer01
