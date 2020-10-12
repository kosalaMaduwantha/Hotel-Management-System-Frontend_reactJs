import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/navBar.css'

class NavBar extends React.Component{
    render(){
        return(
            
            <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/Employee_manage">RockFort Hotel</a>
            
            <ul class="navbar-nav px-3">
              <li class="nav-item text-nowrap">
                <a class="nav-link" href="#">Sign out</a>
              </li>
            </ul>
          </nav>

            
        )
    }
}

export default NavBar 