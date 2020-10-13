import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { Link } from "react-router-dom";
import Reserve from '../images/reserve.png'
import bg from '../images/AVI_8343.jpg'

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { bg } + ")"
  };

export class ReservationSuccess extends Component {
    render() {
        return (
            <div style={sectionStyle}>
                
                <img src={Reserve} alt=""  style={{width:"600px", height:"280px", paddingTop:"60px", marginBottom:"20px"}}/>
                <Result
                    status="success"
                    title="Your reservation is successfully created!😎🙌"
                    subTitle="Thank you for choosing us!. You'll be resieve an email for your email account. Get in touch with our web site for offers."
                    extra={[
                        <Button type="primary" key="console"><Link to="/">Go To Home</Link></Button>,
                        <Button key="buy"><Link to="/reservation">Make another Reservation</Link></Button>,
                    ]}
                />
            </div>
        )
    }
}

export default ReservationSuccess
