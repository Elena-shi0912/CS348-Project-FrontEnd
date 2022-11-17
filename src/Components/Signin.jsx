import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import "./Signin.css";
class Signin extends Component {
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
    }

    render() {
        return (
            <div className="App">
                <div className="ApplicationForm">
                   <h1>Sign in</h1>
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
                        Sign in
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Don't have account yet <a href="/signup">Sign up?</a>
                </p>
            </div>
        );
    }
}

export default Signin;
