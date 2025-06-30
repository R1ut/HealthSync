import './Login.css'
import React from 'react'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'
export default function Login() 
{

  return (
  
    <div className = 'container'>
      <div className="header">
        <div className = "text">Login</div>
        <div className ="underline"></div>
      </div>
      <div className="inputs">
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
        <div className = "submit">Login</div>
      </div>
    </div>

  )
  

}
