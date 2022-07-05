import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

class App extends Component {
    constructor() {
        super()
        this.state = {
            id:'',
            firstName:'',
            lastName:'',
            email:'',
            mobile:'',
            status:'',
            password:'',
            accountType:''
        }
        this.changeID = this.changeID.bind(this)
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeMobileNumber = this.changeMobileNumber.bind(this)
        this.changeStatus = this.changeStatus.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeAccountType = this.changeAccountType.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeID(event){
        this.setState({
            id:event.target.value
        })
    }
    changeFirstName(event){
        this.setState({
            firstName:event.target.value
        })
    }
    changeLastName(event){
        this.setState({
            lastName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changeMobileNumber(event){
        this.setState({
            mobile:event.target.value
        })
    }
    changeStatus(event){
        this.setState({
            status:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    changeAccountType(event){
        this.setState({
            accountType:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            mobile: this.state.mobile,
            status: this.state.status,
            password: this.state.password,
            accountType: this.state.accountType
        }

        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))
        
        //this.state({
        //    id:'',
        //   firstName:'',
        //    lastName:'',
        //    email:'',
        //    mobile:'',
        //    status:'',
        //    password:'',
        //   accountType:''
        //})
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Registration
                        </h2>
                        <form onSubmit={this.onSubmit}>
                            <input type='number'
                            placeholder="ID"
                            onChange={this.changeID}
                            value={this.state.id}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder="First Name"
                            onChange={this.changeFirstName}
                            value={this.state.firstName}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder="Last Name"
                            onChange={this.changeLastName}
                            value={this.state.lastName}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder="E-mail"
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />  

                            <input type='number'
                            placeholder="Mobile Number"
                            onChange={this.changeMobileNumber}
                            value={this.state.mobile}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder="Status"
                            onChange={this.changeStatus}
                            value={this.state.status}
                            className='form-control form-group'
                            />

                            <input type='password'
                            placeholder="Password"
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder="Account Type"
                            onChange={this.changeAccountType}
                            value={this.state.accountType}
                            className='form-control form-group'
                            />

                            <center>
                                <input type='submit' className='btn btn-danger btn-block' value='submit' />
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;