import React, { Component } from 'react'
import SocialButtons from './SocialButtons'
import HomePart01 from './HomePart01'
import HomePart02 from './HomePart02'
import HomePart03 from './HomePart03'
import Footer01 from './Footer01'

class HomeTemplate extends Component {
    render() {
        return (
            <div style={{overflowX:"hidden"}}>
                <SocialButtons/>
                <HomePart01/>
                <HomePart02/>
                <HomePart03/>
                <Footer01/>
                
            </div>
        )
    }
}

export default HomeTemplate
