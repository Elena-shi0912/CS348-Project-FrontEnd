import React, {useState,  useEffect} from "react";
import './App.css';
import Axios from "axios";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  let driver;

  const submitUserApplication = () => {
    Axios.post("http://localhost:3001/api/insert", 
              {userName: userName, 
              userEmail: userEmail,
              asDriver: driver
              }).then((response) => { console.log(response) });
    window.location.href = "login.html";
  };

  return (
    <div className="App">
      <h1>Account Sign Up</h1>
        <label>Please consider a user name and enter your email</label>
        <hr/>
      <div></div>
      <div className="ApplicationForm">
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
        <label>Sign up as driver?</label>
        <input type = "checkbox"
                onChange = {driver = this}/>
        <button onClick={submitUserApplication}>Submit</button>
        <hr/>
        <a href="../public/login.html"> Sign in if already has an account </a>
       </div>
    </div>
  );
}

export default App;
