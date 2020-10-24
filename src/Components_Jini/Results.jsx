import React, {Component,ReactPropTypes} from 'react'
import './css_j/check1.css';
import rockfort from "./css_j/rockfort.png"
import gradient from "./css_j/gradient.jpg"
import ReactDOM from 'react-dom';
import axios from 'axios'
import { DatePicker, Space } from 'antd';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from 'antd'



class Outstandings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      outstandings:this.props.location.state.res,
      expenses:this.props.location.state.resEx,
      OutTotal:null,
      ConTotal:null,
      stDate:this.props.location.state.sDate,
      enDate:this.props.location.state.eDate,

     
   

    }


  }


componentDidMount(){

  let out = this.state.outstandings
  let con = this.state.expenses

  let i;
  let totalOut = 0;
  let totalCon = 0;
   
  out.forEach(function (arrayItem) {
    totalOut = totalOut + arrayItem.out_amount
   
});

  con.forEach(function (arrayItem) {
    totalCon = totalCon +arrayItem.con_amount
  });

  console.log(totalCon)

  this.setState({
    OutTotal:totalOut,
    ConTotal:totalCon
  })

}
    render() {
         //reoprtgenerate
   const _exportPdf = () => {

    html2canvas(document.querySelector("#capture")).then(canvas => {
      // document.body.appendChild(canvas);  // if you want see your screenshot in body.
       const imgData = canvas.toDataURL('image/png');
       const pdf = new jsPDF();
       pdf.addImage(imgData, 'PNG', 10,10,180,150);
       pdf.save("download.pdf"); 
   });

}

      const total_out = this.state.OutTotal
      const total_con = this.state.ConTotal

      const diff = total_con - total_out;

      const rend = (differ) => {
       
        if(differ < 0){
          return(
          <h3> Loss of: {differ}</h3>
          )

        }
        else{
          return(
          <h3> Profit of:{differ}</h3>
          )
          }
      }



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
        <div className="App" >
          <div id="capture"> 
    <div class="border">
         <img src={rockfort} class="profile_image"/>
        <h1 id="headingBorder"><br></br>BUDGET REPORT</h1>
        <>
        FROM&nbsp;&nbsp; <input type = "text" value={this.state.stDate} readOnly = 'TRUE' id = "range"/> &nbsp;&nbsp;&nbsp;&nbsp;
        TO&nbsp;&nbsp;<input type = "Text"  value={this.state.enDate}  readOnly = 'TRUE'  id = "range"/>  
        </>
       
    </div>
    
    
          <div class = "table">
            <table id="budgetTable1">
              <thead>
              <tr> 
                <th colspan="4">EXPENSE</th>
               
              </tr>
              <tr id="tx"> 
                <th>TRANSACTION ID</th>
                <th>DATE</th>
                <th>DETAILS</th>
                <th>AMOUNT</th>

              </tr>
              </thead>
              
            <tbody>
              {outstanding.map(render_outstanding)}
             
              <tr>
                <td id="tot">Total Amount</td>
               <td id="tot">{total_out}</td>
              </tr>
            
            </tbody>
           
            </table>
           
            <table id="budgetTable2">
              <thead>
              <tr> 
           
                <th colspan = "4">INCOME</th>
               
              </tr>
              <tr  id="tx"> 
                <th>TRANSACTION ID</th>
                <th>DATE</th>
                <th>DETAILS</th>
                <th>AMOUNT</th>

              </tr>
              </thead>
              
            <tbody>
            {expense.map(render_expenses)}

            <tr>
               <td id="tot">Total Amount</td>
             <td id="tot">{total_con}</td>
                 </tr>   

            </tbody>
           
            </table>
            <hr/>
                        
            
          </div>
      
          <div class="diff">
            
            {rend(diff)}
          </div>
        
          </div>
          <Button onClick={_exportPdf} type="primary"><i class="fas fa-download"></i>Download Report</Button>
        
      </div>
     
      )
    }
  }
  
  export default Outstandings;