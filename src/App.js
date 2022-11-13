import React, {useState,  useEffect} from "react";
import './App.css';
import Axios from "axios";

function App() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitUserApplicationU = () => {
    Axios.post("http://localhost:3001/api/insert", 
              {userEmail: userEmail, 
              password: password,
              isDriver: false
              }).then((response) => { console.log(response) })};

  const submitUserApplicationD = () => {
    Axios.post("http://localhost:3001/api/insert", 
              {userEmail: userEmail, 
              password: password,
              isDriver: true
              }).then((response) => { console.log(response) })};

  return (
    <div className="App">
      <h1>Account Sign Up</h1>
        <label>Please consider a user name and enter your email</label>
        <hr/>
      <div></div>
      <div className="ApplicationForm">
        <label>User Email:</label>
        <input type = "text" name = "userEmail"
               onChange = {(e) => {
                setUserEmail(e.target.value);
               }} />
        <label>Password:</label>
        <input type = "text" name = "password"
               onChange = {(e) => {
                setPassword(e.target.value);
               }} />
        <button onClick={submitUserApplicationU}>Submit As User</button>
        <button onClick={submitUserApplicationD}>Submit As Driver</button>
        <hr/>
        <a href="../public/login.html"> Sign in if already has an account </a>
       </div>
    </div>
  );
}

export default App;
