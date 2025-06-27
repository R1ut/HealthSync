import './SignUp.css'
import React from 'react'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'
import name_icon from './Assets/Name.png'
import { useNavigate } from "react-router-dom";

export default function SignUp() 

{
  const navigate = useNavigate();

  return (
  
    <div className = 'container'>
      <div className="header">
        <div className = "text">Sign Up</div>
        <div className ="underline"></div>
      </div>
      <div className="inputs">
        <div className = "input">
          <img src= {name_icon} alt="" style={{ width: "30px", height: "25px", marginRight: "0.5rem" }} />
          <input type="type" placeholder="Name"/>
        </div>
        <div className = "input">
          <img src= {email_icon} alt="" style={{ width: "20px", height: "15px", marginRight: "0.5rem" }} />
          <input type="email" placeholder="Email ID"/>
        </div>
        <div className = "input">
          <img src= {password_icon} alt="" style={{ width: "20px", height: "22px", marginRight: "0.5rem" }} />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div className = "submit-container">
       <div
          className="submit"
          onClick={() => navigate("/interview")}
          style={{ cursor: "pointer" }}
        >
          Sign Up
        </div>
      </div>
    </div>

  )
  

}