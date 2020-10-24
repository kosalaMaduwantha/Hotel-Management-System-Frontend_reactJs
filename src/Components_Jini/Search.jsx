import React from 'react'
import './css_j/check1.css';
import axios from 'axios'
import rockfort from "./css_j/rockfort.png"
import gradient from './css_j/gradient.jpg'
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal'
//import Button from 'react-bootstrap/Button'
import { Alert } from 'antd'
import { Button } from 'antd'




class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            outstandings:this.props.location.state.res,
            expenses:this.props.location.state.resEx,
            
        }

    }
    deleteExRow = (id,e) => {
    
        axios.delete(`http://127.0.0.1:8000/api/outstandingStatus/${id}/`)
    
        this.props.history.push({
          pathname:"/message3",
    
        })
      }
    
      deleteConRow = (id,e) => {
        
        axios.delete(`http://127.0.0.1:8000/api/confirmStatus/${id}/`)
    
        this.props.history.push({
          pathname:"/message3",
    
        })
      }
    render() {
 //DISPLAY SEARCH       
 const outstandings = this.state.outstandings

 const render_outstanding = (outstandings,index) => {
   return(
   <tr key={index}>
 
 <td>{outstandings.out_trans_id}</td>
 <td>{outstandings.out_date}</td>
 <td>{outstandings.out_time}</td>
<td>{outstandings.out_details}</td>
 <td>{outstandings.out_amount}</td>
 <td><Button onClick={(e) => this.deleteExRow(outstandings.id,e)} type="dashed">DELETE</Button></td>
 
   </tr>
   )
 }

const expense = this.state.expenses

const render_expenses = (expense,index) => {
return(
<tr key={index}>

<td>{expense.con_trans_id}</td>
<td>{expense.con_date}</td>
<td>{expense.con_time}</td>
<td>{expense.con_details}</td>
<td>{expense.con_amount}</td>
<td><Button onClick={(e) => this.deleteConRow(expense.id,e)} type="dashed">DELETE</Button></td>
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
        
    <div class="square">
    <h1 id="headingsquare"><br></br>SEARCH RESULT</h1>
        <i class="fas fa-search">&nbsp;&nbsp;</i><input type="text" value = {this.state.searchTerm} onChangeCapture={this.state.editSearchTerm}/>
         &nbsp;&nbsp;
        
       
       
    </div>
          <div class = "table">
          <div class="budgetTable">
          <div class = "table">
            <table id="customers">
              <thead>
            
              <tr> 
                <th>TRANSACTION ID</th>
                <th>DATE</th>
                <th>TIME</th>
                <th>DETAILS</th>
                <th>AMOUNT</th>
                <th>REMOVE</th>
              </tr>
              </thead>
              
            <tbody>
              {outstandings.map(render_outstanding)}
              {expense.map(render_expenses)}
            
            </tbody>
           
            </table>
          </div>
         
          </div>
          
          </div>
      
         
      
    </div>

   


        </div>
      )
    }
  }
  
  export default App;