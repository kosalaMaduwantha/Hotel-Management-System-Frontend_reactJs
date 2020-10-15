import React, { Component } from 'react'
import './css/Accomodation.css';
import Room1 from '../images/AVI_8742.jpg'
import Room2 from '../images/AVI_8675.jpg'
import AccomodationLogo from '../images/accomimg.png'
import SocialButtons from './SocialButtons'
import { Link } from 'react-router-dom';
import Footer01 from './Footer01';

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
                            <Link to="/">
                                <button className="homebtn">HOME</button>
                            </Link>
                            <button className="menuBtn">MENU</button>
                        </div>
                    </div>

                    <div style={{display:"flex"}}>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{marginTop:"150px", display:"bottom"}}>
                            <img src={AccomodationLogo} className="AccomImg" alt="" style={{marginBottom:"150px"}}/>
                            <br/>
                            <Link to="/reservation">
                                <button className="y-btn mt-2" >BOOK NOW</button>
                            </Link>
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

                <div style={{overflowX:"hidden"}}>
                    <div className="row" style={{overflowX:"hidden", marginTop:"100px", marginBottom:"100px"}}>
                        
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={Room1} alt="" style={{width:"500px", marginLeft:"100px"}} />
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6" style={{textAlign:"left", marginTop:"50px"}}>
                            <h3>Standard Room</h3>
                            <p>Standard single sea view room with comfortable stay with pool access</p>
                            <ul>
                                <li>Mini bar</li>
                                <li>Air conditioned</li>
                                <li>King Size bed</li>
                                <li>Pool access</li>
                            </ul>
                            <Link to="/reservation">
                                <button className="y-btn mt-2" >BOOK NOW</button>
                            </Link>
                            
                        </div>

                        
                    </div>

                    <div className="row" style={{overflowX:"hidden", marginTop:"100px", marginBottom:"100px"}}>
                        
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={Room2} alt="" style={{width:"500px", marginLeft:"100px"}} />
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6" style={{textAlign:"left", marginTop:"50px"}}>
                            <h3>Deluxe Room - Single</h3>
                            <p>Delux double room with sea view room with comfortable stay with pool access</p>
                            <ul>
                                <li>Mini bar</li>
                                <li>Air conditioned</li>
                                <li>King Size bed</li>
                                <li>Pool access</li>
                            </ul>
                            
                            <Link to="/reservation">
                                <button className="y-btn mt-2" >BOOK NOW</button>
                            </Link>
                        </div>

                        
                    </div>

                    <div className="row" style={{overflowX:"hidden", marginTop:"100px", marginBottom:"100px"}}>
                        
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={Room2} alt="" style={{width:"500px", marginLeft:"100px"}} />
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6" style={{textAlign:"left", marginTop:"50px"}}>
                            <h3>Deluxe Room - Double</h3>
                            <p>Delux double room with sea view room with comfortable stay with pool access</p>
                            <ul>
                                <li>Mini bar</li>
                                <li>Air conditioned</li>
                                <li>King Size bed</li>
                                <li>Pool access</li>
                            </ul>
                            
                            <Link to="/reservation">
                                <button className="y-btn mt-2" >BOOK NOW</button>
                            </Link>
                        </div>

                        
                    </div>
                    
                </div>
                <Footer01/>
            </div>
        )
    }
}

export default Accomodation
