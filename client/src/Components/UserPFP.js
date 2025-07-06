import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { InterviewContext } from "./InterviewContext";
import './UserPFP.css';
export default function UserPFP() {
  const { formData } = useContext(InterviewContext);
  const navigate = useNavigate(); 
  const { age, gender, height, weight, takesMedication, sleepHours } = formData;

  return (
  <div style={{ display: "flex" }}>
    <div className="dashboard">
      <div className="titletext">
        <h2>Dashboard</h2>
      </div>
      <div className="sidetext">
        <p onClick={() => navigate("/notifications")}>- Notifications</p>
        <p onClick={() => navigate("/info")}>- Info</p>
        <p onClick={() => navigate("/UserPFP")}>- User Profile</p>
        <p onClick={() => navigate("/history")}>- Patient History</p>
        <p onClick={() => navigate("/settings")}>- Settings</p>
      </div>
    </div>

    <div style={{ marginLeft: "200px", padding: "1rem 2rem 0 2rem", marginTop: "-2rem" }}>
      <h1>Your Information</h1>
      <div className="infostats">
          <h2>Info Stats</h2>
          <p>Weight: {weight} kg</p>
          <p>Height: {height} cm</p>
          <p>Gender: {gender}</p>
          <p>Age: {age}</p>
          <p>Medication: {takesMedication}</p>
          <p>Sleep: {sleepHours} hrs</p>
        </div>
      <button className="Buttons" onClick={() => navigate("/Interview")}>
        Want to Change Info?
      </button>
      <div className="infostats" style={{ marginLeft: "300px", marginTop: "-200px" }}>
        <h2>Profile</h2>
        <p>Name:</p> 
        <p>Email:</p> 
        <p>Password:</p> 
      </div>
    </div>
  </div> 
  );
}
