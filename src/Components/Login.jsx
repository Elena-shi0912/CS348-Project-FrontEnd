import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Axios from "axios";

function Login() {
    const [userEmail, checkUserEmail] = useState("");
    const [password, checkPassword] = useState("");
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const checkAccount = () => {
        Axios.post("http://localhost:3001/api/check", {
            userEmail: userEmail,
            password: password,
        }).then((response) => {
            if (response == false) {
                console.log("This account does not exist.");
            } else {
                window.location.href = "posting";
            }
        });
        window.location.href = "posting";
    };

    return (
        <div className="Login">
            <h1>Account Sign In</h1>
            <label>Please enter your User Email and Password</label>
            <hr />
            <div></div>
            <div className="SignInForm">
                <label>User Email:</label>
                <input
                    type="text"
                    name="userEmail"
                    onChange={(e) => {
                        checkUserEmail(e.target.value);
                    }}
                />
                <label>Password:</label>
                <input
                    type="text"
                    name="password"
                    onChange={(e) => {
                        checkPassword(e.target.value);
                    }}
                />
                <label class="container">
                    {" "}
                    Remember Me
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={setChecked}
                    />
                    <span class="checkmark"></span>
                </label>

                <button onClick={checkAccount}>Login</button>
                <hr />
                <Link to="../"> Sign up if does not have an account </Link>
            </div>
        </div>
    );
}

export default Login;
