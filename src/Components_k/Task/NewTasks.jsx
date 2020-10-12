import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/panel.css'
import {withRouter} from 'react-router'
import axios from 'axios'
import Modal from '../modals/Modal.jsx'
import Button from '@material-ui/core/Button';



class NewTasks extends React.Component{
  constructor(){
    super()

    this.state = {
         
        
      task:"",
      description:"",
      time_duration:"",
      employee_name:"",
      employee_id:"",
   
     
  }

      
  

    this.onChangeTask = this.onChangeTask.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeTime = this.onChangeTime.bind(this)
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this)

    this.onSubmit = this.onSubmit.bind(this)
  }


  onChangeTask = (e) => {

    this.setState({
      task:e.target.value
    })

  }

  onChangeDescription = (e) => {
    this.setState({
      description:e.target.value
    })
  }

  onChangeTime = (e) => {
    this.setState({
      time_duration:e.target.value
    })
  }

  onChangeEmployeeName = (e) => {
    this.setState({
      employee_name:e.target.value
    })
  }

  




  formValidation = () => {
    const {NIC,telephone,first_name,last_name,designation,} = this.state;
    let isValid = true;
  
  if(Number(first_name)){
    alert("firs name field should be consist of letters")
    isValid = false
  }
    else if(NIC.length < 10){
      alert(" NIC should be in 10 digits  length")
      isValid = false;
    }
    else if(NIC.length > 10){
      alert(" NIC should be in  10 digits length")
      isValid = false;
    }
    else if(!NIC.includes("V")){
      alert(" NIC should end with V letter")
      isValid = false
    }
    else if(telephone.length > 10){
      alert("Telephone no should be in 10 digit length")
      isValid = false
    }
  
    else if(telephone.length < 10){
      alert("Telephone no should be in 10 digit length")
      isValid = false
    }
   else if(!Number(telephone)){
      alert("Telephone number should only consist of numbers")
      isValid = false
    }
    else{
      isValid = true
    }
  
    
    
    return isValid;
  }

  
  




  onSubmit(e) {
    
    e.preventDefault()

  

    axios.get(`http://127.0.0.1:8000/api/employeeName/${this.state.employee_name}/`)
    .then(res => {
        this.setState({
          employee_id:res.data.empID,
          
        })

        let employee = this.state

        console.log(this.state.employee_id)

        this.props.history.push({
          pathname:"/Employee_manage/confirmationTask",
          state:{
              emp:employee
          }
        })

    
        
    })



           

    this.setState({
      
      first_name:'',
      last_name:'',
      gender:'',
      birth_date:'',
      NIC:'',
      address:'',
      telephone:'',
      edepartment:'',
      designation:'',
      eduqual:'',
      profqual:'',

    })



  


  }




    render(){

        return(


            
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 class="h2">TASKS</h1>
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
  
            <canvas class="my-4" id="myChart" width="900" height="380"></canvas>
  
            <h2>Section title</h2>
            <div class="table-responsive" style={{background:"white", height:"600px", position:"relative", bottom:"350px"}}>
                <div className="task-form" style={{background:"white", margin:"50px"}}>

            <form onSubmit={this.onSubmit} method="post">
  <div class="form-group " >
    <label for="exampleFormControlInput1" ><h6 className="input-text">Task</h6></label>
    <input style={{width:"100%"}}  type="text" class="form-control" id="exampleFormControlInput1" value={this.state.task} onChange={this.onChangeTask} placeholder="name@example.com"/>
  </div>


  <div class="form-group ">
    <label for="exampleFormControlTextarea1" ><h6 className="input-text">Description</h6></label>
    <textarea style={{width:"100%"}} class="form-control" value={this.state.description} onChange={this.onChangeDescription} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="form-group ">
    <label for="exampleFormControlInput1" ><h6 className="input-text">Time duration</h6></label>
    <input style={{width:"100%"}} type="text" class="form-control" id="exampleFormControlInput1" value={this.state.time_duration} onChange={this.onChangeTime} placeholder="name@example.com"/>
  </div>

  <div class="form-group ">
    <label for="exampleFormControlInput1" ><h6 className="input-text">Employee name</h6></label>
    <input style={{width:"100%"}} type="text" class="form-control" id="exampleFormControlInput1" value={this.state.employee_name} onChange={this.onChangeEmployeeName} placeholder="name@example.com"/>
  </div>
  <input  type="submit" value="submit" className="submit-tasks" />
</form>

</div>

          

        

            </div>
          </main>

            
        )
    }
}

export default withRouter(NewTasks)