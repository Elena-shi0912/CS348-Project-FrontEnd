import React, {useState,  useEffect} from "react";
import './App.css';
import Axios from "axios";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const submitUserApplication = () => {
    Axios.post("http://localhost:3001/api/insert", 
              {userName: userName, 
              userEmail: userEmail,
              }).then((response) => { console.log(response) });
  };

  return (
    <div className="App">
      <h1>CS348 Project</h1>
      <label>Hello world!</label>
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

        <button onClick={submitUserApplication}>Submit</button>
       </div>
    </div>
  );
}

export default App;
