import React from 'react'
import './css_j/check1.css';
import rockfort from "./css_j/rockfort.png"
import gradient from "./css_j/gradient.jpg"
import ReactDOM from 'react-dom';
import axios from 'axios'
import { DatePicker, Space } from 'antd';
import { Button } from 'antd'



class Outstandings extends React.Component {
  constructor(){
    super();
    this.state = {
      outstandings:[],
      expenses:[],
      startDate:"2000-01-01",
      endDate:"2020-01-01",
      Results:[],
      ExResults:[]
    }

    this.changeStart = this.changeStart.bind(this)
    this.changeEnd = this.changeEnd.bind(this)
  }



  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/outstandingStatus/Confirmed/')
    .then(res => {
        this.setState({
          outstandings: res.data
        })
    
       


       
    })

    axios.get('http://127.0.0.1:8000/api/confirmStatus/Confirmed/')
    .then(res => {
        this.setState({
          expenses: res.data
        })



      })

   

  }

searchPass = (e) => {
  e.preventDefault()


  let results = this.state.outstandings.filter((e) => {
    return e.out_date > this.state.startDate && e.out_date <= this.state.endDate
  })
 
  let expenRes = this.state.expenses.filter((e) => {
    return e.con_date > this.state.startDate && e.con_date <= this.state.endDate
  })

  console.log(results)

  this.props.history.push({
    pathname:"/result",
    state:{
        res:results,
        resEx:expenRes,
        sDate:this.state.startDate,
        eDate:this.state.endDate
    }
  })
}

FormPass = (e) => {
  this.props.history.push({
    pathname:"/utility",

  })
} 



changeStart = (e) => {
  this.setState({
    startDate:e.target.value
  })
}

changeEnd = (e) => {
  this.setState({
    endDate:e.target.value
  })
}




    render() {


      const { RangePicker } = DatePicker;

const outstanding = this.state.outstandings

const render_outstanding = (outstanding,index) => {
  return(
  <tr key={index}>

  <td>{outstanding.out_trans_id}</td>
    <td>{outstanding.out_date}</td>
    <td>{outstanding.out_details}</td>
    <td>{outstanding.out_amount}</td>
  </tr>
  )
}

const expense = this.state.expenses

const render_expenses = (expense,index) => {
  return(
  <tr key={index}>

  <td>{expense.con_trans_id}</td>
    <td>{expense.con_date}</td>
    <td>{expense.con_details}</td>
    <td>{expense.con_amount}</td>
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
        <h1 id="headingsquare"><br></br>BUDGET</h1>
        <>
        FROM:  <input type = "Date" value={this.state.startDate} onChangeCapture={this.changeStart}/> TO: <input type = "Date"  value={this.state.endDate} onChangeCapture={this.changeEnd}/>
            <Button type="primary" onClick={(e) => this.searchPass(e)}>SELECT</Button><br/><br/>
            <Button onClick={(e) => this.FormPass(e)} style={{position:'relative',left:"500px" }}>+Add Payment</Button>
            
        </>
       
    </div>
        <div class="budgetTable">
          <div class = "table">
            <table id="customers3">
              <thead>
              <tr> 
                <th colspan="4">EXPENSES</th>
               
              </tr>
              <tr> 
                <th>TRANSACTION ID</th>
                <th>DATE</th>
                <th>DETAILS</th>
                <th>AMOUNT</th>

              </tr>
              </thead>
              
            <tbody>
              {outstanding.map(render_outstanding)}
            
            </tbody>
           
            </table>
            <table id="customers2">
              <thead>
              <tr> 
           
                <th colspan = "4">INCOME </th>
               
              </tr>
              <tr> 
                <th>TRANSACTION ID</th>
                <th>DATE</th>
                <th>DETAILS</th>
                <th>AMOUNT</th>

              </tr>
              </thead>
              
            <tbody>
            
             {expense.map(render_expenses)}
          
            
            </tbody>
           
            </table>
          </div>
          </div>
      
    </div>

   


        </div>
      )
    }
  }
  
  export default Outstandings;