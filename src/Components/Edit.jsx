import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class Edit extends Component {
    constructor(props){
        super(props)

       // this.onChangeEmpName =  this.onChangeEmpName.bind(this);

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

    onChangeLname = (event) =>{
        this.setState({lname:event.target.value})
    }
    onChangeUsername = (event) =>{
        this.setState({username:event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log("I am Working")
        const editObject = {
            id: this.state.id,
            fname: this.state.fname,
            lname: this.state.lname,
            username:this.state.username
        }
        axios.put('https://www.mecallapi.com/api/users/update' + this.props.id ,editObject)
        .then((res) => { 
            console.log(res.data)
            console.log("data Successfully updated")
        }).catch((error) =>{
            console.log(error)
        })

        // Redirect to Emplist Component
        this.props.history.push('/user-list')

    }

    componentDidMount(){
        axios.get('https://www.mecallapi.com/api/users' + this.props.id)
        .then(res => {
            this.setState({

                id:res.data.id,
                fname: res.data.fname,
                lname: res.data.lname,
                username: res.data.username

            });
        }).catch((error) => {
            console.log(error)
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
        <Form.Label>Fname</Form.Label>
        <Form.Control type="text" value={this.state.fname} onChange={this.onChangeFname} />
        </Form.Group>

        <Form.Group controlId="Lname">
        <Form.Label>Lname</Form.Label>
        <Form.Control type="text" value={this.state.lname} onChange={this.onChangeLname} />
        </Form.Group>

        <Form.Group controlId="UserName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" value={this.state.username} onChange={this.onChangeUsername} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" className="mt-4" type="submit">
             Update User
        </Button>
        </Form>
     </div>
 )
    }
}