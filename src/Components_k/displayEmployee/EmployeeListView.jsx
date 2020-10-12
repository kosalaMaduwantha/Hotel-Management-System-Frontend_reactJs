import React from 'react'
import Employee from './Employee'
import axios from 'axios'
import {withRouter} from 'react-router'





class EmployeeListView extends React.Component{

    state = {
        employees: []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/employee/')
        .then(res => {
            this.setState({
                employees: res.data
            })
            console.log(res.data)
        })
        
    }

    render(){


        return(
            <Employee  listData={this.state.employees}/>
        )
    }
}

export default withRouter(EmployeeListView)