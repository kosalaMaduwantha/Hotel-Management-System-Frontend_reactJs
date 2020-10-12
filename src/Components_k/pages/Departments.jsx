import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/navBar.css'
import Kitchen from '../DepartmentTypes/Kitchen.jsx'
import FrontOffice from '../DepartmentTypes/FrontOffice.jsx'
import Security from '../DepartmentTypes/Security.jsx'
import Cleaning from '../DepartmentTypes/Cleaning.jsx'
import '../Styles/current_e.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch,Route} from 'react-router-dom'
import {withRouter} from 'react-router'

    


class Departments extends React.Component{

  render(){


       
        return(
            
            
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 class="h2">Front Office</h1>
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
        <div class="table-responsive employee-view">

            <canvas class="my-4 department-canvas" id="myChart" width="900" height="380"></canvas>
            <Switch>
            <Route exact path="/Employee_manage/Departments/FrontOffice" component={FrontOffice} />
                <Route  path="/Employee_manage/Departments/Kitchen" component={Kitchen} />
                <Route  path="/Employee_manage/Departments/Security" component={Security} />
                <Route  path="/Employee_manage/Departments/Cleaning" component={Cleaning} />
                

            </Switch>
            

              </div>  
          </main>

          

            
)
        }

}

export default withRouter(Departments)