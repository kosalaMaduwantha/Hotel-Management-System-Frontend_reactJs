import React from 'react';
import { AddBox, ArrowDownward } from "@material-ui/icons";
import MaterialTable, { MTableToolbar } from 'material-table';
import {withRouter} from 'react-router'
import axios from 'axios'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import * as ReactBootstrap from 'react-bootstrap'
import '../Styles/panel.css'










class Cleaning extends React.Component {

  state = {
    employees_depart: []
}


componentDidMount(){
  axios.get('http://127.0.0.1:8000/api/employeeD/cleaning')
  .then(res => {
      this.setState({
          employees_depart: res.data
      })
      console.log(this.state.employees_depart)
  })
}




  render(){

const employee = this.state.employees_depart

const render_employee = (employee,index) => {
  return(
  <tr key={index}>

    <td>{employee.fname}</td>
    <td>{employee.lname}</td>
    <td>{employee.designation}</td>
    <td>{employee.department}</td>

  </tr>
  )
}
  
  return (
<>

<div className="table-body-style">

<label className="topic-department"><h3>CLEANING</h3></label>

    <ReactBootstrap.Table striped bordered hover  >
      <thead>
        <tr>
          <td>employee fname</td>
          <td>employee lame</td>
          <td>employee designation</td>
          <td>employee department</td>
        </tr>
      </thead>
      <tbody>
          {employee.map(render_employee)}
      </tbody>

    </ReactBootstrap.Table>

    </div>


</>
  );
}
}

export default withRouter(Cleaning)
