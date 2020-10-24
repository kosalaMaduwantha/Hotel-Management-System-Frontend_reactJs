import React from 'react'
import './css_j/check1.css';

import rockfort from "./css_j/rockfort.png"
import gradient from './css_j/gradient.jpg'
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal'
import Axios from 'axios';
import { text } from '@fortawesome/fontawesome-svg-core';
//import Button from 'react-bootstrap/Button'





class App extends React.Component {
    constructor(){
        super();
        this.state={
            transID:'',
            date:'',
            detail:'',
            amount:''
            
        }
        this.changeTransID = this.changeTransID.bind(this)
        this.changeDate = this.changeDate.bind(this)
        this.changeDetail = this.changeDetail.bind(this)
        this.changeAmount = this.changeAmount.bind(this)

        this.SubmitForm = this.SubmitForm.bind(this)
    }

    changeTransID = (e) => {
        this.setState({
            transID:e.target.value
        })
    }
     changeDate = (e) => {
        this.setState({
            date:e.target.value
        })
    }
    changeDetail = (e) => {
        this.setState({
            detail:e.target.value
        })
    }
    changeAmount = (e) => {
        this.setState({
            amount:e.target.value
        })
    }
    
    formValidation = () =>{
      const {amount,} = this.state;
      let isValid = true;

      if(!Number(amount)){
        alert("The amount must be a Number- all in LKR")
        isValid = false
      } 
      else{
        isValid = true
      }
      return isValid;
    }

    SubmitForm = (e) => {
        e.preventDefault()

        const isValid = this.formValidation()

        let duration = new Date()
        let time = duration.getHours() + ':' + duration.getMinutes() + ':' + duration.getSeconds() 

        if(isValid){
        Axios.post('http://127.0.0.1:8000/api/confirmation/', {
            con_trans_id:this.state.transID,
            con_date:this.state.date,
            con_time:time,
            con_details:this.state.detail,
            con_amount:this.state.amount,
            con_status:'Confirmed'
        })
        .then(res=>{console.log(res)})

        alert("Insertion has been made successfully")

        this.props.history.push({
            pathname:"/budget"
        
          })

    }
    this.setState({
    
      amount:''
    })
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

        <h3>Add Utility Bill</h3>
     <div class="form">   
    <form method="post" onSubmit={this.SubmitForm} >
        
   <input value={this.state.transID} onChange={this.changeTransID} type="text" id="transId" name="transID" placeholder="Transaction ID:" required='TRUE'/>
  
   <input value={this.state.date} onChange={this.changeDate} type="date" id="date" name="date" placeholder="Date: " required='TRUE'/>
   <select value={this.state.detail} onChange={this.changeDetail} id="transId" name="detail" >
   <option value="select ">select bill type</option>
     <option value="Electricity ">Electricity</option>
     <option value="Water ">Water</option>
       <option value="Telecommunication">Telecommunication</option>
   </select>
   
    <input value={this.state.amount} onChange={this.changeAmount} type="text" id="transId" name="amount" placeholder="Amount:" required='TRUE' />
 
   <input type="submit" value="Submit" id="submit"/>
 </form>
 </div>

   


    </div>
    </div>
      )
    }
  }
  
  export default App;