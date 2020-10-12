import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {withRouter} from 'react-router'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class DeleteConfirmation extends React.Component{
    constructor(props){
        super(props)



    }


    
    
    




    gotoMain = () => {
        this.props.history.push('/Employee_manage/NewTasks')
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
  
            
            <div class="table-responsive">
                <div style={{position:"relative", bottom:"20px"}}>

            <Modal.Dialog>
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                 </Modal.Header>

            <Modal.Body>
                 <p>Delete Succesfully.</p>
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

export default withRouter(DeleteConfirmation)