import React, { Component } from 'react'
import './css/Accomodation.css';
import AccomodationLogo from '../images/accomimg.png'
import SocialButtons from './SocialButtons'

export class Accomodation extends Component {
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
                            <button className="y-btn mt-2" >BOOK NOW</button>
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
                    
                </div>
            </div>
        )
    }
}

export default Accomodation
