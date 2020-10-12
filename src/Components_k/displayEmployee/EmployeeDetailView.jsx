import React from 'react'
import '../Styles/current_e.css'
import axios from 'axios'
import {Card} from 'antd'
import {withRouter} from 'react-router'





class EmployeeDetailView extends React.Component{
  constructor(props){
    super(props)
  }

    state = {
        employee: {}
    }

    componentDidMount(){
        const EmployeeId = this.props.match.params.employee_id
        axios.get(`http://127.0.0.1:8000/api/employee/${EmployeeId}`)
        .then(res => {
            this.setState({
                employee: res.data
            })
            console.log(res.data)
        })
        
    }

    render(){


        return(
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 class="h2" style={{color:'white'}}>Detail View</h1>
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
  
            
            <div class="table-responsive card-view">
            <Card >

              <lable style={{position:"relative",right:"450px"}}><h2>{this.state.employee.fname}</h2></lable>

                    <table class="table" style={{position:"relative", top:"20px"}}>

  <tbody style={{border:"1px black"}}>
    <tr>
      <th className="topic-view" scope="row">Employee's First name</th>
      <td>{this.state.employee.fname}</td>

    </tr>
    <tr>
      <th className="topic-view" scope="row">Employee's Last name</th>
      <td>{this.state.employee.lname}</td>

    </tr>
    <tr>
      <th className="topic-view" scope="row">Employee's gender</th>
      <td>{this.state.employee.gender}</td>

    </tr>
    <tr>
      <th className="topic-view" scope="row">Employee's NIC</th>
      <td>{this.state.employee.nic}</td>

    </tr>
    <tr>
      <th className="topic-view" scope="row">Employee's birth_date</th>
      <td>{this.state.employee.dob}</td>

    </tr>
    <tr>
      <th className="topic-view" scope="row">Employee's Joined date</th>
      <td>{this.state.employee.joined_date}</td>

    </tr>
    <tr>
      <th className="topic-view" scope="row">Employee's Department</th>
      <td>{this.state.employee.department}</td>

    </tr>
    <tr>
      <th className="topic-view" scope="row">Employee's Designation</th>
      <td>{this.state.employee.designation}</td>

    </tr>
  </tbody>
</table>

                    
            </Card>
            </div>
          </main>

        )
    }
}

export default withRouter(EmployeeDetailView)