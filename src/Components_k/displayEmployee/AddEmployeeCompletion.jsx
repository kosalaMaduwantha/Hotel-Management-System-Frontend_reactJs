import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {withRouter} from 'react-router'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class AddEmployeeCompletion extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            emplo_id:this.props.location.state.emp_id,
            emp_phone:this.props.location.state.empPhone
        }

    }

    componentDidMount(props){



        let isValid = true

        if(isValid){
    
    
    
    
            axios.post('http://127.0.0.1:8000/api/phone/', {
                employee_phone:this.state.emp_phone,
                 empID:this.state.emplo_id,
                 
             })
             .then(res => console.log(res))


            
    
    
              }

       

    }





    gotoMain = () => {
        this.props.history.push('/Employee_manage/employee')
    }


 

    render(){
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
  
            <canvas class="my-4" id="myChart" width="900" height="180"></canvas>
  
            <h2>Section title</h2>
            <div class="table-responsive">
                <div style={{position:"relative", bottom:"20px"}}>

            <Modal.Dialog>
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                 </Modal.Header>

            <Modal.Body>
                 <p>Employee added succesfully.</p>
             </Modal.Body>

        <Modal.Footer>
             <Button onClick={this.gotoMain} variant="secondary">OK</Button>
             
         </Modal.Footer>
        </Modal.Dialog>

        </div>

            </div>
          </main>

            
        )
    }
}

export default withRouter(AddEmployeeCompletion)