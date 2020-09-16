import React, { Component } from 'react'
import './css/HomePart03.css';
import Room1 from '../images/AVI_8742.jpg'
import Room2 from '../images/AVI_8675.jpg'
import Car from '../images/AVI_8307.jpg'
import Hall from '../images/IMG_4390.jpg'
import Hotel from '../images/AVI_8343.jpg'
import Hotel2 from '../images/AVI_8527.jpg'

class HomePart03 extends Component {
    render() {
        return (
            <div className="HomePart03">
                <div  style={{paddingTop:"50px"}} >
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <img src={Room1} alt="" style={{width:"400px", marginLeft:"30px"}}/>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <img src={Hall} alt="" style={{width:"400px", marginLeft:"30px"}}/>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <img src={Hotel} alt="" style={{width:"400px", marginLeft:"30px"}}/>
                        </div>
                    </div>

                    <div className="row" style={{marginTop:"20px"}}>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <img src={Car} alt="" style={{width:"400px", marginLeft:"30px"}}/>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <img src={Room2} alt="" style={{width:"400px", marginLeft:"30px"}}/>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <img src={Hotel2} alt="" style={{width:"400px", marginLeft:"30px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePart03
