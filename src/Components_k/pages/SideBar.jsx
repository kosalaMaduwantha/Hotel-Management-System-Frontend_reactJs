import React from 'react'
import '../Styles/sideBar.css'

import {Link} from 'react-router-dom'
import logo from '../Styles/1.png'



class SideBar extends React.Component{
    render(){
        return(
          
<nav class="col-md-2 d-none d-md-block bg-light sidebar-k">
  <div class="sidebar-sticky-k">
             

          <img src={logo} alt="logo" className="main-logo"/>

    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <i className="fas fa-user-alt fa-xs first-topic">
                <button class="btn btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Employees
                </button>
              </i>
            </h2>
        </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body">
          <i className="fas fa-circle sub-icons1"><Link exact to="/Employee_manage/employee" className="positioning-links1">New Employee</Link></i><br/>
          <i className="fas fa-circle sub-icons2"><Link to="/Employee_manage/Current_employees" className="positioning-links2" >Current Employee</Link></i>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
         <i className="fas fa-building fa-xs second-topic">
           <button class="btn btn collapsed button-style" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             Departments
            </button>
          </i>
      </h2>
    </div>

    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
        <div class="card-body">
            <i className="fas fa-circle sub-icons3"><Link exact to="/Employee_manage/Departments/FrontOffice" className="positioning-links3" >Front Office</Link></i><br/>
            <i className="fas fa-circle sub-icons4"><Link   to="/Employee_manage/Departments/Kitchen" className="positioning-links4" >Kitchen</Link></i><br/>
            <i className="fas fa-circle sub-icons5"><Link to="/Employee_manage/Departments/Security" className="positioning-links5"  >Security</Link></i><br/>
            <i className="fas fa-circle sub-icons6"><Link to="/Employee_manage/Departments/Cleaning" className="positioning-links6" >Cleaning</Link></i>
        </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <i className="fas fa-money-check-alt fa-xs third-topic"> 
            <button class="btn btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Task management
            </button>
        </i>
      </h2>
    </div>

    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
            <i className="fas fa-circle sub-icons7"><Link exact to="/Employee_manage/NewTasks" className="positioning-link7" >New Task</Link></i><br/>
            <i className="fas fa-circle sub-icons8"><Link to="/Employee_manage/AssingedTasks" className="positioning-link8" >Assigned Task</Link></i><br/>
            <i className="fas fa-circle sub-icons11"><Link to="/Employee_manage/CompletedTasks" className="positioning-link11" >Completed tasks</Link></i><br/>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingFour">
      <h2 class="mb-0">
       <i className="fas fa-money-check-alt fa-xs fourthTopic"> 
        <button class="btn btn collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                Sallary
          </button>
        </i>
      </h2>
    </div>

    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div class="card-body">
            <i className="fas fa-circle sub-icons9"><Link className="positioning-link9" >New Task</Link></i><br/>
            <i className="fas fa-circle sub-icons10"><Link className="positioning-link10" >Assigned Task</Link></i><br/>
            

      </div>
    </div>
  </div>
</div>
 

 
 
    
</div>
</nav>
           
          
           
        )
    }
}

export default SideBar