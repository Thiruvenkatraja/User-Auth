import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class Add extends Component {

    constructor(props){
        super(props)

       

        this.state = {
            id:'',
            fname: '',
            lname: '',
            username: ''
        }
    }
    onChangeId = (event) => { 
        //console.log(event.target.value)   
        this.setState({id:event.target.value})
}
    onChangeFname = (event) => { 
            //console.log(event.target.value)   
            this.setState({fname:event.target.value})
    }

    onChangeLname = (event) => { 
        //console.log(event.target.value)   
        this.setState({lname:event.target.value})
        }

    onChangeUsername = (event) =>{
            this.setState({username:event.target.value})
        }

    onSubmit = (event) => {
        event.preventDefault();
        console.log("I am Working")
        const addObject = {
            id: this.state.id,
            fname: this.state.fname,
            lname: this.state.lname,
            username: this.state.username
        }
        axios.post('https://www.mecallapi.com/api/users/create',addObject)
        .then(res => console.log(res.data))

        this.setState({
        id: '',
        fname: '',
        lname: '',
        username:''
    })
    }


    render() {
        return(<div className="form-wrapper">
               <Form onSubmit={this.onSubmit}>

               <Form.Group controlId="UserId">
               <Form.Label>UserId</Form.Label>
               <Form.Control type="number" value={this.state.id} onChange={this.onChangeId} />
               </Form.Group>

               <Form.Group controlId="Fname">
               <Form.Label>FName</Form.Label>
               <Form.Control type="text" value={this.state.fname} onChange={this.onChangeFname} />
               </Form.Group>

               <Form.Group controlId="Lname">
               <Form.Label>Lname</Form.Label>
               <Form.Control type="text" value={this.state.lname} onChange={this.onChangeLname} />
               </Form.Group>

               <Form.Group controlId="Username">
               <Form.Label>Username</Form.Label>
               <Form.Control type="text" value={this.state.username} onChange={this.onChangeUsername} />
               </Form.Group>

               <Button variant="danger" size="lg" block="block" className="mt-4" type="submit">
                   Add
               </Button>
               </Form>
            </div>
        )
    }
}