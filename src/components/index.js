import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default class Index extends Component {

    state = {
        userName: '',
        password: '',

        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    handleUserNameChange = event => {
        this.setState({ userName: event.target.value });
    }
    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    }

    handleLogin = event => {
        event.preventDefault();

        const user = {
            userName: this.state.userName,
            password: this.state.password
        };

        // axios.get(`https://jsonplaceholder.typicode.com/users`, { user })
        // For Post
        axios.POST(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>

                <div class="wrapper fadeInDown">
                    <div id="formContent">
                        <div class="fadeIn first">
                            {/* <img src="" id="icon" alt="User Icon" /> */}
                        </div>
                        <form onSubmit={this.handleLogin}>
                            <input type="text" id="login" class="fadeIn second" name="userName" placeholder="login" onChange={this.handleUserNameChange} />
                            <input type="text" id="password" class="fadeIn third" name="password" placeholder="password" onChange={this.handlePasswordChange} />
                            <input type="submit" class="fadeIn fourth" value="Log In" />
                        </form>
                        {/* <div id="formFooter">
                        <a class="underlineHover" href="#">Forgot Password?</a>
                    </div> */}

                    </div>
                </div>
            </div>
        );
    }
}