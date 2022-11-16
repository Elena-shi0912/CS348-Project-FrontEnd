import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
export default App;

function App() {
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

    const submitUserApplicationD = () => {
        Axios.post("http://localhost:3001/api/insert", {
            userEmail: userEmail,
            password: password,
            isDriver: true,
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
                <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                >
                    <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        autocomplete="off"
                        checked
                    />
                    <label class="btn btn-outline-primary" for="btnradio1">
                        User
                    </label>
                    <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btnradio2">
                        Driver
                    </label>
                </div>
                <button
                    type="button"
                    class="btn btn-primary"
                    onClick={submitUserApplicationU}
                >
                    Sign up
                </button>
            </div>
        </div>
    );
}
