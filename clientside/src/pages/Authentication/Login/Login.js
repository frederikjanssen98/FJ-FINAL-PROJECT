import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import Nav from '../Auth_Nav/Nav';

function Login({ authenticate }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginName = {
    loginName: name
  }

  function findLoginDataInBackend () {
    fetch("http://localhost:3002/login" , {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
        "Accept": "application/json"
      },
      body: JSON.stringify(loginName)
  })
  .then((response) => response.json())
  .then((data) => {loginHandler(data)})
  }

  const loginHandler = (data) => {
    if (Object.keys(data).length === 1) {
      console.log(password)
      console.log(data[0].password)
      if (password === data[0].password) {
        authenticate();
        navigate("/");
      } else {
        alert("Wrong password");
      }
    } else {
      alert("User not found")
    }
  }
  return (
    <>
    <Nav/>
    <section className='logincontainer'>
    <section className='login'>
      <form className='loginform'>
      <h1 style={{color: "white"}}>Please Login</h1>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div>
          <label></label>
          <input type="submit" onClick={findLoginDataInBackend}></input>
        </div>
        <Link to="/register">Not registerd?</Link>
      </form>
    </section>
    </section>
    </>
  )
}

export default Login;