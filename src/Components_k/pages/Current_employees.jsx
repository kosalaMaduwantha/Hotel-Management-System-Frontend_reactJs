import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/navBar.css'
import EmployeeListView from '../displayEmployee/EmployeeListView.jsx'
import '../Styles/current_e.css'
import {withRouter} from 'react-router'

class Current_employees extends React.Component{
    render(){
        return(
            
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 class="h2" style={{color:'white'}}>Current Employees</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                  <button class="btn btn-sm btn-outline-secondary"></button>
                  <button class="btn btn-sm btn-outline-secondary"></button>
                </div>
                <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                  
                </button>
              </div>
            </div>
  
            <canvas class="my-4" id="myChart" width="900" height="380"></canvas>
  
            
            <div class="table-responsive employee-view-kosala">
                <EmployeeListView />
            </div>
          </main>

            
        )
    }
}

export default withRouter(Current_employees)