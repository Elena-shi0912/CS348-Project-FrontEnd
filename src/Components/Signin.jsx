import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import "./Signin.css";
class App extends Component {
    state = { userEmail: "", password: "" };

    constructor() {
        super();
        this.checkAccount = this.checkAccount.bind(this);
    }

    checkAccount() {
        Axios.post("http://localhost:3001/api/check", {
            userEmail: this.state.userEmail,
            password: this.state.password,
        }).then((response) => {
            if (response == false) {
                console.log("This account does not exist.");
            } else {
                window.location.href = "posting";
            }
        });
        window.location.href = "posting";
    }

    render() {
        return (
            <div className="App">
                <div className="ApplicationForm">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Sign up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link">
                                Sign in
                            </Link>
                        </li>
                    </ul>
                    <input
                        type="text"
                        name="userEmail"
                        placeholder="Email address"
                        onChange={(e) => {
                            this.state.userEmail = e.target.value;
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => {
                            this.state.password = e.target.value;
                        }}
                    />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.checkAccount}
                    >
                        Sign up
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
