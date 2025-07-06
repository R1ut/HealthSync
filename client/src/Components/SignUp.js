import './SignUp.css';
import React, { useState } from 'react';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';
import name_icon from './Assets/Name.png';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [permission, setPermission] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(false);
  const navigate = useNavigate();

  function handleSubmitClick() {
    setPermission(true); 
    setPendingNavigation(true); //  Set flag to allow nav after permission
  }

  function handlePermissionResponse(response) {
    if (response === 'yes' && pendingNavigation) {
      navigate("/interview");
    }
    setPermission(false);
    setPendingNavigation(false);
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={name_icon} alt="" style={{ width: "30px", height: "25px", marginRight: "0.5rem" }} />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" style={{ width: "20px", height: "15px", marginRight: "0.5rem" }} />
          <input type="email" placeholder="Email ID" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" style={{ width: "20px", height: "22px", marginRight: "0.5rem" }} />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleSubmitClick} style={{ cursor: "pointer" }}>
          Sign Up
        </div>
      </div>

      {permission && (
        <div className='overlay'>
          <div className="PerBox">
            <div className='together'>
              <h2>Permission</h2>
              <button onClick={()=> handlePermissionResponse('yes')}>X</button>
            </div>
            <p>
              Do you give permission to have your data and medical reports entered by you to stay on this website? Your data will be kept private and will not be shared with anyone. Do you agree?
            </p>
            <button className="Yes" onClick={() => handlePermissionResponse('yes')}>Yes</button>
            <button className="No" onClick={() => handlePermissionResponse('no')}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}
//Make that when hover on the x create a tag that shows that do it for later.