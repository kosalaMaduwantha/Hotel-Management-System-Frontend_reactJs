import React, { Component } from 'react';
import './css/HomePart01.css';
import Rflogo from '../images/logo-white.png';

class HomePart01 extends Component {
    render() {
        return ( 
            <div className="HomePart01" style={{overflow:"hidden"}}>
                <div className="row header-row" style={{overflow:"hidden"}}>
                    <div className="col-sm-12 col-md-4 col-lg-4"></div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-3"><img src={Rflogo} className="logo-img" alt="Logo" /></div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-5" style={{padding:0,margin:0,overflow:"hidden"}}>
                        <button className="menuBtn">MENU</button>
                    </div>
                </div>
                <div className="row yellow-btn-group">
                    <div className="col-sm-12 col-md-2 col-lg-2">
                        
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <ul className="btn-set">
                            <li>
                                <button className="yellow-btn mt-2">EVENT</button>
                            </li>
                            <li>
                                <button className="yellow-btn mt-2">ACCOMODATION</button>
                            </li>
                            <li>
                                <button className="yellow-btn mt-2">TRAVEL</button>
                            </li>
                        </ul>
                   
                        
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">

                    </div>
                </div>
                
            </div>
        )
    }
}

export default HomePart01
