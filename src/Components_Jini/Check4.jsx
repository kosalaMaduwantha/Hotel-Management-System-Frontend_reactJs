import React from 'react'
import './css_j/check1.css';

import rockfort from "./css_j/rockfort.png"
import gradient from './css_j/gradient.jpg'
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal'
//import Button from 'react-bootstrap/Button'
import { Alert } from 'antd'
import { Button } from 'antd'




class App extends React.Component {

  gotoMain = () => {
    this.props.history.push('/reports')
}
    render() {
      return (
        <div className="App">
           <input type="checkbox" id="check"/>
  
    <header>
      <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div class="left_area">
      <div class="right_area">
        <div class ="logout"></div>
        <a href="#" class="logout_btn">Logout</a>
      </div>
      </div>
    
    </header>
  
   
    
    <div class="sidebar">
      <div class="profile_info">
        <img src={rockfort} class="profile_image"/>
        <h6>Saman Weerasiri</h6>
        <h4>Finance Manager</h4>
      </div>
      <a href="/budget"><i class="fas fa-balance-scale-left"></i><span>Budget</span></a>
      <a href="/outstandings"><i class="fas fa-table"></i><span>Outstandings</span></a>
      <a href="/confirmation"><i class="fas fa-check-double"></i><span>Confirmations</span></a>
      <a href="/reports"><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i><span>Transaction History</span></a>
    </div>
 
    
    <div class="content">
        
      
      <div >
      <Modal.Dialog>
                <Modal.Header closeButton>
                 </Modal.Header>

            <Modal.Body>
            <div>
            <Alert message="Successfully Deleted" type="info" showIcon />
            <Alert
                description="you have successfully deleted the transcation "
                type="info"
                showIcon
                />
    
  </div>

             </Modal.Body>

        <Modal.Footer>
             <Button onClick={this.gotoMain} variant="secondary" type="primary">OK</Button>
             
         </Modal.Footer>
        </Modal.Dialog>
      </div>
      
    </div>

   


        </div>
      )
    }
  }
  
  export default App;