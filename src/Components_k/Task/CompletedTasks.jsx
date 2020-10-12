import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/navBar.css'
import {withRouter} from 'react-router'
import axios from 'axios'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import * as ReactBootstrap from 'react-bootstrap'
import '../Styles/panel.css'
import Button from '@material-ui/core/Button';

class CompletedTasks extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            
            employeeTasks:[],
            searchItem:"",
        }

        this.changeSearch = this.changeSearch.bind(this)
        this.search = this.search.bind(this)

    }

    renderTasks = () => {
        axios.get('http://127.0.0.1:8000/api/taskC/Completed')
        .then(res => {
            this.setState({
                employeeTasks:res.data
            })
        })
        
    }

    deleteRow = (id,e) => {
      e.preventDefault();
  
      
      axios.delete('http://127.0.0.1:8000/api/task' + `/${id}/`)
          .then(res => {
             
              this.props.history.push('/Employee_manage/DeleteCompletion')
          });
  
         
  }

  changeSearch = (e) => {
      this.setState({
        searchItem:e.target.value
      })
  }

  search = (e) => {
    axios.get(`http://127.0.0.1:8000/api/employeeName/${this.state.searchItem}/`)
    .then(res => {
        this.setState({
          employee_id:res.data.empID,
          
        })

       

        console.log(this.state.employee_id)

        this.props.history.push({
          pathname:"/Employee_manage/Task_Employee",
          state:{
              emp:this.state.employee_id
          }
        })

    
        
    })
  }

    componentDidMount(){

        this.renderTasks()

    }



    render(){


        
const employeeT = this.state.employeeTasks

const render_employee = (employeeT,index) => {
  return(
  <tr key={index}>

    <td>{employeeT.emp_name}</td>
    <td>{employeeT.task}</td>
    <td>{employeeT.time_duration}</td>
    <td>{employeeT.status}</td>
    
    <td><Button onClick={(e) => this.deleteRow(employeeT.taskID, e) }>Delete</Button></td>

  </tr>
  )
}
  


        return(
            
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                  <button class="btn btn-sm btn-outline-secondary">Share</button>
                  <button class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>
  
            
  
            
            <div class="table-responsive">

            <canvas class="my-4" id="myChart" width="900" height="380"></canvas>
            <div className="table-body-style">

<label className="topic-department"><h3>COMPLETED TASKS</h3></label>

    <ReactBootstrap.Table striped bordered hover  >
      <thead>
        <tr>
          <td>Employee Name</td>
          <td>Employee Task</td>
          <td>NO hours</td>
          <td>Status</td>
          <td>Edit</td>

        </tr>
      </thead>
      <tbody>
          {employeeT.map(render_employee)}
      </tbody>

    </ReactBootstrap.Table>

    </div>

    <label style={{position:"absolute", right:"965px", bottom:"340px"}}>SEARCH EMPLOYEE</label>
    <input type="test" value={this.searchItem} onChange={this.changeSearch} style={{position:"relative", right:"430px", bottom:"320px"}} />
    <button style={{position:"relative", right:"430px", bottom:"320px"}} onClick={this.search}>Search</button>
            </div>
          </main>

            
        )
    }
}

export default withRouter(CompletedTasks)