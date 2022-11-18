import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
class Signup extends Component {
    state = { userEmail: "", password: "", isDriver: false, 
              userName: "", phoneNumber: "", passwordShown: false };


    constructor() {
        super();
        this.handleRadioButton = this.handleRadioButton.bind(this);
        this.submitUserApplication = this.submitUserApplication.bind(this);
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    }

    submitUserApplication() {
        Axios.post("http://localhost:3001/api/insert", {
            userEmail: this.state.userEmail,
            password: this.state.password,
            isDriver: this.state.isDriver,
            userName: this.state.userName,
            phoneNumber: this.state.phoneNumber
        }).then((response) => {
            console.log(response);
        });
        window.location.href = "signin";
    }

    handleRadioButton() {
        this.setState({ isDriver: !this.state.isDriver });
    }

    togglePasswordVisibility() {
        this.setState({ passwordShown: !this.state.passwordShown });
    };

    render() {
        return (
            <div className="App">
                <div className="ApplicationForm">
                    <h1>Sign Up</h1>
                    <input
                        type="text"
                        name="userEmail"
                        placeholder="Email address"
                        onChange={(e) => {
                            this.state.userEmail = e.target.value;
                        }}
                    />
                    <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        onChange={(e) => {
                            this.state.userName = e.target.value;
                        }}
                    />
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        onChange={(e) => {
                            this.state.phoneNumber = e.target.value;
                        }}
                    />
                    <input
                        type={this.state.passwordShown ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        onChange={(e) => {
                            this.state.password = e.target.value;
                        }}
                    />
                    <i
                    onClick={this.togglePasswordVisibility}
                    >{eye}</i>
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic radio toggle button group"
                    >
                        <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio1"
                            autoComplete="off"
                            onChange={this.handleRadioButton}
                            defaultChecked
                        />
                        <label
                            className="btn btn-outline-primary"
                            htmlFor="btnradio1"
                        >
                            User
                        </label>
                        <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio2"
                            autoComplete="off"
                            onChange={this.handleRadioButton}
                        />
                        <label
                            className="btn btn-outline-primary"
                            htmlFor="btnradio2"
                        >
                            Driver
                        </label>
                    </div>
                    <hr/>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.submitUserApplication}
                    >
                        Sign up
                    </button>
                </div>
                <p className="forgot-password text-right">
                        Already registered <a href="/signin">Sign in?</a>
                </p>
            </div>
        );
    }
}

export default Signup;
