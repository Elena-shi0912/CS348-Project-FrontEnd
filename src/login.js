import React, {useState,  useEffect} from "react";
import ReactDOM from 'react-dom/client';
import './login.css';
import Axios from "axios";

function Login() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const checkAccount = () => {
    Axios.post("http://localhost:3001/api/check", 
              {userName: userName, 
              userEmail: userEmail,
              }).then((response) => 
              { 
                if (response == false) {
                    console.log("This account does not exist.");
                }
                else {
                    window.location.href="post.html";
                }
            });
  };

  return (
    <div className="Login">
        <h1>Account Sign In</h1>
        <label>Please enter your User Name and User Email</label>
        <hr/>
        <div></div>
      <div className="SignInForm">
        <label>User Name:</label>
        <input type = "text" name = "userName"
               onChange = {(e) => {
                setUserName(e.target.value);
               }} />
        <label>User Email:</label>
        <input type = "text" name = "userEmail"
               onChange = {(e) => {
                setUserEmail(e.target.value);
               }} />

        <button onClick={checkAccount}>Login</button>
        <hr/>
        <a href="index.html"> Sign up if does not have an account </a>
       </div>
    </div>
  );
}

export default Login
