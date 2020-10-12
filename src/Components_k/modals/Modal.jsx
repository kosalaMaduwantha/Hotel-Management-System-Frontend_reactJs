import React from "react";
import {withRouter} from 'react-router'
import axios from 'axios'



class Modal extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            emplo:this.props.data,
            employeeTasks:[]
        }

    }

    componentDidMount(){



        let isValid = true

        if(isValid){
    
    
    
    
            axios.post('http://127.0.0.1:8000/api/task/', {
    
              empID:this.state.emplo.employee_id,
              tack_description:this.state.emplo.description,
              task:this.state.emplo.task,
              time_duration:this.state.emplo.time_duration,
              status:"pending",
              emp_name:this.state.emplo.employee_name,
    
    
    
            })
                .then(res => console.log(res))


            
    
    
              }

       

    }

    onClose = e => {
        this.props.history.push({
            pathname:"/Employee_manage/NewTasks",

          })
        
      };

    render() {
        if(!this.props.show){
            return null;
        }
      return (
          <>
      
      <div>Fuck modala</div>
      <button
            onClose={e => {
              this.onClose(e);
            }}
          >
            Close
          </button>

        
        </>
        );
    }
  }

export default withRouter(Modal)