import React, { Component } from 'react'
import './css/HomePart02.css';
import Event from "../images/IMG_4390.jpg";
import Accomodation from "../images/AVI_8742.jpg";
import Travel from "../images/AVI_8307.jpg";


class HomePart02 extends Component {
    render() {
        return (
            <div className="HomePart02">
                <div className="row ">
                    <div className="col-sm-12 col-md-5 col-lg-5" style={{marginTop:"60px", color:"white"}}>
                        <h3 style={{color:"white"}}>WELCOME TO</h3>
                        <h1 className="welcome-txt-rf" style={{color:"white"}}>Rock Fort Hotels</h1>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-7" style={{marginTop:"90px", paddingRight:"100px", color:"white"}}>
                        <p>Rock fort Hotels is a hotel chain in down south, Sri Lanka. 
                            And its owned and managed by by GW Group in Galle. Our vision is provide luxury accommodation 
                            to our guests and add more values to tourism in Sri Lanka. Currently we have two hotels up and running. 
                            Rock fort hotel is a Ocean front property with 40 luxury rooms, Spa, Restaurant, Bar, 
                            pool and banquet hall available. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4" >
                        <div className="card">
                            <h3>ROCK FORT</h3>
                            <h1>Event</h1>
                            <img className="card-img" src={Event} alt=""/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="card">
                            <h3>ROCK FORT</h3>
                            <h1>Accomondation</h1>
                            <img className="card-img" src={Accomodation} alt=""/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="card">
                            <h3>ROCK FORT</h3>
                            <h1>Travel</h1>
                            <img className="card-img" src={Travel} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePart02
