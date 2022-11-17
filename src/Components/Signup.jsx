import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
class Signup extends Component {
    state = { userEmail: "", password: "", isDriver: false };

    constructor() {
        super();
        this.handleRadioButton = this.handleRadioButton.bind(this);
        this.submitUserApplication = this.submitUserApplication.bind(this);
    }

    submitUserApplication() {
        Axios.post("http://localhost:3001/api/insert", {
            userEmail: this.state.userEmail,
            password: this.state.password,
            isDriver: this.state.isDriver,
        }).then((response) => {
            console.log(response);
        });
        window.location.href = "signin";
    }

    handleRadioButton() {
        this.setState({ isDriver: !this.state.isDriver });
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
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.submitUserApplication}
                    >
                        Sign up
                    </button>
                </div>
            </div>
        );
    }
}

export default Signup;
