import React from 'react'
import { List, Avatar, Space } from 'antd';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import {withRouter} from 'react-router'















class Employee extends React.Component {
  constructor(props){
    super(props);




  }






  

  deleteRow = (id,e) => {
    e.preventDefault();

    
    axios.delete('http://127.0.0.1:8000/api/employee' + `/${id}/`)
        .then(res => {
           
            this.props.history.push('/Employee_manage/DeleteCompletion')
        });

       
}


updateRow = (item,e) => {
  this.props.history.push(`/Employee_manage/update/${item.empID}`)
}

render(){



    return(
        




  <List
  style={{ background: "white", borderColor: "black" , padding:"20px"}}
    itemLayout="vertical"
    size="extra-large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 7,
    }}
    dataSource={this.props.listData}

    renderItem={item => (
      <List.Item

        key={item.title}


      >
        
            <Button variant="contained" type="submit" color="secondary" className="button-delete" onClick={(e) => this.deleteRow(item.empID, e) }>
                  Delete
            </Button>

            <Button variant="contained" type="submit" color="primary" className="button-update" onClick={(e) => this.updateRow(item,e)}>
                  Update
            </Button>

        <List.Item.Meta
        style={{ background: "#E8E8E8", borderColor: "white" , padding:"50px"}}
          avatar={<Avatar src={item.avatar} />}
    title={<Link to={`/Employee_manage/${item.empID}`}>{item.fname}</Link>}
          description={item.designation}
        />
        {item.content}
      </List.Item>
    )}
  />
    )
      }
}

export default withRouter(Employee)