
import React from 'react'
import '../Styles/register_page.css'
import $ from 'jquery'
import {findDOMNode} from 'react-dom'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import axios from 'axios'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import {withRouter} from 'react-router'









class UpdateEmployee extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      employee_id:'',
      first_name: '',
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
      user_name:'',
      password: '',
      postList:[],
      isLoading:true,
      errormessage:'',

     


      

    }

    this.infoChangeFname  = this.infoChangeFname .bind(this)
    this.infoChangeGender = this.infoChangeGender.bind(this)
    this.infoChangeBirthdate = this.infoChangeBirthdate.bind(this)
    this.infoChangeNic = this.infoChangeNic.bind(this)
    this.infoChangeJoined_date = this.infoChangeJoined_date.bind(this)
    this.infoChangeAddress = this.infoChangeAddress.bind(this)
    this.infoChangeTelephone = this.infoChangeTelephone.bind(this)
    this.infoChangeDepartment = this.infoChangeDepartment.bind(this)
    this.infoChangeDesignation = this.infoChangeDesignation.bind(this)
    this.infoChangeEduqual = this.infoChangeEduqual.bind(this)
    this.infoChangeProfqual = this.infoChangeProfqual.bind(this)

    this.onSubmit = this.onSubmit.bind(this)
  }




    componentDidMount(){
        const EmployeeId = this.props.match.params.employee_id
        axios.get(`http://127.0.0.1:8000/api/employee/${EmployeeId}/`)
        .then(res => {
            this.setState({
                employee_id:res.data.empID,
                first_name:res.data.fname,
                last_name:res.data.lname,
                NIC:res.data.nic,
                user_name:res.data.user_name,
                password:res.data.password,
                birth_date:res.data.dob,
                joined_date:res.data.joined_date,
                address:res.data.address,           
                eduqual:res.data.edu_qualifications,
                profqual:res.data.prof_edu_qualifications,
                designation:res.data.designation,
                edepartment:res.data.department,
                gender:res.data.gender,


            })
            
        })

        axios.get(`http://127.0.0.1:8000/api/phone/${EmployeeId}/`)
        .then(res =>{
            this.setState({
                telephone:res.data.employee_phone
            })
        })


        
    }




  infoChangeFname = (e) => {

    this.setState({
      first_name:e.target.value
    })
  }

  infoChangeLname = (e) => {
    this.setState({
      last_name: e.target.value,
     

    })
  }

  infoChangeGender = (e) => {
    this.setState({
      gender: e.target.value,
     

    })
  }

  infoChangeBirthdate = (e) => {
    this.setState({
      birth_date: e.target.value,
     

    })
  }


  infoChangeNic = (e) => {
    this.setState({
      NIC: e.target.value,
     

    })
  }


  infoChangeAddress = (e) => {
    this.setState({
      address: e.target.value,
     

    })
  }


  infoChangeTelephone = (e) => {
    this.setState({
      telephone: e.target.value,
     

    })
  }


  infoChangeJoined_date = (e) => {
    this.setState({
      joined_date: e.target.value,
     

    })
  }


  infoChangeDepartment = (e) => {
    this.setState({
      edepartment: e.target.value,
     

    })
  }

  infoChangeDesignation= (e) => {
    this.setState({
      designation: e.target.value,
     

    })
  }

  infoChangeEduqual= (e) => {
    this.setState({
     eduqual: e.target.value,
     

    })
  }

  infoChangeProfqual= (e) => {
    this.setState({
      profqual: e.target.value,
     

    })
  }



