import React from 'react'
import './css_j/check1.css';
import axios from 'axios'
import rockfort from "./css_j/rockfort.png"
import gradient from './css_j/gradient.jpg'
import ReactDOM from 'react-dom';
import { Button } from 'antd'
import {Pie, Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      outstandings:[],
      expenses:[],
      startDate:"2018-09-20",
      endDate:"2019-05-15",
      OutTotal:null,
      ConTotal:null
    
    }

 
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
 
    
      <div class="card">
  
      </div>
      
    </div>

   


        </div>
      )
    }
  }
  
  export default App;