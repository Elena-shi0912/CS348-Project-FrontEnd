import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
export default Signin;

function Signin() {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitUserApplicationU = () => {
        Axios.post("http://localhost:3001/api/insert", {
            userEmail: userEmail,
            password: password,
            isDriver: false,
        }).then((response) => {
            console.log(response);
        });
        window.location.href = "login";
    };

    return (
        <div className="App">
            <div className="ApplicationForm">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">
                            Sign up
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/signup" class="nav-link">
                            Sign in
                        </Link>
                    </li>
                </ul>
                <input
                    type="text"
                    name="userEmail"
                    placeholder="Email address"
                    onChange={(e) => {
                        setUserEmail(e.target.value);
                    }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button
                    type="button"
                    class="btn btn-primary"
                    onClick={submitUserApplicationU}
                >
                    Sign in
                </button>
            </div>
        </div>
    );
}
