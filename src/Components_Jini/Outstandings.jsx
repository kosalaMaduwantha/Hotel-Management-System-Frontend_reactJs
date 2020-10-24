import React from 'react'
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
      outstandings:[]
    }
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/outstanding/')
    .then(res => {
        this.setState({
          outstandings: res.data
        })
        console.log(this.state.outstandings)
    })
  }

  updateRow = (outstanding,e) => {
    
    axios.put(`http://127.0.0.1:8000/api/outstanding/${outstanding.id}/`, {
      id:outstanding.id,
      out_date:outstanding.out_date,
      out_time:outstanding.out_time,
      out_details:outstanding.out_details,
      out_trans_id:outstanding.out_trans_id,
      out_amount:outstanding.out_amount,
      out_status:"Confirmed"
    })

    this.props.history.push({
      pathname:"/message",

    })
  }

    render() {

const outstanding = this.state.outstandings

const render_outstanding = (outstanding,index) => {
  return(
  <tr key={index}>

    <td>{outstanding.out_date}</td>
    <td>{outstanding.out_time}</td>
    <td>{outstanding.out_details}</td>
    <td>{outstanding.out_trans_id}</td>
    <td>{outstanding.out_amount}</td>
    <td >{outstanding.out_status}</td>
    <td><Button onClick={(e) => this.updateRow(outstanding,e)} type = "primary" >confirm</Button></td>


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
        <h1 id="headingsquare"><br></br><br></br>OUTSTANDINGS</h1>
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
          
            {outstanding.map(render_outstanding)}
            
            </tbody>
           
            </table>
          </div>
      
      
    </div>

   


        </div>
      )
    }
  }
  
  export default Outstandings;