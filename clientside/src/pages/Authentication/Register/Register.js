import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import './Register.css'

function Register({ authenticate }) {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const registerData = {
    name: name,
    password: password
  }

  const transferRegisterDataToBackend = () => {
    fetch("http://localhost:3002/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(registerData)
  })
  authenticate();
  navigate("/");
  }

  return (
    <section className='register'>
      <form>
      <h1 style={{color: "white"}}>Please Register</h1>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div>
          <label></label>
          <input type="submit" onClick={transferRegisterDataToBackend}></input>
        </div>
      </form>
    </section>
  )
}

export default Register;