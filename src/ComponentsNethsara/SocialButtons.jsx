import React, { Component } from 'react'
import './css/SocialButtons.css';

class SocialButtons extends Component {

    render() {
        return (
            <div className="sc-btns">
                <div className="fb-btn">
                    <span><i class="fab fa-facebook-f"></i></span>
                </div>
                <div className="fb-btn">
                    <span><i class="fab fa-instagram"></i></span>
                </div>
            </div>
        );
    }
}
 
export default SocialButtons;