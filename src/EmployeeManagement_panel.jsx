import React from 'react'
import NavBar from './Components_k/pages/NavBar.jsx'
import SideBar from './Components_k/pages/SideBar.jsx'
import './Components_k/Styles/panel.css'
import DashBoard from './Components_k/pages/DashBoard.jsx'
import {Switch,Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Register_Employee from './Components_k/pages/Register_Employee.jsx'
import Current_employees from './Components_k/pages/Current_employees.jsx'
import EmployeeDetailView from './Components_k/displayEmployee/EmployeeDetailView'
import Departments from './Components_k/pages/Departments.jsx'
import UpdateEmployee from './Components_k/pages/UpdateEmployee.jsx'
import NewTasks from './Components_k/Task/NewTasks.jsx'
import AssingedTasks from './Components_k/Task/AssingedTasks.jsx'
import CompletedTasks from './Components_k/Task/CompletedTasks.jsx'
import TaskCompletion from './Components_k/Task/TaskCompletion' 
import AddEmployeeCompletion from './Components_k/displayEmployee/AddEmployeeCompletion.jsx'
import DeleteCompletion from './Components_k/Task/DeleteConfirmation.jsx'
import Task_Employee from './Components_k/Task/Task_Employee.jsx'


class EmployeeManagement_panel extends React.Component{
 constructor(){
    super();
    this.state = {
        drawerOpen: false
    };
 }
    render(){



     return(
        
          <div className="adminpanel-body-kosala">
            <NavBar />

    <div class="container-fluid">
      <div class="row">
            <SideBar />

          <Switch>
            <Route exact path='/Employee_manage/' component={Current_employees} />
            <Route path='/Employee_manage/employee' component={Register_Employee} />
            <Route path='/Employee_manage/Current_employees'  component={Current_employees} />
            <Route path='/Employee_manage/update/:employee_id' component={UpdateEmployee} />
            <Route path='/Employee_manage/Departments/' component={Departments} />
            <Route path='/Employee_manage/NewTasks' component={NewTasks} />
            <Route path="/Employee_manage/AssingedTasks" component={AssingedTasks} />
            <Route path="/Employee_manage/CompletedTasks" component={CompletedTasks} />
            <Route path="/Employee_manage/confirmationTask" component={TaskCompletion} />
            <Route path="/Employee_manage/addEmployeeCompletion" component={AddEmployeeCompletion} />
            <Route path="/Employee_manage/DeleteCompletion" component={DeleteCompletion} />
            <Route path="/Employee_manage/Task_Employee" component={Task_Employee} />
            <Route path='/Employee_manage/:employee_id' component={EmployeeDetailView} />
            
            
            
          </Switch>

          </div>
          </div>

</div>
        
        )
    }
}

export default EmployeeManagement_panel