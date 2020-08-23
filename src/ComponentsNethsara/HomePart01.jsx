import React, { Component } from 'react';
import './css/HomePart01.css';
import Rflogo from '../images/logo-white.png';

class HomePart01 extends Component {
    render() {
        return (
            <div className="HomePart01">
                <div className="row header-row">
                    <div className="col-sm-12 col-md-4 col-lg-4"></div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-3"><img src={Rflogo} className="logo-img" alt="Logo" /></div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-5">
                        <button className="menuBtn">MENU</button>
                    </div>
                </div>
                <div className="row yellow-btn-group">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <button className="yellow-btn mt-2">ACCOMODATION</button>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <button className="yellow-btn mt-2">ACCOMODATION</button>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <button className="yellow-btn mt-2">EVENT HALLS</button>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default HomePart01