reset = () => {
    this.setState({
      employee_id:'',
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
    e.preventDefault();

    const isValid = this.formValidation();

    if(isValid){
        axios.put(`http://127.0.0.1:8000/api/employee/${this.state.employee_id}/`, {

            empID:this.state.employee_id,

            fname:this.state.first_name,
            lname:this.state.last_name,
            nic:this.state.NIC,
            user_name:this.state.user_name,
            password:this.state.password,
            dob:this.state.birth_date,
            joined_date:this.state.joined_date,
            address:this.state.address,           
            edu_qualifications:this.state.eduqual,
            prof_edu_qualifications:this.state.profqual,
            designation:this.state.designation,
            department:this.state.edepartment,
            gender:this.state.gender,


        })
            .then(res => console.log(res));
            alert("the employee has been Updated sucessfully")
            axios.get('http://127.0.0.1:8000/api/employee/')
            .then(res => {
              this.setState({
                employee_id:res.empID
              })


            })

            

            axios.put(`http://127.0.0.1:8000/api/phone/${this.state.employee_id}/`, {
                employee_phone:this.state.telephone,
                empID:this.state.employee_id,
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
  }


 

  render(){

    const { isLoading, postList ,errors} = this.state;

    const inputProps = {
      step: 300,
    };

 
  return (
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
   
   <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2 text-light">Add New Employee</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                  <button class="btn btn-sm btn-outline-secondary"></button>
                  <button class="btn btn-sm btn-outline-secondary"></button>
                </div>
                <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                  
                </button>
              </div>
            </div>

            <canvas class="my-4" id="myChart" width="900" height="380"></canvas>

        <div class="table-responsive form-container">
            <Container maxWidth="md">
        <div className=""></div>      
      <Typography component="div" style={{ backgroundColor: 'white', height: '250vh', border:'1px black'}} >
      <div className=""></div> 
        

      <form onSubmit={this.onSubmit} method="post">

      <TextField 
      
      className="first_text" 
      id="standard-basic"
       size="medium" 
       label="First Name"
       name="first_name"
       onChange={this.infoChangeFname}
       value={this.state.first_name}
       required

        />
        

<TextField 
      
      className="last_text" 
      id="standard-basic"
       size="medium" 
       label="Last name "
       name="last_name"
       onChange={this.infoChangeLname}
       value={this.state.last_name}
       required
        />

      <lable className="gender-text">Gender</lable>
      <FormControl variant="outlined" className="gender-controll">
        <InputLabel id="demo-simple-select-label">select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.gender}
          onChange={this.infoChangeGender}
          name="gender"
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'UnKnown'}>Unknown</MenuItem>
        </Select>
      </FormControl>

      <TextField
          required
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          className="birth-date"
          onChange={this.infoChangeBirthdate}
          value={this.state.birth_date}

          name="birth_date"
          InputLabelProps={{
          shrink: true,
          
          

    }}

  />
      <TextField 
      required
      className="nic" 
      id="standard-basic" 
      size="medium" 
      label="NIC/Passport"
      onChange={this.infoChangeNic}
      value={this.state.NIC}
      name="NIC"
       />

      <TextField 
      required
      className="Address" 
      id="standard-basic"
       size="medium" 
       label="Address"
       onChange={this.infoChangeAddress}
       value={this.state.address}
       name="address"
       
       />

      <TextField 
      required
      className="Telephone" 
      id="standard-basic" 
      size="medium" 
      label="Telephone"
      onChange={this.infoChangeTelephone}
      value={this.state.telephone}
      name="telephone"
      
      />
      
     

      <TextField 
      required
      type="date"
      className="e_name" 
      id="standard-basic" 
      size="medium" 
      label="Joined date"
      onChange={this.infoChangeJoined_date}
      value={this.state.joined_date}
      name="joined_date"
      InputLabelProps={{
        shrink: true,
        
        

  }}
      
      />

<FormControl className="e_address">
        <InputLabel id="demo-simple-select-helper-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={this.state.edepartment}
          onChange={this.infoChangeDepartment}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'front_office'}>Front Office</MenuItem>
          <MenuItem value={'kitchen'}>Kitchen</MenuItem>
          <MenuItem value={'security'}>Security</MenuItem>
          <MenuItem value={'cleaning'}>Cleaning</MenuItem>
        </Select>
        
      </FormControl>


      <TextField 
      required
      className="e_contact" 
      id="standard-basic" 
      size="medium" 
      label="Designation"
      onChange={this.infoChangeDesignation}
      value={this.state.designation}
      name="e_contact"

/>

      <textarea 
      required
      placeholder="Educational qualifications"
      id="standard-basic"  
      label="Educational_qualifications"
      name="educational_qualification"
      className="educational_qualification"
      onChange={this.infoChangeEduqual}
      value={this.state.eduqual}
>   </textarea>

    <textarea 
      required
      id="standard-basic"  
      placeholder="Professional qualifications"
      name="educational_qualification"
      className="proff_qualification"
      onChange={this.infoChangeProfqual}
      value={this.state.profqual}
>   </textarea>
      <input type="submit" value="update" className="submit-employee" />
<lable className="error-massage-fname">{this.state.errormessage}</lable>

     
      </form>

      

      </Typography>
        
      </Container>
              </div>

            


    </main>
  )
};

}



export default withRouter(UpdateEmployee)


























