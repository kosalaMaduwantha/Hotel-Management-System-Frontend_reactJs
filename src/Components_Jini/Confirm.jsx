import React, {Component} from 'react'
import './css_j/check1.css';
import rockfort from "./css_j/rockfort.png"
import gradient from "./css_j/gradient.jpg"
import ReactDOM from 'react-dom';
import axios from 'axios'
import { Button } from 'antd'




class Outstandings extends React.Component {
  constructor(){
    super();
    this.state = {
      confirm:[]
    }
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/confirmation/')
    .then(res => {
        this.setState({
          confirm: res.data
        })
        console.log(this.state.confirm)
    })
  }

  updateRow = (confirm,e) => {
    
    axios.put(`http://127.0.0.1:8000/api/confirmation/${confirm.id}/`, {
      id:confirm.id,
      con_date:confirm.con_date,
      con_time:confirm.con_time,
      con_details:confirm.con_details,
      con_trans_id:confirm.con_trans_id,
      con_amount:confirm.con_amount,
      con_status:"Confirmed"
    })

    this.props.history.push({
      pathname:"/message2",

    })
  }

    render() {

const confirm = this.state.confirm

const render_confirm = (confirm,index) => {
  return(
  <tr key={index}>

    <td>{confirm.con_date}</td>
    <td>{confirm.con_time}</td>
    <td>{confirm.con_details}</td>
    <td>{confirm.con_trans_id}</td>
    <td>{confirm.con_amount}</td>
    <td>{confirm.con_status}</td>
    <td><Button onClick={(e) => this.updateRow(confirm,e)} type="primary" >confirm</Button></td>


  </tr>
  )
}
      return (
        <div className="App">
           <input type="checkbox" id="check"/>
  
    <header>
      <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div class="left_area">
        
      </div>
      <div class="right_area">
        <a href="#" class="logout_btn">Logout</a>
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
    <div class="square">
        <h1 id="headingsquare"><br></br><br></br>CONFIRMATIONS</h1>
    </div>
          <div class = "table">
            <table id="customers">
              <thead>
            <tr>
                <th>DATE</th>
                <th>TIME</th>
                <th>DETAILS</th>
                <th>TRANS ID</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
                <th>UPDATE</th>
            </tr>
            </thead>
            <tbody>
          
            {confirm.map(render_confirm)}
            
            </tbody>
           
            </table>
          </div>
      
      
    </div>

   


        </div>
      )
    }
  }
  
  export default Outstandings;