import axios from "axios";
import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import {
    Link
  } from "react-router-dom";
export default class Usertable extends Component {

    deleteUserdata = (id) =>{
        axios.delete(
            `https://www.mecallapi.com/api/users/delete${id}`,
        )
        .then((res) => {
            console.log('User Data Successfully deleted')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render(){
        return(
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.fname}</td>
                <td>{this.props.obj.lname}</td>
                <td>{this.props.obj.username}</td>
                <td>
                <Link className="edit-link" 
                to={'/edit-user/' + this.props.obj.id}
                >
                    Edit</Link>
                <Button onClick={this.deleteUserdata(this.props.obj.id)} size="sm" variant="danger"> Delete</Button>
                </td>
                <td>
                <Link className="edit-link" 
                to={'/add-user/'}
                >
                    Add</Link>
                </td>
            </tr>
        )
    }

}