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
      searchTerm: '',

      
    }

  }

  editSearchTerm = (e) =>{
    
    this.setState({searchTerm: e.target.value})
  }

  searchHistory = (e) =>{

    let SearchOutRes = this.state.outstandings.filter((Outstandings) =>{
      return (Outstandings.out_details.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    })

    let SearchExRes = this.state.expenses.filter((expenses) =>{
      return ( expenses.con_details.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    })

    console.log(this.state.outstandings)
    console.log(SearchOutRes)

    this.props.history.push({
      pathname:"/search",
      state:{
          res:SearchOutRes,
          resEx:SearchExRes
      }
    })
     
  }


  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/outstandingStatus/Confirmed/')
    .then(res => {
        this.setState({
          outstandings: res.data
        })

        console.log(this.state.outstandings)
    })

    axios.get('http://127.0.0.1:8000/api/confirmStatus/Confirmed/')
    .then(res => {
        this.setState({
          expenses: res.data
        })

     

      })

   

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

  logout = ()=>{
    alert("you have been logged out successfully")
    this.props.history.push({
      pathname:"/"
  
    })
  }



    render() {
      const outstandings = this.state.outstandings

      const render_outstanding = (outstandings,index) => {
        return(
        <tr key={index}>
      
      <td>{outstandings.out_trans_id}</td>
      <td>{outstandings.out_date}</td>
      <td>{outstandings.out_time}</td>
     <td>{outstandings.out_details}</td>
      <td>{outstandings.out_amount}</td>
      
      
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
        <a href="#" class="logout_btn" >Logout</a>
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
        <h1 id="headingsquare"><br></br>TRANSACTION HISTORY</h1>
        <i class="fas fa-search">&nbsp;&nbsp;</i><input type="text" value = {this.state.searchTerm} onChange={this.editSearchTerm}/>
         &nbsp;&nbsp;
        <Button onClick={(e) => this.searchHistory(e)} type = "primary">Search</Button> 
        
    </div>
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
      )
    }
  }
  
  export default Outstandings;