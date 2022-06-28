import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

function Login({ authenticate }) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const navigate = useNavigate();

  const loginData = {
    name: enteredName
  }

  const findLoginDataInBackend = () => {
    fetch("http://localhost:3002/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(loginData)
  })
  .then((response) => response.json())
  .then((result) => loginHandler(result))
  };

  const loginHandler = (result) => {
    console.log(enteredPassword)
    console.log(result.password)
    if (Object.keys(result).length === 1) {
      if (enteredPassword === result[1].password) {
        authenticate();
        navigate("/");
      } else {
        alert("Something went wrong")
      }
    } else {
      alert("User not found")
    }
  }

  return (
    <section className='login'>
      <form>
      <h1 style={{color: "white"}}>Please Login</h1>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" onChange={(e) => setEnteredName(e.target.value)} required/>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setEnteredPassword(e.target.value)} required/>
        </div>
        <div>
          <label></label>
          <input type="submit" onClick={findLoginDataInBackend}></input>
        </div>
        <Link to="/register">Not registerd?</Link>
      </form>
    </section>
  )
}

export default Login;