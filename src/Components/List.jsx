import axios from "axios";
import React, {Component} from "react";
import Table from 'react-bootstrap/Table'
import Usertable from './Usertable'
export default class UserList extends Component {

    constructor(props){
        super(props)
        this.state = {
            userlist:[]
        }
    }

    componentDidMount(){
       axios.get('https://www.mecallapi.com/api/users')
      
       .then(res =>{
            console.table(res.data)
            this.setState({
                userlist: res.data
            });
       })
       .catch((error)=>{
        console.log(error)
       }) 
    }


    DataTable(){
        return this.state.userlist.map((res,i) => {
            return <Usertable obj={res} key={i} />;
        });
    }


    render() {
        return(
            <div className="table-wrapper">
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fname</th>
                        <th>Lname</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                </tbody>
                </Table>
            </div>
        );
    }
}